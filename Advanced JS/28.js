// iterators
console.log('welcome')

const arr = ['js', 'java', 'go', 'python']
console.log(arr)

let iterator = (val) => {
    let index = 0
    // we eill return an object
    return {
        next: () => {

            if (index < val.length) {
                return {
                    value: val[index++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

// using iterator
const lang = iterator(arr)
console.log(lang.next())
console.log(lang.next())
console.log(lang.next())
console.log(lang.next())
console.log(lang.next())

let ob = {
    x: 10,
    y: 30
}
let iter = Iterator(ob)
console.log(iter.next())
console.log(iter.next())