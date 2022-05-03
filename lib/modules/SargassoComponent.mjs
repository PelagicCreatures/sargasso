import { Sargasso, utils } from '@pelagiccreatures/sargasso'
import { html, render } from 'lit-html'

class SargassoComponent extends Sargasso {
	constructor (element, options = {}) {
		options.shadowDOM = options.shadowDOM === undefined ? true : options.shadowDOM
		super(element, options)

		// attributes that affect structure of template - requires template rebuild and render
		this.templateAttributes = []

		// observed attributes - change will trigger render only
		this.renderAttributes = []

		// current attribute values
		this.templateOptions = {}

		this.obervableId = (this._hostElement || this.element).getAttribute('data-observable-id')

		if(this.obervableId) {
			this.observableData = this.observableStart(this.obervableId)
		}

		this.renderOptions = this.observableStart('SargassoComponent-' + this.uid, {})

		this.pendingLinkTagCount = 0
	}

	start () {
		super.start()
		this.getAttributes()
		this.watchAttributes() // watch attributes on host element
		this.setTemplateArgs({
			attributes:this.renderOptions.data,
			data:this.observableData.data
		})
		this.elegant() // set graceful rendering kludge
		this.buildTemplate() // build and install lit-html template
		if(this._template) {
			this.setRenderer(render) // set lit-html render() as the renderer
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

			if(needSync) {
				this.getAttributes()
				if(needRebuild) {
					this.buildTemplate()
					this.render()
				}
			}
		})

		this.attributeObserver.observe(this._hostElement || this.element, {
			attributes: true
		})
	}

	getAttributes () {
		for(const attr of this.templateAttributes) {
			this.templateOptions[attr] = (this._hostElement || this.element).getAttribute(attr) || (this._hostElement || this.element).hasAttribute(attr)
		}

		for(const attr of this.renderAttributes) {
			this.renderOptions.data[attr] = (this._hostElement || this.element).getAttribute(attr) || (this._hostElement || this.element).hasAttribute(attr)
		}
	}

	buildTemplate () {
		const template = (args) => html`
			<style>
				.web-component-body {
					opacity: 0;
					transition: opacity .25s ease-in-out;
				}
				.web-component-body--loaded { opacity: 1; }
			</style>
			<div class="web-component-body">
				<p>using default buildTemplate - override buildTemplate to customize component markup</p>
				<p>args: ${JSON.stringify(args)}
			</div>
		`
		this.setTemplate(template) // set template function
	}

	sleep () {

		if(this.attributeObserver) {
			this.attributeObserver.disconnect();
		}

		if(this.styleObserver) {
			this.styleObserver.disconnect();
		}
		super.sleep()
	}

	reveal () {
		if(this.element.querySelector('.web-component-body')) {
			this.element.querySelector('.web-component-body').classList.add('web-component-body--loaded')
		}
	}

	_render () {
		super._render()
		if(!this.pendingLinkTagCount) {
			this.reveal()
		}
	}

	elegant () {

		// convoluted scheme to cover janky rendering
		// hide element until all the css is ready within the component


		const nodes = ["LINK"];

		const nodeLoaded = (e) => {
			e.target.removeEventListener("load", nodeLoaded);
			if(!--this.pendingLinkTagCount) {
				this.reveal()
				this.styleObserver.disconnect()
			}
		}

		this.styleObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				for (let i = 0; i < mutation.addedNodes.length; i++) {
					const node = mutation.addedNodes[i];
					if (nodes.indexOf(node.nodeName.toUpperCase()) !== -1) {
						node.addEventListener("load", nodeLoaded);
					}
				}
			})
		})

		this.styleObserver.observe(this.element, {
			childList:true
		});
	}
}

utils.registerSargassoClass('SargassoComponent', SargassoComponent)

export {
	SargassoComponent
}
