console.log('welcome to tut20');

let to = new Date()
console.log(to);
let to1 = new Date('19 june 2020 23:12:01')
console.log(to1);
let a = to.getDate()
a = to.getDay()
// a = to.getMinutes()
// a = to.getSeconds()
// a = to.getMonth()
console.log(a);


to.setMonth(1)
to.setMinutes(2)


console.log(to);