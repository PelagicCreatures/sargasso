import http from 'http';
import fileSystem from 'fs';
import path from 'path';
import { Server } from 'socket.io';
import mime from 'mime';
import { getObservable } from '../lib/ObservableObject.mjs'
import { ObservableServer } from '../lib/ObservableServer.mjs'
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))


const server = http.createServer((req, res) => {
	const { method, url, headers } = req;
	const filePath = path.join(__dirname, '../', url === '/' ? '/index.html' : url);
	if(!fileSystem.existsSync(filePath)) {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		return res.end('not found')
	}

	const mimeType = mime.getType(filePath)

	const readStream = fileSystem.createReadStream(filePath);
	res.writeHead(200, { 'Content-Type': mimeType });
	readStream.pipe(res);
})

const io = new Server(server, {
	connectionStateRecovery: {
		maxDisconnectionDuration: 2 * 60 * 1000,
		skipMiddlewares: true
	}
})

io.on('connection', (socket) => {
	console.log('connection');

	if (socket.recovered) {
		console.log('connection recovered');
	}
	else {
		const auth = async (id, sourceId, cb) => {

			console.log('authenticate', id, sourceId, cb);

			const cookies = {}
			const cookieHeader = socket.request.headers?.cookie || '';
			cookieHeader.split(`;`).forEach(function(cookie) {
				const [ key, ...rest] = cookie.split(`=`);
				const value = rest.join(`=`).trim();
				if(key && value) {
					cookies[key?.trim()] = decodeURIComponent(value);
				}
			});


			if (!cookies['access-token']) {
				return cb({ status: 'missing token' })
			}

			// ** in the real world you would probably lookup and validate access token and user

			// find or build observable for id
			let observed = getObservable(id)

			if(!observed) { 
				let todo = {
			      lastId: 0,
			      list: []
			    };
				observed = new ObservableServer(id, todo, { authoritative: true })
			}

			socket.data.sourceId = sourceId
			socket.data.cookies = cookies

			observed.on('status', (message) => {
				console.log('connection status', message)
			})

			observed.on('error', (message) => {
				console.log('connection error %j', message)
			})

			observed.connect(socket)

			cb({ status: 'ok' })
		}

		socket.on('authenticate', auth)

		socket.on('disconnect', () => {
			console.log('disconnected anon');
			socket.off('authenticate', auth);
		});

		socket.onAny((eventName, ...args) => {
		  console.log('socket event', eventName, args)
		});
	}
});


server.listen(8000);
