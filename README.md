# svelte-fragment-component

> A [svelte](https:/svelte.dev) component that renders its children with lifecycle hooks.

[![License](https://badgen.net/npm/license/svelte-fragment-component)](https://github.com/kenoxa/svelte-fragment-component/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/svelte-fragment-component)](https://www.npmjs.com/package/svelte-fragment-component)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/svelte-fragment-component)

[![CI](https://github.com/kenoxa/svelte-fragment-component/workflows/CI/badge.svg)](https://github.com/kenoxa/svelte-fragment-component/actions?query=branch%3Amain+workflow%3ACI)
[![Coverage Status](https://badgen.net/coveralls/c/github/kenoxa/svelte-fragment-component/main)](https://coveralls.io/github/kenoxa/svelte-fragment-component?branch=main)
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

<script>
  <!-- And then grab it off the global like so: -->
  const Fragment = svelteFragment
</script>
```

Hotlinking from unpkg: _(no build tool needed!)_

```js
import Fragment from 'https://unpkg.com/svelte-fragment-component?module'
```

## Usage

> The examples below are using [svelte-jsx](https://www.npmjs.com/package/svelte-jsx) for the jsx syntax support.

```js
import Fragment from 'svelte-fragment-component'

const Lifecycle = (
  <Fragment
    onCreate={() => {}}
    onMount={() => {}}
    beforeUpdate={() => {}}
    afterUpdate={() => {}}
    onDestroy={() => {}}
  >
    some content
  </Fragment>
)
```

This allows to simplify testing of [context API](https://svelte.dev/docs#setContext):

```js
import Fragment from 'svelte-fragment-component'
import { setContext } from 'svelte'

const Lifecycle = (
  <Fragment
    onCreate={() => {
      setContext('some context key', theValue)
    }}
  >
    children can now access this context value
  </Fragment>
)

// or using the context property
const Lifecycle = (
  <Fragment context={{ 'some context key': theValue }}>
    children can now access this context value
  </Fragment>
)
```

## API

The component renders only the default slot children.

### Properties

> All properties are optional.

- `context`: an key-value object where each pair is passed to [setContext](https://svelte.dev/docs#setContext)

Except for `onCreate` these functions are passed to their corresponding svelte lifecycle method and have the same call signature `({ props }): void` where `props` are the `$$restProps`:

- `onCreate`: called during component initialization
- [onMount](https://svelte.dev/docs#onMount)
- [beforeUpdate](https://svelte.dev/docs#beforeUpdate)
- [afterUpdate](https://svelte.dev/docs#afterUpdate)
- [onDestroy](https://svelte.dev/docs#onDestroy)

## Related Projects

- [svelte-jsx] - write svelte components using [jsx]
- [svelte-htm] - [**H**yperscript **T**agged **M**arkup](https://www.npmjs.com/package/htm) for svelte; a [jsx]-like [syntax](https://www.npmjs.com/package/htm#syntax-like-jsx-but-also-lit) using [Tagged Templates]
- [@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library/intro) - helps to test UI components in a user-centric way

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/kenoxa/svelte-fragment-component). Feel free to [open an issue](https://github.com/kenoxa/svelte-fragment-component/issues) if you have any idea, question, or you've found a bug.

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

`svelte-fragment-component` is open source software [licensed as MIT](https://github.com/kenoxa/svelte-fragment-component/blob/main/LICENSE).

[tagged templates]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
[jsx]: https://reactjs.org/docs/introducing-jsx.html
[svelte-jsx]: https://www.npmjs.com/package/svelte-jsx
[svelte-hyperscript]: https://www.npmjs.com/package/svelte-hyperscript
[svelte-htm]: https://www.npmjs.com/package/svelte-htm
