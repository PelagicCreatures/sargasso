import {
	ObservableObject
}
	from './ObservableObject'

import {
	validate
}
	from './checkArgs'

import pointer from 'json-pointer'
import ObservableSlim from 'observable-slim'

var cloneObj = (source,dest) => {
	Object.keys(source).forEach((key) => {
		if(Array.isArray(source[key])){
			dest[key] = []
			cloneObj(source[key],dest[key])
		}
		else {
			if(typeof source[key] === 'object') {
				dest[key] = {}
				cloneObj(source[key],dest[key])
			}
			else {
				dest[key] = source[key]
			}
		}
	})
}

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
			if (this.socket.recovered) {
				this.emit('status','reconnected')
			}
			else {
				this.socket.emit('authenticate', this.id, this.getSource(), this.authenticateHandler.bind(this))
				// ** TODO **: optionally send initial data to client
			}
		})

		// listen for change events from server side
		this.socket.on('change', (event) => {
			console.log('client got change event from %s via %s', event.source, event.via)
			
			for(const change of event.changes) {
				const type = change.type
				const path = change.currentPath
				const newValue = change.newValue
				const previousValue = change.previousValue

				const ptr = '/' + path.replace(/\./g,'/')

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

			this.sync(event.changes, event.source)
		})

		this.socket.on('init',(event) => {
			cloneObj(event.init, this.unproxied)
			this.sync([],event.source)
		})

		this.socket.onAny((eventName, ...args) => {
		  console.log('socket event', eventName, args)
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
		return super.getSource() + ':client:' + this.socket.id
	}

	destroy () {
		if (this.socket) {
			this.socket.disconnect(true)
		}

		super.destroy()
	}

	// propagate changes to server
	sync(changes, source) {
		super.sync(changes)

		// propagate this is source of change 
		if (source === this.getSource() && this.socket && this.connected) {
			this.socket.emit('change', {
				sourceId: this.getSource(),
				changes: changes
			}, (result) => {
				if (result.status !== 'ok') {
					this.emit('error', { message: 'sync error', response: result })
				}
				else {
					this.emit('status','sync ok')
				}
			})
		}
	}
}

export {
	ObservableClient
}