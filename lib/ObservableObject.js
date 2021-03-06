import isEqual from 'lodash/isEqual'

/*
	build Proxy to observe changes to object properties
	*/

const registeredObservables = {}
const getObservable = (id) => {
	return registeredObservables[id]
}

const objectConstructor = ({}).constructor

const buildProxy = (self) => {
	return {
		get (target, property) {
			const val = Reflect.get(target, property)
			if (val && typeof val === 'object') return new Proxy(val, buildProxy(self))
			return val
		},
		set (target, property, value) {
			self.sync(property)
			return Reflect.set(target, property, value)
		},
		deleteProperty (target, property) {
			self.sync(property)
			return Reflect.deleteProperty(target, property)
		}
	}
}

/*
	@class ObservableObject

	Base class for data binding. Implements Proxy and Reflect on an object so that
	changes can be observed and manages subscribing and notifying observers.

	*/
class ObservableObject {
	/*
		@param { String } id - unique id of
		@param { Object } data - optional externally defined javascript object to observe
		@param { Object } options - optional, used by subclasses
		*/
	constructor (id, data = {}, options = {}) {
		this.id = id

		if (registeredObservables[this.id]) {
			throw (new Error('ObservableObject ' + id + ' already exists.'))
		}

		this.bound = {} // watchers to sync on value change

		this.data = new Proxy(data, buildProxy(this))

		this.options = options

		registeredObservables[this.id] = this
	}

	/*
		@function destroy - remove all bindings
		*/
	destroy () {
		delete registeredObservables[this.id]
		delete this.data
		Object.keys(this.bound).forEach((prop) => {
			Object.keys(this.bound[prop]).forEach((k) => {
				this.unbind(prop, k)
			})
		})
	}

	/*
		@function getBoundData - return object being observed
		*/
	getBoundData () {
		return this.data
	}

	/*
		@function set - set observed object property
		@param { String } property - observed object property to set
		@param value - string, array, object or whatever to assign to property
		*/
	set (property, value) {
		if (!isEqual(this.get(property), value)) {
			this.data[property] = value
		}
	}

	/*
		@function get - get observed object property
		@param { String } property - observed object property to get
		*/
	get (property) {
		return this.data[property]
	}

	/*
		@function delete - delete observed object property
		@param { String } property - observed object property to delete
		*/
	delete (property) {
		delete this.data[property]
	}

	/*
		@function syncAll - sync all observed object properties
		*/
	syncAll () {
		Object.keys(this.data || {}).forEach((k) => {
			this.sync(k)
		})
	}

	/*
		@function bind - attach a function to observe property changes
		@param { String } id - unique id of observer function
		@param { Function } fn - handler called when property changes
		@param { String } property - optional name of property to observe

		Handler function prototype:

		If property is not supplied, callback receives property and value
		(property, value) => {}

		Otherwise just the value is supplied
		(value) => {}
		*/
	bind (id, fn, property = '*') {
		if (!this.bound[property]) {
			this.bound[property] = {}
		}
		this.bound[property][id] = fn
		Object.keys(this.data).forEach((k) => {
			fn(this.id, k, this.get(k))
		})
	}

	/*
		@function unbind - unattach observer
		@param { String } id - unique id of observer function
		@param { String } property - optional name of property being observed
		*/
	unbind (id, property = '*') {
		if (this.bound[property][id]) {
			delete this.bound[property][id]
		}
	}

	/*
		@function observers - return current observer count
		*/
	observers () {
		let c = 0
		for (const id in this.bound) {
			if (this.bound.hasOwnProperty(id)) {
				c++
			}
		}
		return c
	}

	/*
		function sync - notify observers of property value change
		@param { String } property - property that changed
		*/
	sync (property) {
		Object.keys(this.bound['*'] || {}).forEach((k) => {
			this.bound['*'][k](this.id, property, this.get(property))
		})
		Object.keys(this.bound[property] || {}).forEach((k) => {
			this.bound[property][k](this.id, property, this.get(property))
		})
	}
}

export {
	ObservableObject, getObservable
}
