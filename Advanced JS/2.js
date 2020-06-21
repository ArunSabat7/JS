//function hoisting
function sum(a,b) {
add=a+b;
console.log(add)
}
sum(2,11)
// variable hoisting
var r=30
console.log(typeof JSON.stringify(r))
console.log(t)
var t=2
console.log(t)
// exercise on hoisting
console.log(u)
var u=2
console.log(u)

function jo(){
	job='front'
console.log('job is '+job)
var job='full stack'
console.log('job is '+job)
}
jo()