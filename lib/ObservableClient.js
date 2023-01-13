import {
	ObservableObject
}
	from './ObservableObject'

class ObservableClient extends  ObservableObject {
	constructor (id, data = {}, options = {}) {
		super(id, obj, options)

		this.socket = null
		this.connected = false

		let url = this.options.url || ''
		if (this.options.namespace) {
			url += this.options.namespace
		}

		this.socket = io(url)

		const authenticateHandler = (result) => {
			if (result.status !== 'ok') {
				this.emit('error', {
					message: 'copepod authentication failed',
					error: result
				})
				return
			}

			this.emit('status', 'authenticated')

			const changeHandler = (event) => {
				this.data[event.property] =  event.value
			}

			// listen for change events from server side
			this.socket.on('change', changeHandler)

			// subscribe to change for copepod id
			// socket.io 'room' corresponds to id of Copepod object
			const options = {
				id: this.id
			}

			// subscribed listen for changes and monitor connection
			const subscribeHandler = (result) => {
				if (result.status !== 'ok') {
					this.emit('error', {
						message: 'copepod authentication failed',
						error: result
					})
				}

				this.emit('status', 'subscribed')

				this.connected = true
			}

			this.socket.emit('subscribe', options, subscribeHandler)
		}


		this.socket.on('error', (err) => {
			this.emit('error', {
				message: 'socket error',
				error: err
			})
		})

		this.socket.on('reconnect', (attemptNumber) => {
			this.emit('status', 'reconnect attempt: ' + attemptNumber)
			this.socket.emit('authenticate', authenticateHandler)
		})

		this.socket.on('disconnect', (reason) => {
			this.emit('status', 'disconnect: ' + reason)
			this.connected = false
		})

		this.socket.emit('authenticate', authenticateHandler)
	}

	destroy () {
		if (this.socket) {
			this.socket.disconnect(true)
		}

		super.destroy()
	}

	// propagate changes to server
	sync (changes) {
		super.sync(changes)

		if (this.socket && this.connected) {
			this.socket.emit('change', {
				source: this.socket.id,
				changes: changes
			})
		}
	}
}

export {
	ObservableObject
}