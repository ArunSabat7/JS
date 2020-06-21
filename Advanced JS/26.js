// character sets: use []
let name = /modi/
name = /m[a-z]di/ // any char from a to z in string
name = /m[opqr]di/ // any one character from set in string
name = /m[^opqr]di/ // ^ means not from those char set in string
name = /m[^opqr]dish[ay]h/ // use of multiple char sets
name = /m[opqr]dish[adff][0-9]h/ // can us as many char sets

// quantifiers: use {}
name = /modi{2}/ // i will occur exactly 2 times
name = /modi{0,2}/ // i can occur from range 0 to 2
name = /(modi){2}/ // use () for grouping

let str = 'modisha9h bhai'
str = 'modimodisha9h bhai'
let res = name.exec(str)
console.log(res)
let res1 = name.test(str)
console.log(res1)

if (res1) {
    console.log(`${str} matched`)

} else {
    console.log(`${str} not matched`)
}