# unist-lsp

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Convert positional info between [unist][] and [language server protocol][]

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unistPointToLspPosition(point)`](#unistpointtolsppositionpoint)
    *   [`unist-lsp(position)`](#unist-lspposition)
    *   [`unistPositionToLspRange(position)`](#unistpositiontolsprangeposition)
    *   [`lspRangeToUnistPosition(range)`](#lsprangetounistpositionrange)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that converts positional info between [unist][] and
[language server protocol][].

## When should I use this?

This project is useful when you want to deal with unist ASTs and a language
server.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, or 16.0+), install with [npm][]:

```sh
npm install unist-lsp
```

In Deno with [`esm.sh`][esmsh]:

```js
import {
  lspPositionToUnistPoint,
  lspRangeToUnistPosition,
  unistPointToLspPosition,
  unistPositionToLspRange,
} from "https://esm.sh/unist-lsp@?0"
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {
    lspPositionToUnistPoint,
    lspRangeToUnistPosition,
    unistPointToLspPosition,
    unistPositionToLspRange,
  } from "https://esm.sh/unist-lsp@?0"
</script>
```

## Use

Say we have the following `example.md`:

```markdown
## Hello **World**!
```

…and next to it a module `example.js`:

```js
import fs from 'node:fs/promises'
import {fromMarkdown} from 'mdast-util-from-markdown'


const markdown = String(await fs.readFile('example.md'))
const mdast = fromMarkdown(markdown)

const range = unistPositionToLspRange(mdast.position)

console.dir(range)
```

…now running `node example.js` yields:

```html
{ start: { line: 0, character: 0 }, end: { line: 0, character: 19 } }
```

## API

This package exports the identifiers  `lspPositionToUnistPoint`, `lspRangeToUnistPosition`, `unistPointToLspPosition`, and `unistPositionToLspRange`
There is no default export.

### `unistPointToLspPosition(point)`

Convert a unist point to a language server protocol position.

### `unist-lsp(position)`

Convert a language server protocol position to a unist point.

### `unistPositionToLspRange(position)`

Convert a unist position to a language server protocol range.

### `lspRangeToUnistPosition(range)`

Convert a language server protocol range to a unist position.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+, and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Security

## Related

*   [`unist`][unist]
    — a specification for abstract syntax trees
*   [`language server protocol`](https://microsoft.github.io/language-server-protocol)
    — a protocol for communicating between an editor and a language server

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Remco Haszing][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/unist-lsp/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-lsp/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-lsp.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-lsp

[downloads-badge]: https://img.shields.io/npm/dm/unist-lsp.svg

[downloads]: https://www.npmjs.com/package/unist-lsp

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-lsp.svg

[size]: https://bundlephobia.com/result?p=unist-lsp

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[language server protocol]: https://microsoft.github.io/language-server-protocol

[license]: license

[npm]: https://docs.npmjs.com/cli/install

[author]: https://github.com/remcohaszing

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist
