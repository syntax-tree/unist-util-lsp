import assert from 'node:assert/strict'
import test from 'node:test'
import {toPoint, toPosition, fromPoint, fromPosition} from 'unist-util-lsp'
import * as mod from '../index.js'

test('core', async () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['fromPoint', 'fromPosition', 'toPoint', 'toPosition'],
    'should expose the public api'
  )
})

test('fromPoint', async () => {
  assert.deepEqual(
    fromPoint({line: 43, column: 100}),
    {line: 42, character: 99},
    'should convert unist points to LSP positions'
  )
})

test('toPoint', async () => {
  assert.deepEqual(
    toPoint({line: 43, character: 100}),
    {line: 44, column: 101},
    'should convert LSP positions to unist points'
  )
})

test('fromPosition', async () => {
  assert.deepEqual(
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

test('toPosition', async () => {
  assert.deepEqual(
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
