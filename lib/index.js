/**
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} UnistPosition
 * @typedef {import('vscode-languageserver-types').Position} LspPosition
 * @typedef {import('vscode-languageserver-types').Range} Range
 */

/**
 * Convert a unist point or position to an LSP range.
 *
 * @param {Readonly<UnistPosition> | Readonly<Point>} place
 *   The unist point or position to convert.
 * @returns {Range}
 *   The LSP range.
 */
export function fromPlace(place) {
  if ('line' in place && 'column' in place) {
    return {
      start: fromPoint(place),
      end: fromPoint(place)
    }
  }

  return fromPosition(place)
}

/**
 * Turn a unist point into an LSP position.
 *
 * @param {Readonly<Point>} point
 *   The unist point to convert.
 * @returns {LspPosition}
 *   The LSP position.
 */
export function fromPoint(point) {
  return {
    character: point.column ? point.column - 1 : 0,
    line: point.line ? point.line - 1 : 0
  }
}

/**
 * Convert an LSP position to a unist point.
 *
 * @param {Readonly<LspPosition>} lspPosition
 *   The LSP position to convert.
 * @returns {Point}
 *   The unist point.
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
 * @param {Readonly<UnistPosition>} unistPosition
 *   The unist position to convert.
 * @returns {Range}
 *   The LSP range.
 */
export function fromPosition(unistPosition) {
  let end = unistPosition.end

  // eslint-disable-next-line eqeqeq, no-eq-null
  if (!end || end.line == null || end.column == null) {
    end = unistPosition.start
  }

  return {
    start: fromPoint(unistPosition.start),
    end: fromPoint(end)
  }
}

/**
 * Convert an LSP range to a unist position.
 *
 * @param {Readonly<Range>} range
 *   The LSP range to convert.
 * @returns {UnistPosition}
 *   The range converted to a unist position.
 */
export function toPosition(range) {
  return {
    start: toPoint(range.start),
    end: toPoint(range.end)
  }
}
