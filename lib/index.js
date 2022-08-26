/**
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} UnistPosition
 * @typedef {import('vscode-languageserver-types').Position} LspPosition
 * @typedef {import('vscode-languageserver-types').Range} Range
 */

/**
 * Convert a unist point to an LSP position.
 *
 * @param {Point} point The unist point to convert.
 * @returns {LspPosition} The point converted to an LSP position.
 */
export function unistPointToLspPosition(point) {
  return {
    character: point.column - 1,
    line: point.line - 1
  }
}

/**
 * Convert an LSP position to a unist point.
 *
 * @param {LspPosition} position The LSP position to convert.
 * @returns {Point} The position converted to a unist point.
 */
export function lspPositionToUnistPoint(position) {
  return {
    column: position.character + 1,
    line: position.line + 1
  }
}

/**
 * Convert a unist position to an LSP range.
 *
 * @param {UnistPosition} position The unist position to convert.
 * @returns {Range} The position converted to an LSP range.
 */
export function unistPositionToLspRange(position) {
  return {
    start: unistPointToLspPosition(position.start),
    end: unistPointToLspPosition(position.end)
  }
}

/**
 * Convert an LSP range to a unist position.
 *
 * @param {Range} range The LSP range to convert.
 * @returns {UnistPosition} The range converted to a unist position.
 */
export function lspRangeToUnistPosition(range) {
  return {
    start: lspPositionToUnistPoint(range.start),
    end: lspPositionToUnistPoint(range.end)
  }
}
