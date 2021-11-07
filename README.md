# `<nft-guard>` — Prevent your NFTs from being right-click downloaded

> Wrap your NFTs into the `<nft-guard>`-element and prevent them from being downloaded by bad actors
> that down't own them.

> ![The nft-guard element in action securing a NFT](https://user-images.githubusercontent.com/520258/140641338-86523694-8a42-4c4d-ab0c-19d79ca52f4b.gif)

## Installation

Install the package from the [npm registry](https://www.npmjs.com/package/nft-guard):

```sh
npm install --save nft-guard

# or

yarn add nft-guard
```

## Usage

Include the package into your JS bundle:

```js
// ESM
import 'nft-guard';

// CommonJS
require('nft-guard');
```

This registers the custom element `<nft-guard>`. You can now start using it in your HTML:

```html
<figure>
  <nft-guard>
    <img src="my-precious-nft.jpg" alt="" />
  </nft-guard>
</figure>
```

That's it! You're save now, evil persons going nuts on their right mouse-button won't be able to
steal your NFTs anymore. Enjoy your decentralized life. 😎

---

Brought to you by [`@herschel_r`](https://twitter.com/herschel_r) 🐦

---

## Disclaimer

This is a joke. [#scnr](https://www.urbandictionary.com/define.php?term=SCNR) 🤷‍♂️ Images on the web are downloadable by design.

## License

The MIT License (MIT)

Copyright (c) 2021 Emanuel Kluge

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
