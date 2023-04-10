/**
	ObservableServer

	Build an obserbable object that syncs with connected clients via socket.io

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/

import { ObservableObject } from './ObservableObject.mjs'
import pointer from 'json-pointer'
import {cloneObj} from './clone-obj.mjs'


class ObservableServer extends ObservableObject {
	constructor (id, obj = {}, options) {
		super(id, obj, options)
		this.sockets = []
	}

	// listen for remote 'change' events
	connect (socket, io) {
		this.io = io

		if(this.sockets.indexOf(socket)> -1) {
			this.emit('status', 'ObservableServer connect - already connected?')
		}
		else {
			this.emit('status', 'ObservableServer connecting.')

			this.sockets.push(socket)

			const changeHandler = (event, ack) => {
				for(const change of event.changes) {
					const type = change.type
					const path = change.currentPath
					const newValue = change.newValue
					const previousValue = change.previousValue

					const ptr = '/' + path.replace(/\./g,'/')

					// update the unproxied data so it does not trigger event to watchers
					if(type === 'update' || type === 'add') {
						if(!pointer.has(this.unproxied, ptr) || (pointer.get(this.unproxied, ptr) !== newValue)) {
							pointer.set(this.unproxied, ptr, newValue)
						}
					}
					if(type === 'delete') {
						if(pointer.has(this.unproxied, ptr)) {
							pointer.remove(this.unproxied, ptr)
						}
					}
				}

				// notify clients except source socket
				socket.to(this.id).emit('change', {
					source: event.sourceId,
					via: this.getSource(),
					changes: event.changes
				})

				// notify local observers
				this.sync(event.changes, event.source)

				this.emit('status', 'sync ok')

				ack({ status: 'ok' })
			}

			socket.once('disconnect', (reason) => {
				this.emit('status',{ message: 'disconnect', reason: reason })
				this.sockets.splice(this.sockets.indexOf(socket), 1)
				socket.off('change', changeHandler);
			});

			// optionally send initial data to client
			if(this.options.authoritative) {
				socket.emit('init', {
					source: this.getSource(),
					init: this.unproxied,
					changes: [{type: 'init'}]
				})
			}
			else {
				socket.on('init',(event) => {
					cloneObj(event.init, this.unproxied)
					this.sync(event.changes, event.source)
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

	// notify observers
	sync(changes, source) {
		super.sync(changes)

		// propagate to clients only if change is local
		if (source === this.getSource() && this.io) {
			this.io.to(this.id).emit('change', {
				sourceId: this.getSource(),
				changes: changes
			})
		}
	}
}

export {
	ObservableServer 
}
