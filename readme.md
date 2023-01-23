# unist-util-lsp

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[unist][] utility to convert positional info between [unist][] and
[language server protocol][lsp]

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`fromPoint(point)`](#frompointpoint)
    *   [`fromPosition(unistPosition)`](#frompositionunistposition)
    *   [`toPoint(lspPosition)`](#topointlspposition)
    *   [`toPosition(range)`](#topositionrange)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that converts positional info between [unist][] and
[language server protocol][lsp].

## When should I use this?

You can use this package when you are dealing with both unist ASTs and a
language server.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+ and 16.0+), install with [npm][]:

```sh
npm install unist-util-lsp
```

In Deno with [`esm.sh`][esmsh]:

```js
import {
  toPoint,
  toPosition,
  fromPoint,
  fromPosition,
} from 'https://esm.sh/unist-util-lsp@?1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {
    toPoint,
    toPosition,
    fromPoint,
    fromPosition,
  } from 'https://esm.sh/unist-util-lsp@?1'
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
import {fromPosition, fromPoint, toPosition, toPoint} from 'unist-util-lsp'

const markdown = String(await fs.readFile('example.md'))
const mdast = fromMarkdown(markdown)

console.log(mdast.position)

const range = fromPosition(mdast.position)

console.log(range)

const position = toPosition(range)

console.log(position)

const startPosition = fromPoint(mdast.position.start)

console.log(startPosition)

const startPoint = toPoint(startPosition)

console.log(startPoint)
```

…now running `node example.js` yields:

```js
{
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 2, column: 1, offset: 20 }
}
{ start: { character: 0, line: 0 }, end: { character: 0, line: 1 } }
{ start: { column: 1, line: 1 }, end: { column: 1, line: 2 } }
{ character: 0, line: 0 }
{ column: 1, line: 1 }
```

## API

This package exports the identifiers [`fromPoint`][api-frompoint],
[`fromPosition`][api-fromposition], [`toPoint`][api-topoint],
and [`toPosition`][api-toposition].
There is no default export.

### `fromPoint(point)`

Turn a unist point into a language server protocol position.

###### Parameters

*   `point` ([`Point`][point])
    — the unist point to convert

###### Returns

The LSP position ([`LspPosition`][lspposition]).

### `fromPosition(unistPosition)`

Convert a unist position to an LSP range.

###### Parameters

*   `unistPosition` ([`UnistPosition`][unistposition])
    — the unist position to convert

###### Returns

The LSP range ([`Range`][range]).

### `toPoint(lspPosition)`

Convert a language server protocol position to a unist point.

###### Parameters

*   `lspPosition` ([`LspPosition`][lspposition])
    — the LSP position to convert

###### Returns

The unist point ([`Point`][point]).

### `toPosition(range)`

Convert an LSP range to a unist position.

###### Parameters

*   `range` ([`Range`][range])
    — the LSP range to convert

###### Returns

The range converted to a unist position ([`UnistPosition`][unistposition]).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Security

This package is safe.

## Related

*   [`unist`][unist]
    — specification for abstract syntax trees
*   [Language server protocol][lsp]
    — protocol to communicate between editors and language servers

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

[build-badge]: https://github.com/syntax-tree/unist-util-lsp/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-util-lsp/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-lsp.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-lsp

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-lsp.svg

[downloads]: https://www.npmjs.com/package/unist-util-lsp

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-lsp.svg

[size]: https://bundlephobia.com/result?p=unist-util-lsp

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[lsp]: https://microsoft.github.io/language-server-protocol

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

[point]: https://github.com/syntax-tree/unist#point

[unistposition]: https://github.com/syntax-tree/unist#position

[lspposition]: https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#position

[range]: https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#range

[api-frompoint]: #frompointpoint

[api-fromposition]: #frompositionunistposition

[api-topoint]: #topointlspposition

[api-toposition]: #topositionrange
