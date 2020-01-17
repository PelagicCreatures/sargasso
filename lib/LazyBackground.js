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

			const offload = `onmessage = async (e) => {
			  const imageURL = e.data
			  const response = await fetch(imageURL)
			  const blob = await response.blob()
			  self.postMessage(blob)
			}`

			this.workerStart('loader', offload)

			let imgUrl = this.element.getAttribute('data-src')

			// not fully qualified...
			if (!imgUrl.match(/^http/)) {
				imgUrl = new URL(imgUrl, location.href).href
			}

			this.workerPost('loader', imgUrl)
		}
	}

	workerOnMessage (id, e) {
		if (id === 'loader') {
			this.blobURL = URL.createObjectURL(e.data)
			const frame = () => {
				this.element.style.backgroundImage = 'url(' + this.blobURL + ')'
				this.sleep() // We're done. That was easy.
			}
			this.queueFrame(frame)
		}

		super.workerOnMessage(id, e)
	}

	destroy () {
		if (this.blobURL) {
			URL.revokeObjectURL(this.blobURL)
		}
		super.destroy()
	}
}

registerSargassoClass('LazyBackground', LazyBackground)

export {
	LazyBackground
}
