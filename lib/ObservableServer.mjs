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
	connect (socket) {
		if(this.sockets.indexOf(socket)> -1) {
			this.emit('status', 'ObservableServer connect - already connected?')
		}
		else {
			this.emit('status', 'ObservableServer connecting.')

			this.sockets.push(socket)

			const changeHandler = (event, cb) => {
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
					via: this.getSource(),
					changes: event.changes
				})

				this.emit('status', 'sync ok')

				cb({ status: 'ok' })
			}

			socket.once('disconnect', (reason) => {
				this.emit('error',{ message: 'disconnect', reason: reason })
				this.sockets.splice(this.sockets.indexOf(socket), 1)
				socket.off('change', changeHandler);
			});

			// optionally send initial data to client
			if(this.options.authoritative) {
				socket.emit('init', {
					source: this.getSource(),
					init: this.unproxied
				})
			}
			socket.on('change', changeHandler)
			
			socket.join(this.id)
		}
	}

	getSource () {
		return super.getSource() + ':server'
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
