#!/bin/sh

npx parcel build index.mjs;
cp lib/modules/SargassoComponent.mjs dist/modules/SargassoComponent.mjs;
cp lib/modules/MaterialButton.mjs dist/modules/MaterialButton.mjs;
cp lib/modules/MaterialTextField.mjs dist/modules/MaterialTextField.mjs;
cp lib/modules/MDCRipple.mjs dist/modules/MDCRipple.mjs;
cp lib/breakpoints.js dist/breakpoints.js;
npx terser dist/sargasso.mjs --output dist/sargasso.min.mjs;
npx terser dist/breakpoints.js --output dist/breakpoints.min.js
