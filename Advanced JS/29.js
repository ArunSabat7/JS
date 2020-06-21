console.log('welcome')
// generators
function* gen() {
    let i = 0
    yield 1
    yield 2
    yield 3
    yield 4
}
const g = gen()
console.log(g.next().value)
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())