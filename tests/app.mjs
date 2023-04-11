import http from 'http';
import fileSystem from 'fs';
import path from 'path';
import mime from 'mime';
import { getObservable } from '../lib/ObservableObject.mjs'
import { ObservableServer, connectionListener } from '../lib/ObservableServer.mjs'
import * as urlUtils from 'url'
const __dirname = urlUtils.fileURLToPath(new URL('.', import.meta.url))

const server = http.createServer((req, res) => {
	const { method, url, headers } = req;

	let matches = url.match(/^\/observable\/(\w+)/)
	if(matches && matches[1]) {
		let observed = getObservable(matches[1])

		if(!observed) { 
			let todo = {
		    	lastId: 0,
  				list: []
		    };
			observed = new ObservableServer('todo', todo, { authoritative: true })
		}

		const myURL = urlUtils.parse(url,true)
		if(myURL.query?.reset) {
			observed.data.lastId = 0;
			observed.data.list = [];
		}
		if(myURL.query?.push) {
			observed.data.list.push({ id: ++observed.data.lastId, name: 'server add' });
		}
		res.writeHead(200, { 'Content-Type': 'application/json' });
		return res.end(JSON.stringify(observed?.data||{}))
	}

	// static files for tests and examples
	matches = url.match(/^\/(dist|example|lib|tests|node_modules)\//)
	if(!matches) {
		res.writeHead(401, { 'Content-Type': 'application/html' });
		return res.end('bad request')
	}
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

// demo initial data
const todo = {
	lastId: 0,
	list: []
}

// demo auth function - replace with your own
// in this case we expect a cookie called 'access-token' in the request headers
// @param socket - socket.io socket
// @param id - observable id
const auth = async (socket, id) => {

	console.log('authenticate', id);

	if(id !== 'todo') {
		throw(new Error('unknown observable id',id))
	}

	// demo only - access token cookie handshake
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
		throw(new Error('missing token'))
	}

	return todo // return initial data object structure
}


// start the io server
connectionListener(server, auth)

server.listen(8000);
