// regular expression
console.log('welcome  in reg exp')
let name = /modi/ /*this is regular expresion literal in js */
// name=/modi/g  /*g means global*/
// name=/modi/i /*i means case insensitive*/
console.log(name)
console.log(name.source)

// function to match regular exp
/*
1. exec(): this function will return an array for match and null for no match
*/
let st = 'manage coron pm modi and explain budget modi'
let res = name.exec(st)
console.log(res)
// console.log(res.input)
// res=name.exec(st) --> we can use multiple exec with global flags
// console.log(res)
// res=name.exec(st)
// console.log(res)

// 2. test(): returns true or false
let res1 = name.test(st)
console.log(res1) /*it will print true if reg is present in the string otherwise false*/

// match():it will return an array of results or null
let res2 = st.match(name)
console.log(res2)

// search(): returns index of first match else -1
let res3 = st.search(name)
console.log(res3)

// replace: returns new replaced string with all replacement if global flag is applied otherwise only firts match
let res4 = st.replace(name, 'shah')
console.log(res4)