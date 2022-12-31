import { Sargasso, registerSargassoClass }  from './Sargasso'

import { html, render } from 'lit-html'

class SargassoComponent extends Sargasso {
	constructor (element, options = {}) {

		// default to shadow DOM unless otherwise specified by subclass
		options.shadowDOM = options.shadowDOM === undefined ? true : options.shadowDOM

		// global options for subclasses
		options.componentOptions = window.sagassoComponentOptions || {}

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
			this.observableData = this.observableStart(this.obervableId)
		}

		// trigger render on changes to host element attributes
		this.renderOptions = this.observableStart('SargassoComponent-' + this.uid, {})

		// cache host element template and render attribute values
		this.getAttributes()

		// set up mutation observer to watch attribute changes on host element
		this.watchAttributes()

		// data to pass to render
		this.setTemplateArgs({
			options: this.options.componentOptions || {},
			attributes:this.renderOptions.data,
			data: this.observableData ? this.observableData.data : undefined,
		})

		// build and install lit-html template
		this.buildTemplate() 

		// set renderer for template
		if(this._template) {
			this.setRenderer(render) 
		}
	}

	watchAttributes () {
		// all attributes to observe
		this.allAttributes = this.templateAttributes.concat(this.renderAttributes)

		// watch for changes to host element attributes
		this.attributeObserver = new MutationObserver((mutations) => {
			let needSync = false
			let needRebuild = false

			mutations.forEach((mutation) => {
				if (mutation.type === "attributes") {
					if(this.allAttributes.indexOf(mutation.attributeName) !== -1) {
						needSync = true
						if(this.templateAttributes.indexOf(mutation.attributeName) !== -1) {
							needRebuild = true
						}
					}
				}
			})

			// attribute changed?
			if(needSync) {
				this.getAttributes()
				if(needRebuild) {
					this.buildTemplate()
					this.render()
				}
			}
		})

		// start mutation observer
		this.attributeObserver.observe(this._hostElement || this.element, {
			attributes: true
		})
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
			if(his.renderOptions.data[attr] !== val) {
				this.renderOptions.data[attr] = val
			}
		}
	}

	buildTemplate () {
		const template = (args) => html`
			<div class="web-component-body">
				<p>using default buildTemplate - override buildTemplate to customize component markup</p>
				<pre>${this.obervableId}: ${JSON.stringify(args.data,'',2)}</pre>
				<pre>attributes: ${JSON.stringify(args.attributes,'',2)}</pre>
				<pre>options: ${JSON.stringify(args.options,'',2)}</pre>
			</div>
		`
		this.setTemplate(template) // set template function
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

registerSargassoClass('SargassoComponent', SargassoComponent)

export {
	SargassoComponent
}