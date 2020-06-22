# svelte-fragment-component

> A svelte component that renders its children. Nothing more.

[![License](https://badgen.net/npm/license/svelte-fragment-component)](https://github.com/sastan/svelte-fragment-component/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/svelte-fragment-component)](https://www.npmjs.com/package/svelte-fragment-component)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/svelte-fragment-component)

[![CI](https://github.com/sastan/svelte-fragment-component/workflows/CI/badge.svg)](https://github.com/sastan/svelte-fragment-component/actions?query=branch%3Amain+workflow%3ACI)
[![Coverage Status](https://badgen.net/coveralls/c/github/sastan/svelte-fragment-component/main)](https://coveralls.io/github/sastan/svelte-fragment-component?branch=main)
[![PRs Welcome](https://badgen.net/badge/PRs/welcome/purple)](http://makeapullrequest.com)
[![Conventional Commits](https://badgen.net/badge/Conventional%20Commits/1.0.0/cyan)](https://conventionalcommits.org)

## What?

Declarative version of [Svelte](https://svelte.dev) component inspired by [reach-ui/component-component](https://reacttraining.com/reach-ui/component-component/).

## Why?

Because sometimes (within tests) you want a lifecycle or some state but don't want to create a new component.

_This is most likely only useful for libraries like [svelte-jsx](https://www.npmjs.com/package/svelte-jsx) or [svelte-htm](https://www.npmjs.com/package/svelte-htm)._

## Installation

```sh
npm install svelte-fragment-component
```

And then import it:

```js
// using es modules
import Fragment from 'svelte-fragment-component'

// common.js
const Fragment = require('svelte-fragment-component')
```

Or use script tags and globals ([UNPKG](https://unpkg.com/svelte-fragment-component/) | [jsDelivr](https://cdn.jsdelivr.net/npm/svelte-fragment-component/)).

```html
<!-- UNPKG -->
<script src="https://unpkg.com/svelte-fragment-component"></script>

<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/svelte-fragment-component"></script>
```

And then grab it off the global like so:

```js
const Fragment = svelteFragment
```
## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/sastan/svelte-fragment-component). Feel free to [open an issue](https://github.com/sastan/svelte-fragment-component/issues) if you have any idea, question, or you've found a bug.

## Contribute

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Develop

- `npm test`: Run test suite
- `npm run build`: Generate bundles
- `npm run lint`: Lints code

## NPM Statistics

[![NPM](https://nodei.co/npm/svelte-fragment-component.png)](https://nodei.co/npm/svelte-fragment-component/)

## License

`svelte-fragment-component` is open source software [licensed as MIT](https://github.com/sastan/svelte-fragment-component/blob/main/LICENSE).
