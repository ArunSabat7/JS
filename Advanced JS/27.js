// shorthand character class
console.log('welcome')

let name = /modi/
name = /\wodi/ // \w: word character any 1 char (_, alphabet, numbers are word char)
name = /\w+odi/ // \w+: more than 1 char (_, alphabet, numbers are word char)
name = /\Wmodi/ //non-word char
name = /modi\d99/ // \d: means one digit
name = /modi\d+99/ // \d+: means more than one digit
name = /modi\D9/ // \D: means one non-digit
name = /modi\D+9/ // \D+: means more than one non-digit
name = /modi\s9/ // \s: match one whitespace char
name = /modi\s+9/ // \s+: match more than one whitespace char
name = /modi\S9/ // \S: match one non-whitespace char

// assertions
name = /m(?=o)/
name = /m(?!o)/

let str = 'modisha9h bhai'
str = 'modi  9modi 99sha9h bhai'
let res = name.exec(str)
console.log(res)
let res1 = name.test(str)
console.log(res1)

if (res1) {
    console.log(`${str} matched`)

} else {
    console.log(`${str} not matched`)
}