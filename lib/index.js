/**
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} UnistPosition
 * @typedef {import('vscode-languageserver-types').Position} LspPosition
 * @typedef {import('vscode-languageserver-types').Range} Range
 */

/**
 * Turn a unist point into a language server protocol position.
 *
 * @param {Point} point The unist point to convert.
 * @returns {LspPosition} The LSP position.
 */
export function fromPoint(point) {
  return {
    character: point.column - 1,
    line: point.line - 1
  }
}

/**
 * Convert an LSP position to a unist point.
 *
 * @param {LspPosition} lspPosition The LSP position to convert.
 * @returns {Point} The unist point.
 */
export function toPoint(lspPosition) {
  return {
    column: lspPosition.character + 1,
    line: lspPosition.line + 1
  }
}

/**
 * Convert a unist position to an LSP range.
 *
 * @param {UnistPosition} unistPosition The unist position to convert.
 * @returns {Range} The LSP range.
 */
export function fromPosition(unistPosition) {
  return {
    start: fromPoint(unistPosition.start),
    end: fromPoint(unistPosition.end)
  }
}

/**
 * Convert an LSP range to a unist position.
 *
 * @param {Range} range The LSP range to convert.
 * @returns {UnistPosition} The range converted to a unist position.
 */
export function toPosition(range) {
  return {
    start: toPoint(range.start),
    end: toPoint(range.end)
  }
}
