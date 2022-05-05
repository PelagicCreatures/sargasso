import { utils } from '@pelagiccreatures/sargasso'
import { html } from 'lit-html'
import { MDCTextField } from '@material/textfield';
import { MDCTextFieldIcon } from '@material/textfield/icon'
import { SargassoComponent } from '@pelagiccreatures/sargasso/modules/SargassoComponent'

class TextField extends SargassoComponent {
	constructor (element, options) {
		options.shadowDOM = true
		super(element, options)

		// attributes that affect structure of template - template rebuild and render on change
		this.templateAttributes = ['filled', 'outlined', 'no-label', 'textarea', 'disabled', 'with-internal-counter', 'helper', 'character-counter', 'prefix', 'suffix', 'icon-leading', 'icon-trailing', 'resizer']

		// observed attributes - render only on change
		this.renderAttributes = ['label', 'value', 'helper-text', 'prefix-text', 'suffix-text', 'icon-leading-icon', 'icon-trailing-icon', 'rows', 'cols']

		this.pendingLinkTagCount = 1 // reveal after css files to loaded

		this.toDestroy = []
	}

	start () {
		super.start()
	}

	buildTemplate () {

		let iconLeading = (args) => html``
		let iconTrailing  = (args) => html``
		let prefix = (args) => html``
		let suffix = (args) => html``
		let helper = (args) => html``
		let label = (args) => html``

		const classes = ['mdc-text-field']
		if(this.templateOptions.filled) {
			classes.push('mdc-text-field--filled')
		}
		if(this.templateOptions.outlined) {
			classes.push('mdc-text-field--outlined')
		}
		if(this.templateOptions['no-label']) {
			classes.push('mdc-text-field--no-label')
		}
		if(this.templateOptions['textarea']) {
			classes.push('mdc-text-field--textarea')
		}
		if(this.templateOptions['disabled']) {
			classes.push('mdc-text-field--disabled')
		}

		if(!this.templateOptions['no-label']) {
			label = (args) => html`<span class="mdc-floating-label ?mdc-floating-label--float-above=${args.attributes.value}" id="my-label-id">${args.attributes.label}</span>`
		}

		if(this.templateOptions['icon-leading']) {
			classes.push('mdc-text-field--with-leading-icon')
			iconLeading = (args) => html`<i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading" tabindex="0" role="button">${args.attributes['icon-leading-icon']}</i>`
		}

		if(this.templateOptions['icon-trailing']) {
			classes.push('mdc-text-field--with-trailing-icon')
			iconTrailing = (args) => html`<i class="material-icons mdc-text-field__icon mdc-text-field__icon--trailing" tabindex="0" role="button">${args.attributes['icon-trailing-icon']}</i>`
		}

		if(this.templateOptions['prefix']) {
			prefix = (args) => html`<span class="mdc-text-field__affix mdc-text-field__affix--prefix">${args.attributes['prefix-text']}</span>`
		}

		if(this.templateOptions['suffix']) {
			suffix = (args) => html`<span class="mdc-text-field__affix mdc-text-field__affix--suffix">${args.attributes['suffix-text']}</span>`
		}

		if(this.templateOptions['helper']) {
			helper = (args) => html`<div class="mdc-text-field-helper-line"><div class="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true">${args.attributes['helper-text']}</div></div>`
		}

		const inputClasses = classes.join(' ')


		let markup = (args) => {}

		if(this.templateOptions.filled) {
			if(this.templateOptions.textarea) {
				if(this.templateOptions.resizer) {
					markup = (args) => html`
						<label class="${inputClasses}">
							<span class="mdc-text-field__ripple"></span>
							<span class="mdc-text-field__resizer">
								<textarea class="mdc-text-field__input" rows="8" cols="40" aria-label="Label"></textarea>
							</span>
							<span class="mdc-line-ripple"></span>
						</label>
						${helper(args)}
					`
				}
				else {
					markup = (args) => html`
						<label class="${inputClasses}">
							<span class="mdc-text-field__ripple"></span>
							<textarea class="mdc-text-field__input" rows="8" cols="40" aria-label="Label"></textarea>
							<span class="mdc-line-ripple"></span>
						</label>
						${helper(args)}
					`
				}
			}
			else {
				markup = (args) => html`
					<label class="${inputClasses}">
						<span class="mdc-text-field__ripple"></span>
						${label(args)}
						${iconLeading(args)}
						${prefix(args)}
						<input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
						${suffix(args)}
						${iconTrailing(args)}
						<span class="mdc-line-ripple"></span>
					</label>
					${helper(args)}
				`
			}
		}

		if(this.templateOptions.outlined) {
			if(this.templateOptions.textarea) {
				if(this.templateOptions.resizer) {
					markup = (args) => html`
						<label class="${inputClasses}">
							<span class="mdc-notched-outline">
								<span class="mdc-notched-outline__leading"></span>
								<span class="mdc-notched-outline__trailing"></span>
							</span>
							<span class="mdc-text-field__resizer">
								<textarea class="mdc-text-field__input" rows="8" cols="40" aria-label="Label"></textarea>
							</span>
						</label>
						${helper(args)}
					`
				}
				else {
					markup = (args) => html`
						<label class="${inputClasses}">
							<span class="mdc-notched-outline">
								<span class="mdc-notched-outline__leading"></span>
								<span class="mdc-notched-outline__trailing"></span>
							</span>
							<textarea class="mdc-text-field__input" rows="8" cols="40" aria-label="Label"></textarea>
						</label>
						${helper(args)}
					`
				}
			}
			else {
				markup = (args) => html`
					<label class="${inputClasses}">
						<span class="mdc-notched-outline">
							<span class="mdc-notched-outline__leading"></span>
							<span class="mdc-notched-outline__notch">
								${label(args)}
							</span>
							<span class="mdc-notched-outline__trailing"></span>
						</span>
						${iconLeading(args)}
						${prefix(args)}
						<input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id">
						${suffix(args)}
						${iconTrailing(args)}
					</label>
					${helper(args)}
				`
			}
		}

		const template = (args) => html`
			<style>
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
			<link href="https://unpkg.com/@material/textfield@14.0.0/dist/mdc.textfield.css" rel="stylesheet">

			${markup(args)}
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
		const el = this.element.querySelector('.mdc-text-field')
		if(el && !el.classList.contains('mdc-text-field-upgraded')) {
			if(this.textField) { this.textField.destroy() }
			this.toDestroy.push(new MDCTextField(el))
		}

		const els = this.element.querySelectorAll('.mdc-text-field-icon')
		for(const e of els) {
			if(e && !e.classList.contains('mdc-text-field-icon-upgraded')) {
				if(this.textField) { this.textField.destroy() }
				this.toDestroy.push(new MDCTextFieldIcon(e))
			}
		}
	}
}

utils.registerSargassoClass('TextField', TextField)

export {
	TextField
}
