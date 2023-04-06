import {
	ObservableObject
}
	from './ObservableObject'

import {
	validate
}
	from './checkArgs'

import pointer from 'json-pointer'

class ObservableClient extends ObservableObject {
	constructor (id, data = {}, options = {}) {
		validate('ObservableClient constructor endpoint', options.endpoint, ['isDefined', 'isString'])

		super(id, data, options)

		this.socket = null
		this.connected = false

		this.socket = io(this.options.endpoint)

		this.socket.on('error', (err) => {
			this.emit('error', {
				message: 'socket error',
				error: err
			})
		})

		this.socket.on('connect_error', () => {
			this.emit('error', { message: 'connect_error' })
			this.connected = false
		})

		this.socket.on('disconnect', (reason) => {
			this.emit('error', { message: 'disconnect', reason: reason })
			this.connected = false
		})

		this.socket.on('connect', () => {
			this.socket.emit('authenticate', this.id, this.getSource(), this.authenticateHandler.bind(this))
		})

		// listen for change events from server side
		this.socket.on('change', (event) => {
			console.log('client got change event:',event)
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
		})
	}

	authenticateHandler(result) {
		if (result.status !== 'ok') {
			this.emit('error', {
				message: 'ObservableClient authentication failed',
				error: result
			})
			return
		}

		this.connected = true
	}

	getSource () {
		return super.getSource() + ':' + this.socket.id
	}

	destroy () {
		if (this.socket) {
			this.socket.disconnect(true)
		}

		super.destroy()
	}

	// propagate changes to server
	sync(changes) {
		super.sync(changes)
		if (this.socket && this.connected) {
			this.socket.emit('change', {
				sourceId: this.getSource(),
				changes: changes
			}, (result) => {
				if (result.status !== 'ok') {
					this.emit('error', { message: 'sync error', response: result })
				}
			})
		}
	}
}

export {
	ObservableClient
}