import { utils } from '@pelagiccreatures/sargasso'
import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined';
import { MDCTextField } from '@material/textfield';
import { MDCTextFieldIcon } from '@material/textfield/icon'
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';
import { SargassoComponent } from '@pelagiccreatures/sargasso/modules/SargassoComponent'

class TextField extends SargassoComponent {
	constructor (element, options) {
		options.shadowDOM = true
		super(element, options)

		// attributes that affect structure of template - template rebuild and render on change
		this.templateAttributes = ['filled', 'outlined', 'no-label', 'textarea', 'helper', 'prefix', 'suffix', 'icon-leading', 'icon-trailing', 'resizer', 'disabled', 'character-counter', 'with-internal-counter']

		// observed attributes - render only on change
		this.renderAttributes = ['type', 'label', 'value', 'helper-text', 'prefix-text', 'suffix-text', 'icon-leading-icon', 'icon-trailing-icon', 'rows', 'cols', 'minlength', 'maxlength', 'disabled', 'required', 'max', 'min', 'step', 'autocomplete', 'list', 'maxlength', 'minlength', 'multiple', 'pattern', 'readonly']

		this.pendingLinkTagCount = 1 // reveal after css files to loaded

		this.toDestroy = []
	}

	start () {
		super.start()

		this._hostElement.value = this.value.bind(this)

		this.on('change keyup focus blur', 'input', (e) => {
			this._hostElement.setAttribute('value',e.target.value)
		})

		this.on('change keyup focus blur', 'textarea', (e) => {
			this._hostElement.setAttribute('value',e.target.value)
		})
	}

	value (v) {
		if(v) {
			this._hostElement.setAttribute('value',v)
		}
		else {
			return this._hostElement.getAttribute('value')
		}
	}

	buildTemplate () {

		const currentValue = this.element.getAttribute('value') || ''

		let iconLeading = (args) => html``
		let iconTrailing  = (args) => html``
		let prefix = (args) => html``
		let suffix = (args) => html``
		let helper = (args) => html``
		let label = (args) => html``
		let counter = (args) => html``
		let counterInternal = (args) => html``
		let helperLine = (args) => html``

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
			label = (args) => html`<span class="mdc-floating-label ${args.attributes.value ? 'mdc-floating-label--float-above' : ''}" id="my-label-id">${args.attributes.label}</span>`
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
			helper = (args) => html`<div class="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true">${args.attributes['helper-text']}</div>`
		}

		if(this.templateOptions['character-counter']) {
			counter = (args) => html`<div class="mdc-text-field-character-counter">${args.attributes['character-counter-text']}</div>`
		}

		if(this.templateOptions['helper'] || this.templateOptions['character-counter']) {
			helperLine = (args) => html`
				<div class="mdc-text-field-helper-line">
					${helper(args)}
					${counter(args)}
				</div>
			`
		}

		if(this.templateOptions['with-internal-counter']) {
			classes.push('mdc-text-field--with-internal-counter')
			counterInternal = (args) => html`<div class="mdc-text-field-helper-line"><div class="mdc-text-field-character-counter">${args.attributes['character-counter-text']}</div></div>`
		}

		const inputClasses = classes.join(' ')

		let markup = (args) =>  html``

		if(this.templateOptions.filled) {
			if(this.templateOptions.textarea) {
				if(this.templateOptions.resizer) {
					markup = (args) => html`
						<label class="${inputClasses}">
							<span class="mdc-text-field__ripple"></span>
							${label(args)}
							<span class="mdc-text-field__resizer">
								<textarea class="mdc-text-field__input" rows="${args.attributes.rows}" cols="${args.attributes.cols}" aria-label="Label" ?disabled=${args.attributes.disabled} maxlength=${args.attributes.maxlength}>${args.attributes.value || ''}</textarea>
								${counterInternal(args)}
							</span>
							<span class="mdc-line-ripple"></span>
						</label>
						${helperLine(args)}
					`
				}
				else {
					markup = (args) => html`
						<label class="${inputClasses}">
							<span class="mdc-text-field__ripple"></span>
							${label(args)}
							<textarea class="mdc-text-field__input" rows="${args.attributes.rows}" cols="${args.attributes.cols}" aria-label="Label" ?disabled=${args.attributes.disabled} maxlength=${args.attributes.maxlength}>${args.attributes.value || ''}</textarea>
							${counterInternal(args)}
							<span class="mdc-line-ripple"></span>
						</label>
						${helperLine(args)}
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
						<input
							type=${args.attributes.type || 'text'}
							value=${ifDefined(args.attributes.value)}
							class="mdc-text-field__input"
							aria-labelledby="my-label-id"
							maxlength=${ifDefined(args.attributes.maxlength)}
							minlength=${ifDefined(args.attributes.minlength)}
							max=${ifDefined(args.attributes.max)}
							min=${ifDefined(args.attributes.min)}
							step=${ifDefined(args.attributes.step)}
							pattern=${ifDefined(args.attributes.pattern)}
							?disabled=${args.attributes.disabled}
							?required=${args.attributes.required}
							?autocomplete=${args.attributes.autocomplete}
							?list=${args.attributes.list}
							?multiple=${args.attributes.multiple}
							?readonly=${args.attributes.readonly}
						>
						${suffix(args)}
						${iconTrailing(args)}
						<span class="mdc-line-ripple"></span>
					</label>
					${helperLine(args)}
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
								<span class="mdc-notched-outline__notch">
									${label(args)}
								</span>
								<span class="mdc-notched-outline__trailing"></span>
							</span>
							<span class="mdc-text-field__resizer">
								<textarea class="mdc-text-field__input" rows="${args.attributes.rows}" cols="${args.attributes.cols}" aria-label="Label" ?disabled=${args.attributes.disabled} maxlength=${args.attributes.maxlength}>${args.attributes.value || ''}</textarea>
								${counterInternal(args)}
							</span>
						</label>
						${helperLine(args)}
					`
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
							<textarea class="mdc-text-field__input" rows="${args.attributes.rows}" cols="${args.attributes.cols}" aria-label="Label" ?disabled=${args.attributes.disabled} maxlength=${args.attributes.maxlength}>${args.attributes.value || ''}</textarea>
						</label>
						${helperLine(args)}
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
						<input
							type=${args.attributes.type || 'text'}
							value=${ifDefined(args.attributes.value)}
							class="mdc-text-field__input"
							aria-labelledby="my-label-id"
							maxlength=${ifDefined(args.attributes.maxlength)}
							minlength=${ifDefined(args.attributes.minlength)}
							max=${ifDefined(args.attributes.max)}
							min=${ifDefined(args.attributes.min)}
							step=${ifDefined(args.attributes.step)}
							pattern=${ifDefined(args.attributes.pattern)}
							?disabled=${args.attributes.disabled}
							?required=${args.attributes.required}
							?autocomplete=${args.attributes.autocomplete}
							?list=${args.attributes.list}
							?multiple=${args.attributes.multiple}
							?readonly=${args.attributes.readonly}
						>
						${suffix(args)}
						${iconTrailing(args)}
					</label>
					${helperLine(args)}
				`
			}
		}

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
			<link href="${args.componentOptions.Material.TextField.css}" rel="stylesheet">

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

	reveal() {
		super.reveal()
		this.instantiateMDC()
	}

	instantiateMDC () {
		// mdc does some things that require the element to be visible (measuring label notch in outline)
		if(!this.pendingLinkTagCount) {
			let el = this.element.querySelector('.mdc-text-field')
			if(el && !el.classList.contains('mdc-text-field-upgraded')) {
				this.toDestroy.push(new MDCTextField(el))
			}

			el = this.element.querySelector('.mdc-text-field-character-counter')
			if(el && !el.classList.contains('mdc-text-field-character-counter-upgraded')) {
				this.toDestroy.push(new MDCTextFieldCharacterCounter(el))
			}

			const els = this.element.querySelectorAll('.mdc-text-field-icon')
			for(const e of els) {
				if(e && !e.classList.contains('mdc-text-field-icon-upgraded')) {
					this.toDestroy.push(new MDCTextFieldIcon(e))
				}
			}
		}
	}
}

utils.registerSargassoClass('TextField', TextField)

export {
	TextField
}
