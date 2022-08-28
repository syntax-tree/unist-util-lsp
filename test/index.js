import {toPoint, toPosition, fromPoint, fromPosition} from 'unist-util-lsp'
import test from 'tape'

test('fromPoint', async (t) => {
  t.deepEqual(
    fromPoint({line: 43, column: 100}),
    {line: 42, character: 99},
    'should convert unist points to LSP positions'
  )
})

test('toPoint', async (t) => {
  t.deepEqual(
    toPoint({line: 43, character: 100}),
    {line: 44, column: 101},
    'should convert LSP positions to unist points'
  )
})

test('fromPosition', async (t) => {
  t.deepEqual(
    fromPosition({
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

test('toPosition', async (t) => {
  t.deepEqual(
    toPosition({
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
