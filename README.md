# dsd-polyfill

![release](https://github.com/digitalsadhu/dsd-polyfill/actions/workflows/release.yml/badge.svg)

This repo contains a declarative shadow DOM code snippet for use in other libraries and apps.
It's primary purpose is to centralise dsd polyfill snippets in a single place and avoid a lot of copy and paste.

## Install

```
npm install dsd-polyfill
```

## Usage

```js
import { dsdPolyfill } from "dsd-polyfill";

// if applying 1x to entire page
// starting from the node given, child nodes will be traversed.
dsdPolyfill(document.body);

// if applying multiple times to target specific elements
dsdPolyfill(document.querySelector("some-custom-element-1"));
dsdPolyfill(document.querySelector("some-custom-element-2"));
```

if applying generically directly after an element without knowing its name

```html
<custom-element-name>
  <template shadowrootmode="open">
    ...
  </template>
</custom-element-name>
<script type="module">
	import { dsdPolyfill } from "dsd-polyfill";
	dsdPolyfill(document.currentScript.previousElementSibling);
</script>
```

## Development

This repo uses [Conventional Commits](https://www.conventionalcommits.org/) as part of the release process. Please make yourself familliar with [how commit messages should be structured](https://www.conventionalcommits.org/en/v1.0.0/#summary) before you contribute to this repo.
When contributing to this repo, please make a new branch of your changes and file a pull request with your changes.


## Run linting

To lint the package:

```sh
npm run lint
```

## Checking types

To check types for the package:

```sh
npm run types:check
```

## Updating types

To update types for the package:

```sh
npm run types
```

## Releasing and publishing

This repo uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) to release and publish each of the packages.
