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

const io = new Server(server);


io.on('connection', (socket) => {
	console.log('connection');

	socket.on('authenticate', async (id, sourceId, cb) => {

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
		const observed = getObservable(id) || new ObservableServer(id)

		socket.sourceId = sourceId
		socket.cookies = cookies

		observed.listen(socket)

		cb({ status: 'ok' })
	});

	socket.on('disconnect', () => {
		console.log('disconnected anon');
	});
});


server.listen(8000);
