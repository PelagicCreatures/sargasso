import { utils } from '@pelagiccreatures/sargasso'
import { SargassoComponent } from '@pelagiccreatures/sargasso/Component'
import { html } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined';
import { MDCTextField,MDCTextFieldIcon,MDCTextFieldCharacterCounter } from '@material/textfield';

class TextField extends SargassoComponent {
	constructor (element, options) {
		options.shadowDOM = true
		super(element, options)

		// observed attributes that affect structure of template - template rebuild and render on change
		this.templateAttributes = [
			'filled',
			'outlined',
			'no-label',
			'textarea',
			'helper',
			'prefix',
			'suffix',
			'icon-leading',
			'icon-trailing',
			'resizer',
			'disabled',
			'character-counter',
			'with-internal-counter'
		]

		// observed attributes - render only on change
		this.renderAttributes = [
			'type',
			'label',
			'value',
			'helper-text',
			'prefix-text',
			'suffix-text',
			'icon-leading-icon',
			'icon-trailing-icon',
			'rows',
			'cols',
			'minlength',
			'maxlength',
			'disabled',
			'required',
			'max',
			'min',
			'step',
			'autocomplete',
			'list',
			'maxlength',
			'minlength',
			'multiple',
			'pattern',
			'readonly',
			'current-password',
			'new-password',
			'inputmode',
			'autocorrect'
		]

		this.MDCTextField  = undefined
	}

	start () {
		super.start()

		Object.defineProperty(this._hostElement, "value", {
		    get :  function()  {
		        return this.getAttribute('value');
		    },
		    set: function(v)  {
		    	this.setAttribute('value', v)
		    }
		});

		this.on('change keyup blur focus input', 'input', (e) => {
			this._hostElement.setAttribute('value',e.target.value)
			if(e.type === 'change') {
				this._hostElement.dispatchEvent(new Event(e.type,{composed:true}))
			}
		})

		this.on('change keyup blur focus input', 'textarea', (e) => {
			this._hostElement.setAttribute('value',e.target.value)
			if(e.type === 'change') {
				this._hostElement.dispatchEvent(new Event(e.type,{composed:true}))
			}
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

		let iconLeading = (args, attributes, options) => html``
		let iconTrailing  = (args, attributes, options) => html``
		let prefix = (args, attributes, options) => html``
		let suffix = (args, attributes, options) => html``
		let helper = (args, attributes, options) => html``
		let label = (args, attributes, options) => html``
		let counter = (args, attributes, options) => html``
		let counterInternal = (args, attributes, options) => html``
		let helperLine = (args, attributes, options) => html``

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
			label = (args, attributes, options) => html`<span class="mdc-floating-label ${attributes.value ? 'mdc-floating-label--float-above' : ''}" id="my-label-id">${attributes.label}</span>`
		}

		if(this.templateOptions['icon-leading']) {
			classes.push('mdc-text-field--with-leading-icon')
			iconLeading = (args, attributes, options) => html`<i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading" tabindex="0" role="button">${attributes['icon-leading-icon']}</i>`
		}

		if(this.templateOptions['icon-trailing']) {
			classes.push('mdc-text-field--with-trailing-icon')
			iconTrailing = (args, attributes, options) => html`<i class="material-icons mdc-text-field__icon mdc-text-field__icon--trailing" tabindex="0" role="button">${attributes['icon-trailing-icon']}</i>`
		}

		if(this.templateOptions['prefix']) {
			prefix = (args, attributes, options) => html`<span class="mdc-text-field__affix mdc-text-field__affix--prefix">${attributes['prefix-text']}</span>`
		}

		if(this.templateOptions['suffix']) {
			suffix = (args, attributes, options) => html`<span class="mdc-text-field__affix mdc-text-field__affix--suffix">${attributes['suffix-text']}</span>`
		}

		if(this.templateOptions['helper']) {
			helper = (args, attributes, options) => html`<div class="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true">${attributes['helper-text']}</div>`
		}

		if(this.templateOptions['character-counter']) {
			counter = (args, attributes, options) => html`<div class="mdc-text-field-character-counter">${attributes['character-counter-text']}</div>`
		}

		if(this.templateOptions['helper'] || this.templateOptions['character-counter']) {
			helperLine = (args, attributes, options) => html`
				<div class="mdc-text-field-helper-line">
					${helper(args, attributes, options)}
					${counter(args, attributes, options)}
				</div>
			`
		}

		if(this.templateOptions['with-internal-counter']) {
			classes.push('mdc-text-field--with-internal-counter')
			counterInternal = (args, attributes, options) => html`<div class="mdc-text-field-helper-line"><div class="mdc-text-field-character-counter">${attributes['character-counter-text']}</div></div>`
		}

		const inputClasses = classes.join(' ')

		let markup = (args, attributes, options) =>  html``

		if(this.templateOptions.filled) {
			if(this.templateOptions.textarea) {
				if(this.templateOptions.resizer) {
					markup = (args, attributes, options) => html`
						<label class="${inputClasses}">
							<span class="mdc-text-field__ripple"></span>
							${label(args, attributes, options)}
							<span class="mdc-text-field__resizer">
								<textarea class="mdc-text-field__input" rows="${attributes.rows}" cols="${attributes.cols}" aria-label="Label" ?disabled=${attributes.disabled} maxlength=${attributes.maxlength}>${attributes.value || ''}</textarea>
								${counterInternal(args, attributes, options)}
							</span>
							<span class="mdc-line-ripple"></span>
						</label>
						${helperLine(args, attributes, options)}
					`
				}
				else {
					markup = (args, attributes, options) => html`
						<label class="${inputClasses}">
							<span class="mdc-text-field__ripple"></span>
							${label(args, attributes, options)}
							<textarea class="mdc-text-field__input" rows="${attributes.rows}" cols="${attributes.cols}" aria-label="Label" ?disabled=${attributes.disabled} maxlength=${attributes.maxlength}>${attributes.value || ''}</textarea>
							${counterInternal(args, attributes, options)}
							<span class="mdc-line-ripple"></span>
						</label>
						${helperLine(args, attributes, options)}
					`
				}
			}
			else {
				markup = (args, attributes, options) => html`
					<label class="${inputClasses}">
						<span class="mdc-text-field__ripple"></span>
						${label(args, attributes, options)}
						${iconLeading(args, attributes, options)}
						${prefix(args, attributes, options)}
						<input
							type=${attributes.type || 'text'}
							value=${ifDefined(attributes.value)}
							class="mdc-text-field__input"
							aria-labelledby="my-label-id"
							maxlength=${ifDefined(attributes.maxlength)}
							minlength=${ifDefined(attributes.minlength)}
							max=${ifDefined(attributes.max)}
							min=${ifDefined(attributes.min)}
							step=${ifDefined(attributes.step)}
							pattern=${ifDefined(attributes.pattern)}
							inputmode=${ifDefined(attributes.inputmode)}
							autocorrect=${ifDefined(attributes.autocorrect)}
							?disabled=${attributes.disabled}
							?required=${attributes.required}
							?autocomplete=${attributes.autocomplete}
							?list=${attributes.list}
							?multiple=${attributes.multiple}
							?readonly=${attributes.readonly}
							?current-password=${attributes['current-password']}
							?new-password=${attributes['new-password']}
						>
						${suffix(args, attributes, options)}
						${iconTrailing(args, attributes, options)}
						<span class="mdc-line-ripple"></span>
					</label>
					${helperLine(args, attributes, options)}
				`
			}
		}

		if(this.templateOptions.outlined) {
			if(this.templateOptions.textarea) {
				if(this.templateOptions.resizer) {
					markup = (args, attributes, options) => html`
						<label class="${inputClasses}">
							<span class="mdc-notched-outline">
								<span class="mdc-notched-outline__leading"></span>
								<span class="mdc-notched-outline__notch">
									${label(args, attributes, options)}
								</span>
								<span class="mdc-notched-outline__trailing"></span>
							</span>
							<span class="mdc-text-field__resizer">
								<textarea class="mdc-text-field__input" rows="${attributes.rows}" cols="${attributes.cols}" aria-label="Label" ?disabled=${attributes.disabled} maxlength=${attributes.maxlength}>${attributes.value || ''}</textarea>
								${counterInternal(args, attributes, options)}
							</span>
						</label>
						${helperLine(args, attributes, options)}
					`
				}
				else {
					markup = (args, attributes, options) => html`
						<label class="${inputClasses}">
							<span class="mdc-notched-outline">
								<span class="mdc-notched-outline__leading"></span>
								<span class="mdc-notched-outline__notch">
									${label(args, attributes, options)}
								</span>
								<span class="mdc-notched-outline__trailing"></span>
							</span>
							<textarea class="mdc-text-field__input" rows="${attributes.rows}" cols="${attributes.cols}" aria-label="Label" ?disabled=${attributes.disabled} maxlength=${attributes.maxlength}>${attributes.value || ''}</textarea>
						</label>
						${helperLine(args, attributes, options)}
					`
				}
			}
			else {
				markup = (args, attributes, options) => html`
					<label class="${inputClasses}">
						<span class="mdc-notched-outline">
							<span class="mdc-notched-outline__leading"></span>
							<span class="mdc-notched-outline__notch">
								${label(args, attributes, options)}
							</span>
							<span class="mdc-notched-outline__trailing"></span>
						</span>
						${iconLeading(args, attributes, options)}
						${prefix(args, attributes, options)}
						<input
							type=${attributes.type || 'text'}
							value=${ifDefined(attributes.value)}
							class="mdc-text-field__input"
							aria-labelledby="my-label-id"
							maxlength=${ifDefined(attributes.maxlength)}
							minlength=${ifDefined(attributes.minlength)}
							max=${ifDefined(attributes.max)}
							min=${ifDefined(attributes.min)}
							step=${ifDefined(attributes.step)}
							pattern=${ifDefined(attributes.pattern)}
							inputmode=${ifDefined(attributes.inputmode)}
							autocorrect=${ifDefined(attributes.autocorrect)}
							?disabled=${attributes.disabled}
							?required=${attributes.required}
							?autocomplete=${attributes.autocomplete}
							?list=${attributes.list}
							?multiple=${attributes.multiple}
							?readonly=${attributes.readonly}
							?current-password=${attributes['current-password']}
							?new-password=${attributes['new-password']}
						>
						${suffix(args, attributes, options)}
						${iconTrailing(args, attributes, options)}
					</label>
					${helperLine(args, attributes, options)}
				`
			}
		}

		const template = (args, attributes, options) => html`
			<style>
				:host {
					display: inline-block
				}

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

				/**
				 * @license
				 * Copyright Google LLC All Rights Reserved.
				 *
				 * Use of this source code is governed by an MIT-style license that can be
				 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
				 */
				.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{-webkit-transform:translateY(-106%) scale(0.75);transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-standard 250ms 1;animation:mdc-floating-label-shake-float-above-standard 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-standard{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-standard{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{-webkit-transform:scaleX(0);transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1),-webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-text-field__input::-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{-webkit-transform:translateY(-106%) scale(0.75);transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{-webkit-transform:translateY(-37.25px) scale(1);transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{-webkit-transform:translateY(-34.75px) scale(0.75);transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){-webkit-transform:none;transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{-webkit-transform:translateY(-10.25px) scale(0.75);transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1;animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{-webkit-transform:translateY(-27.25px) scale(1);transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{-webkit-transform:translateY(-24.75px) scale(0.75);transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1;animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{-webkit-transform:translateY(-1px);transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{-webkit-transform:translateY(1px);transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{-webkit-transform:translateX(-1px) translateY(-1px);transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{-webkit-transform:translateX(1px) translateY(-1px);transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{-webkit-transform:translateX(1px) translateY(1px);transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{-webkit-transform:translateX(-1px) translateY(1px);transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{-webkit-transform:translateY(-37.25px) translateX(-32px) scale(1);transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{-webkit-transform:translateY(-37.25px) translateX(32px) scale(1);transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{-webkit-transform:translateY(-34.75px) translateX(-32px) scale(0.75);transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{-webkit-transform:translateY(-34.75px) translateX(32px) scale(0.75);transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{-webkit-transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{-webkit-transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{-webkit-transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{-webkit-transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::-webkit-input-placeholder{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__input::-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::-webkit-input-placeholder{color:GrayText}.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}.mdc-text-field--disabled .mdc-text-field__input::-ms-input-placeholder{color:GrayText}.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}
			</style>

			${markup(args, attributes, options)}
		`
		return template // set template function
	}

	sleep () {

		if(this.MDCTextField) {
			this.MDCTextField .destroy()
			this.MDCTextField =undefined
		}
		super.sleep()
	}

	didRender () {
		super.didRender()
		this.instantiateMDC()
	}

	instantiateMDC () {
		// beware: mdc does some things that require the element to be visible (measuring label notch in outline)
		let el = this.element.querySelector('.mdc-text-field')
		if(el && !el.classList.contains('mdc-instantiated')) {
			if(this.MDCTextField) { this.MDCTextField.destroy() }
			this.MDCTextField = new MDCTextField(el)
			this.addClass('mdc-instantiated')
		}
	}
}

utils.registerSargassoClass('TextField', TextField)

export {
	TextField
}
