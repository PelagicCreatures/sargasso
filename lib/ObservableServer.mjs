import {
	ObservableObject
}
	from './ObservableObject.mjs'

import pointer from 'json-pointer'


class ObservableServer extends ObservableObject {
	constructor (id, obj = {}, options) {
		super(id, obj, options)
		this.sockets = []
	}

	// listen for remote 'change' events
	listen (socket) {
		if(this.sockets.indexOf(socket) === -1) {

			this.sockets.push(socket)

			socket.on('disconnect', (reason) => {
				this.emit('error',{ message: 'disconnect', reason: reason })
				this.sockets.splice(this.sockets.indexOf(socket), 1)
			});

			socket.on('change', (event) => {
				for(const change of event.changes) {
					const type = change.type
					const path = change.currentPath
					const newValue = change.newValue
					const previousValue = change.previousValue

					const ptr = '/' + path.replace(/\./g,'/')

					if(type === 'update' || type === 'add') {
						if(!pointer.has(this.data, ptr) || (pointer.get(this.data, ptr) !== newValue)) {
							pointer.set(this.data, ptr, newValue)
						}
					}
					if(type === 'delete') {
						if(pointer.has(this.data, ptr)) {
							pointer.remove(this.data, ptr)
						}
					}
				}

				socket.to(this.id).emit('change', {
					source: event.sourceId,
					changes: event.changes
				})
			})
			
			socket.join(this.id)

		}
		// ** TODO **: optionally send initial data to client
	}

	destroy () {
		this.sockets.forEach((socket) => {
			socket.disconnect(true)
		})
		super.destroy()
	}
}

export {
	ObservableServer 
}
