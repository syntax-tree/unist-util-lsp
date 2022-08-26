import {
  lspPositionToUnistPoint,
  lspRangeToUnistPosition,
  unistPointToLspPosition,
  unistPositionToLspRange
} from 'unist-lsp'
import test from 'tape'

test('unistPointToLspPosition', async (t) => {
  t.deepEqual(
    unistPointToLspPosition({line: 43, column: 100}),
    {line: 42, character: 99},
    'should convert unist points to LSP positions'
  )
})

test('lspPositionToUnistPoint', async (t) => {
  t.deepEqual(
    lspPositionToUnistPoint({line: 43, character: 100}),
    {line: 44, column: 101},
    'should convert LSP positions to unist points'
  )
})

test('unistPositionToLspRange', async (t) => {
  t.deepEqual(
    unistPositionToLspRange({
      start: {line: 1, column: 2},
      end: {line: 3, column: 4}
    }),
    {
      start: {line: 0, character: 1},
      end: {line: 2, character: 3}
    },
    'should convert unist positions to LSP ranges'
  )
})

test('lspRangeToUnistPosition', async (t) => {
  t.deepEqual(
    lspRangeToUnistPosition({
      start: {line: 0, character: 1},
      end: {line: 2, character: 3}
    }),
    {
      start: {line: 1, column: 2},
      end: {line: 3, column: 4}
    },
    'should convert LSP ranges to unist positions'
  )
})
