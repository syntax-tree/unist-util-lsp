import assert from 'node:assert/strict'
import test from 'node:test'
import {
  fromPlace,
  fromPoint,
  fromPosition,
  toPoint,
  toPosition
} from 'unist-util-lsp'

test('unist-util-lsp', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('unist-util-lsp')).sort(), [
      'fromPlace',
      'fromPoint',
      'fromPosition',
      'toPoint',
      'toPosition'
    ])
  })
})

test('fromPlace', async function (t) {
  await t.test(
    'should convert unist points to LSP positions',
    async function () {
      assert.deepEqual(fromPlace({line: 43, column: 100}), {
        start: {line: 42, character: 99},
        end: {line: 42, character: 99}
      })
    }
  )

  await t.test(
    'should convert unist positions to LSP ranges',
    async function () {
      assert.deepEqual(
        fromPlace({start: {line: 1, column: 2}, end: {line: 3, column: 4}}),
        {start: {line: 0, character: 1}, end: {line: 2, character: 3}}
      )
    }
  )
})

test('fromPoint', async function (t) {
  await t.test(
    'should convert unist points to LSP positions',
    async function () {
      assert.deepEqual(fromPoint({line: 43, column: 100}), {
        line: 42,
        character: 99
      })
    }
  )

  await t.test(
    'should convert unist points with zero values',
    async function () {
      assert.deepEqual(fromPoint({line: 0, column: 0}), {line: 0, character: 0})
    }
  )

  await t.test(
    'should convert unist points with null values',
    async function () {
      assert.deepEqual(
        // @ts-expect-error: check how nullish runtime values are treated.
        fromPoint({line: null, column: null}),
        {line: 0, character: 0}
      )
    }
  )
})

test('toPoint', async function (t) {
  await t.test(
    'should convert LSP positions to unist points',
    async function () {
      assert.deepEqual(toPoint({line: 43, character: 100}), {
        line: 44,
        column: 101
      })
    }
  )
})

test('fromPosition', async function (t) {
  await t.test(
    'should convert unist positions to LSP ranges',
    async function () {
      assert.deepEqual(
        fromPosition({start: {line: 1, column: 2}, end: {line: 3, column: 4}}),
        {start: {line: 0, character: 1}, end: {line: 2, character: 3}}
      )
    }
  )

  await t.test(
    'should convert unist positions to LSP ranges if end line is null',
    async function () {
      assert.deepEqual(
        fromPosition({
          start: {line: 1, column: 2},
          // @ts-expect-error: check how nullish runtime values are treated.
          end: {line: null, column: 4}
        }),
        {start: {line: 0, character: 1}, end: {line: 0, character: 1}}
      )
    }
  )

  await t.test(
    'should convert unist positions to LSP ranges if end line is null',
    async function () {
      assert.deepEqual(
        fromPosition({
          start: {line: 1, column: 2},
          // @ts-expect-error: check how nullish runtime values are treated.
          end: {line: 3, column: null}
        }),
        {start: {line: 0, character: 1}, end: {line: 0, character: 1}}
      )
    }
  )

  await t.test(
    'should convert unist positions to LSP ranges if end line is null',
    async function () {
      assert.deepEqual(
        fromPosition({
          start: {line: 1, column: 2},
          // @ts-expect-error: check how nullish runtime values are treated.
          end: null
        }),
        {start: {line: 0, character: 1}, end: {line: 0, character: 1}}
      )
    }
  )
})

test('toPosition', async function (t) {
  await t.test(
    'should convert LSP ranges to unist positions',
    async function () {
      assert.deepEqual(
        toPosition({
          start: {line: 0, character: 1},
          end: {line: 2, character: 3}
        }),
        {start: {line: 1, column: 2}, end: {line: 3, column: 4}}
      )
    }
  )
})
