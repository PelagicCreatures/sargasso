/*
	LazyBackground

	Sargasso class that impelments lazy loaded images using background-image which always
	fits image within its container's dimensions

	The image is not loaded until visible in viewport

	<div class="my-container">
		div class="my-responsive-image" data-sargasso-class="LazyBackground" data-src="/path-to-image.jpg"></div>
	</div>

	.my-container { width: 30vw; height: 30vh; }
	.my-responsive-image {
		width:100%; height:100%;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center center;
	}

	To make image crop to fill the frame use:
		background-size: cover;

*/

import {
	Sargasso, registerSargassoClass
}
	from './Sargasso'

class LazyBackground extends Sargasso {
	constructor (element, options = {}) {
		super(element, {
			watchViewport: true
		})
		this.triggered = false
	}

	enterViewport () {
		if (!this.triggered) {
			this.triggered = true
			const img = document.createElement('img')
			this.loader = () => {
				const frame = () => {
					this.element.style.backgroundImage = 'url(' + this.element.getAttribute('data-src') + ')'
					this.sleep() // We're done. That was easy.
				}
				this.queueFrame(frame)
			}
			img.addEventListener('load', this.loader)
			img.setAttribute('src', this.element.getAttribute('data-src'))
		}
	}
}

registerSargassoClass('LazyBackground', LazyBackground)

export {
	LazyBackground
}
