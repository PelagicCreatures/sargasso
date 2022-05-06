import { utils } from '@pelagiccreatures/sargasso'
import { html } from 'lit-html'
import { MDCRipple } from '@material/ripple'
import { SargassoComponent } from '@pelagiccreatures/sargasso/modules/SargassoComponent'

class Button extends SargassoComponent {
	constructor (element, options) {
		options.shadowDOM = true
		super(element, options)

		// attributes that affect structure of template - template rebuild and render on change
		this.templateAttributes = ['raised', 'unelevated', 'outlined', 'icon-leading', 'icon-trailing', 'icon']

		// observed attributes - render only on change
		this.renderAttributes = ['label','disabled']

		this.pendingLinkTagCount = 1 // reveal after css files to loaded

		this.toDestroy = []
	}

	start () {
		super.start()
	}

	buildTemplate () {

		let iconLeading = html``
		let iconTrailing  = html``
		const classes = ['mdc-button','mdc-button--touch']
		if(this.templateOptions.raised) {
			classes.push('mdc-button--raised')
		}
		if(this.templateOptions.unelevated) {
			classes.push('mdc-button--unelevated')
		}
		if(this.templateOptions.outlined) {
			classes.push('mdc-button--outlined')
		}
		if(this.templateOptions['icon-leading'] && this.templateOptions.icon) {
			classes.push('mdc-button--icon-leading')
			iconLeading = html`<i class="material-icons mdc-button__icon" aria-hidden="true">${this.templateOptions.icon}</i>`
		}
		if(this.templateOptions['icon-trailing'] && this.templateOptions.icon) {
			classes.push('mdc-button--icon-trailing')
			iconTrailing = html`<i class="material-icons mdc-button__icon" aria-hidden="true">${this.templateOptions.icon}</i>`
		}

		const buttonClasses = classes.join(' ')

		const template = (args) => html`
			<style>
				:host {
					display: inline-block
				}
				
				.web-component-body {
					opacity: 0;
					transition: opacity .25s ease-in-out;
				}
				.web-component-body--loaded { opacity: 1; }

				.material-icons {
					font-family: 'Material Icons';
					font-weight: normal;
					font-style: normal;
					font-size: 24px;
					line-height: 1;
					letter-spacing: normal;
					text-transform: none;
					display: inline-block;
					white-space: nowrap;
					word-wrap: normal;
					direction: ltr;
					-webkit-font-feature-settings: 'liga';
					-webkit-font-smoothing: antialiased;
				}

			</style>

			<!--
				loading css inside the shadow DOM but it still uses the cache so it's
				only loaded once even if there are many buttons on the page

				-->
			<link href="https://unpkg.com/@material/button@14.0.0/dist/mdc.button.css" rel="stylesheet">

			<div class="web-component-body">
				<div class="mdc-touch-target-wrapper">
					<button class="${buttonClasses}" ?disabled=${args.attributes.disabled}>
						<span class="mdc-button__ripple"></span>
						<span class="mdc-button__touch"></span>
						${iconLeading}
						<span class="mdc-button__label">${args.attributes.label}</span>
						${iconTrailing}
					</button>
				</div>
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
		super.sleep()
	}

	didRender () {
		super.didRender()
		this.instantiateMDC()
	}

	instantiateMDC () {
		const el = this.element.querySelector('.mdc-button')
		if(el && !el.classList.contains('mdc-ripple-upgraded')) {
			if(this.buttonRipple) { this.buttonRipple.destroy() }
			this.buttonRipple = new MDCRipple(el)
			this.toDestroy.push(this.buttonRipple)
		}
	}
}

utils.registerSargassoClass('Button', Button)

export {
	Button
}
