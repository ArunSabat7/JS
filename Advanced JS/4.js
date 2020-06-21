// swap nos. without third variable
let a=4;
let b=16;
// let te=a;
// a=b
// b=te
[a,b]=[b,a]
console.log(`values are ${a} and ${b}`)
// object destructuring
const bdata={
name:'modi',age:56,des:'pm',hob:{
f1:'music',f2:'youtube'
}
}
// let{name,age,des}=bdata
let{name:myname,age,des,hob}=bdata /* renaming*/
console.log('name is '+hob.f2)
// arrow function
// let sum=function (add) {
// let a=5
// let b=7
// add=a+b
// return add
// }
// console.log(sum())
let sum= (a,b)=>a+b
console.log(sum(10,20))

// default parameters
function tu(a,b=10){
	console.log(a*b)
}
tu(10)

// rest parameters
function su(...ar){
console.log(ar)
let tot=0;
for(let i of ar)
tot+=i;
console.log(tot)
console.log(ar.length)
console.log(ar.indexOf(4))
}
su(1,2,3,4,5,6,10)