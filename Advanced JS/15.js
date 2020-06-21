// pass by value and pass by reference
// pass by value works on primitive data types
// pass by reference works on non-primitive data types
let a = 4
let b = a
b = 7
console.log(a)
console.log(b)

const ob = {
    user: 'modi',
    pass: 12345
}
const ob1 = ob
ob.pass = 7890
console.log(ob)
console.log(ob1)

let a1 = [1, 2, 3, 4]
// let a2=a1 /*memory location is same*/
let a2 = [].concat(a1) /* memory location is different*/

a2[1] = 22
console.log(a1)
console.log(a2)