// spread operator
// spread replaces apply()
function sum (a,b,c) {
console.log(a+b+c)
}
var arr=[1,3,3]
console.log(...arr)
sum(...arr)
// sum.apply(null,arr);
// spread replaces concat
let ar1=[1,2,3]
let ar2=[4,5,6,7,8,9]
ar1=ar1.concat(ar2)
console.log(ar1)
// console.log(...ar1,...ar2)
// spread replaces copy
let cp1=[1,2,3]
// let cp2=cp1
// cp2.push(4,5)
// console.log(cp2)
// console.log(cp1)
let cp2=[...cp1,4,5,]
let cp3=[6,7,8]
cp2=[...cp1,4,5,...cp3,10]
console.log(cp2)
// console.log(cp1)