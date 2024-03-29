import { Sargasso, utils }  from '@pelagiccreatures/sargasso'

import { html, render } from 'lit-html'

class SargassoComponent extends Sargasso {
	constructor (element, options = {}) {

		// default to shadow DOM unless otherwise specified by subclass
		options.shadowDOM = options.shadowDOM === undefined ? true : options.shadowDOM

		// global options for subclasses
		options.componentOptions = window.sagassoComponentOptions || {}

		options.watchAttributes = true

		super(element, options)

		// attributes that trigger template rebuild and render
		this.templateAttributes = []

		// attributes that trigger render only
		this.renderAttributes = []

		// current attribute values
		this.templateOptions = {}

		// id of observable
		this.obervableId = (this._hostElement || this.element).getAttribute('data-observable-id')

		// destroyable instantiated objects
		this.toDestroy = []
	}

	start () {
		super.start()

		// if defined start watching observable data to trigger render on changes
		if(this.obervableId) {
			this.observable = this.observableStart(this.obervableId)
			this.observableData = this.getObservableData(this.obervableId)
		}

		// trigger render on changes to host element attributes
		this.renderOptions = this.observableStart('SargassoComponent-' + this.uid, {})

		// cache host element template and render attribute values
		this.getAttributes()

		// args to pass to template function template(data, attributes, options) function
		// arg0 is the observable data
		// arg1 is the current values of the render attributes
		// arg2 is the component options
		this.setTemplateArgs([
			this.observableData ? this.observableData : undefined,
			this.renderOptions.data,
			this.options.componentOptions || {}
		])

		// build and install lit-html template
		this.setTemplate(this.buildTemplate() ) // set template function

		// set renderer for template
		if(this._template) {
			this.setRenderer(render) 
		}
	}

	attributeChanged (attr) {
		// all attributes to observe
		this.allAttributes = this.templateAttributes.concat(this.renderAttributes)

		let needSync = false
		let needRebuild = false
		if(this.allAttributes.indexOf(attr) !== -1) {
			needSync = true
			if(this.templateAttributes.indexOf(attr) !== -1) {
				needRebuild = true
			}
		}
			
		if(needSync) {
			this.getAttributes()
			if(needRebuild) {
				this.setTemplate(this.buildTemplate()) // set template function
				this.render()
			}
		}
	}

	getAttributes () {
		// update attribute values. changes will trigger render or template rebuild as needed
		for(const attr of this.templateAttributes) {
			const val = (this._hostElement || this.element).getAttribute(attr) || (this._hostElement || this.element).hasAttribute(attr) || undefined
			if(this.templateOptions[attr] !== val) {
				this.templateOptions[attr] = val
			}
		}

		for(const attr of this.renderAttributes) {
			const val = (this._hostElement || this.element).getAttribute(attr) || (this._hostElement || this.element).hasAttribute(attr) || undefined
			if(this.renderOptions.data[attr] !== val) {
				this.renderOptions.data[attr] = val
			}
		}
	}

	buildTemplate () {
		const template = (data, attributes, options) => html`
			<div class="web-component-body">
				<p>using default buildTemplate - override buildTemplate to customize component markup</p>
				<pre>${this.obervableId}: ${JSON.stringify(data,'',2)}</pre>
				<pre>attributes: ${JSON.stringify(attributes,'',2)}</pre>
				<pre>options: ${JSON.stringify(options,'',2)}</pre>
			</div>
		`
		return template
	}

	sleep () {
		if(this.toDestroy) {
			for(const destroyable of this.toDestroy) {
				destroyable.destroy()
			}
		}

		if(this.attributeObserver) {
			this.attributeObserver.disconnect();
		}

		super.sleep()
	}

	_render () {
		super._render()
		this.didRender()
	}

	didRender () {
	}

}

utils.registerSargassoClass('SargassoComponent', SargassoComponent)

export {
	SargassoComponent
}
