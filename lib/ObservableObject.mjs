import isEqual from 'lodash/isEqual'

import * as ObservableSlim from 'observable-slim'

/*
	build Proxy to observe changes to object properties
	*/

const registeredObservables = {}
const getObservable = (id) => {
	return registeredObservables[id]
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

		this.data = ObservableSlim.create(data, true, (changes)=>{
			this.sync(changes)
		})

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
			Object.keys(this.bound[prop]).forEach((id) => {
				this.unbind(id, prop)
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
			if(Object.prototype.hasOwnProperty.call(this.data, k)) {
				fn(this.id, k, this.data[k])
			}
		})
	}

	/*
		@function unbind - unattach observer
		@param { String } id - unique id of observer function
		@param { String } property - optional name of property being observed
		*/
	unbind (id, property = '*') {
		if (this.bound[property] && this.bound[property][id]) {
			delete this.bound[property][id]
		}
	}

	/*
		function sync - notify observers of property value change
		@param { String } property - property that changed
		*/
	sync (changes) {
		for(const change of changes) {
			console.log(change)
			const type = change.type
			const property = change.property
			const target = change.target
			const value = change.newValue
			Object.keys(this.bound['*'] || {}).forEach((k) => {
				this.bound['*'][k](this.id, property, value)
			})
			Object.keys(this.bound[property] || {}).forEach((k) => {
				this.bound[property][k](this.id, property, value)
			})
		}
	}
}

export {
	ObservableObject, getObservable
}
