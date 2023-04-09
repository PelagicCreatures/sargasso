/**
	ObservableClient

	Build an obserbable object that syncs with a server via socket.io

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/

import {
	ObservableObject
}
	from './ObservableObject.mjs'

import {
	validate
}
	from './checkArgs.mjs'

import pointer from 'json-pointer'
import ObservableSlim from 'observable-slim'
import {cloneObj} from './clone-obj.mjs'

class ObservableClient extends ObservableObject {

	constructor (id, data = {}, options = {}) {

		validate('ObservableClient constructor endpoint', options.endpoint, ['isDefined', 'isString'])

		super(id, data, options)

		this.socket = null
		this.connected = false

		this.socket = (options.io || io)(this.options.endpoint)

		this.socket.on('error', (err) => {
			this.emit('error', {
				message: 'socket error',
				error: err
			})
		})

		this.socket.on('connect_error', (err) => {
			this.emit('error', { message: 'connect_error', error: err })
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
			this.emit('sync_from_server')
		})

		if(!this.options.authoritative) {
			this.socket.on('init',(event) => {
				cloneObj(event.init, this.unproxied)
				this.sync(event.changes, event.source)
				this.emit('initialized')
			})
		}
	}

	authenticateHandler(result) {
		if (result.status !== 'ok') {
			this.emit('error', {
				message: 'ObservableClient authentication failed',
				error: result
			})
			return
		}

		// optionally send initial data to server
		if(this.options.authoritative) {
			this.socket.emit('init', {
				source: this.getSource(),
				init: this.unproxied,
				changes: [{type: 'init'}]
			})
		}

		this.connected = true

		this.emit('status','connected')
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

	// notify observers
	sync(changes, source) {
		super.sync(changes)

		// propagate to server only if local change 
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