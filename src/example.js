const sum = (a, b) => a + b

test(`summ add numbers`, async () => {
  let result = await sum(3, 7)
  let expected = 10
  expect(result).toBe(expected)
})

test(`summ add numbers`, async () => {
  let result = await sum(2, 7)
  let expected = 10
  expect(result).toBe(expected)
})

async function test(title, callback) {
  try {
    await callback()
    console.log(`✔ ${title}`)
  } catch (error) {
    console.error(`❌ $title`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Wrong`)
      }
    },
  }
}
