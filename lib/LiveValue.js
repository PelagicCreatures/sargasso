import {
	elementTools
}
	from './utils.js'

let unique = 0

class LiveValue {
	constructor (watch) {
		this.uid = ++unique
		this._value = undefined
		this.subscribers = {}
		if (watch) {
			this.watch = watch
			if (this.watch.value !== this._value) {
				this.value = this.watch.value
			}
			elementTools.on(this.constructor.name + '-' + this.uid, this.watch, 'keyup change click', '', (e) => {
				if (this.watch.value !== this._value) {
					this.value = this.watch.value
				}
			}, true)
		}
	}

	destroy () {
		if (this.watch) {
			elementTools.off(this.constructor.name + '-' + this.uid, this.watch, 'keyup change click')
		}
	}

	set value (val) {
		this._value = val
		this.notify()
		if (this.watch) {
			this.watch.value = this._value.toString()
		}
	}

	get value () {
		return this._value
	}

	subscribe (id, fn) {
		this.subscribers[id] = fn
		fn(this._value)
	}

	unSubscribe (id) {
		if (this.subscribers[id]) {
			delete this.subscribers[id]
		}
	}

	notify () {
		Object.keys(this.subscribers).forEach((k) => {
			this.subscribers[k](this._value)
		})
	}
}

export {
	LiveValue
}
