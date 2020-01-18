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

			/*
				the worker function to load the image

				this web worker could be used by many instances.
				e.data.uid is the id on the instance that is involking the worker
				so we pass it back in the postMessage so whe know who is whom
			*/
			const offload = `onmessage = async (e) => {
			  const response = await fetch(e.data.url)
			  const blob = await response.blob()
			  self.postMessage({ uid: e.data.uid, blob: blob })
			}`

			this.workerStart('loader', offload)

			let imgUrl = this.element.getAttribute('data-src')

			// not fully qualified...
			if (!imgUrl.match(/^http/)) {
				imgUrl = new URL(imgUrl, location.href).href
			}

			// hand the url to the worker for loading
			this.workerPostMessage('loader', {
				url: imgUrl
			})
		}
	}

	// we got a message back from a worker
	workerOnMessage (id, e) {
		// if it's from loader then handle it
		if (id === 'loader') {
			if (e.data.uid === this.uid) {
				this.blobURL = URL.createObjectURL(e.data.blob)
				const frame = () => {
					this.element.style.backgroundImage = 'url(' + this.blobURL + ')'
					this.sleep() // We're done. That was easy.
				}
				this.queueFrame(frame)
			}
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
