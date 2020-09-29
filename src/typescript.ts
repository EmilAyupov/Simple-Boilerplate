function add(a: number, b: number): number {
  return a + b
}

interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}

function getFullName(name: User) {
  const {
    name: {first, middle, last},
  } = name

  return [first, middle, last].filter(Boolean).join('')
}
add(1, 3)
getFullName({name: {first: 'Bob', middle: 'Bud', last: 'Mathews'}})
