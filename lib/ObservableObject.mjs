/**
	ObservableObject

	Build an obserbable object

	@author Michael Rhodes (except where noted)
	@license MIT
	Made in Barbados 🇧🇧 Copyright © 2020-2023 Michael Rhodes
**/

import EventEmitter from 'events'
import ObservableSlim from 'observable-slim'

const registeredObservables = {}
const getObservable = (id) => {
	return registeredObservables[id]
}

/*
	@class ObservableObject

	Base class for data binding. Implements deep Proxy and Reflect on an object so that
	changes can be observed and manages subscribing and notifying observers.
*/

class ObservableObject extends EventEmitter {
	/*
		@param { String } id - unique id 
		@param { Object } data - optional externally defined javascript object to observe
		@param { Object } options - optional, used by subclasses
	*/
	constructor (id, data = {}, options = {}) {
		super()

		this.id = id

		if (registeredObservables[this.id]) {
			throw (new Error('ObservableObject ' + id + ' already exists.'))
		}

		this.bound = {} // watchers to sync on value change

		this.data = ObservableSlim.create(data, false, (changes)=>{
			this.sync(changes, this.getSource())
		})

		this.options = options

		registeredObservables[this.id] = this
	}

	getSource () {
		return this.id
	}

	/*
		@function destroy - remove all bindings
	*/
	destroy () {
		ObservableSlim.pause(this.data)

		delete registeredObservables[this.id]
		delete this.data
		Object.keys(this.bound).forEach((prop) => {
			Object.keys(this.bound[prop]).forEach((id) => {
				this.unbind(id, prop)
			})
		})

		ObservableSlim.remove(this.data)
	}

	/*
		@function getObservableData - return proxied data
	*/
	getObservableData () {
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
		if(property === '__proto__') { throw new Error('Invalid property name') }
		if (!this.bound[property]) {
			this.bound[property] = {}
		}
		this.bound[property][id] = fn

		fn(this.id, 'connect')
	}

	/*
		@function unbind - unattach observer
		@param { String } id - unique id of observer function
		@param { String } property - optional name of property being observed
	*/
	unbind (id, property = '*') {
		this.bound[property][id](this.id, 'disconnect')

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
			const type = change.type
			const path = change.currentPath
			const newValue = change.newValue
			const previousValue = change.previousValue

			const channels = []
			for(const p in this.bound) {
				if(p === '*') {
					channels.push(p)
				}
				else {
					const re = new RegExp('^' + p.replace('.','\\.'))
					if(path.match(re)) {
						channels.push(p)
					}
				}
			}

			for(const channel of channels) {
				for(const subscriber in this.bound[channel]) {
					this.bound[channel][subscriber](this.id, type, path, newValue, previousValue)
				}
			}
		}
	}
}

export {
	ObservableObject, getObservable
}
