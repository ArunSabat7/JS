console.log('welcome')
// js destructuring
let a,b
[a,b]=[10,20]
console.log(a,b)
let c,d
[a,b,c,...d]=[1,2,3,4,5,6,7,8,20]
console.log(a)
console.log(b)
console.log(c)
console.log(d)
let e,f
({a,b,c,...d}={a:1,b:2,c:3,d:45,e:6,f:7})
console.log(a,b,c,d)

// array destructuring
let lang
 lang=['js','go','java']
[a,b,c]=lang
console.log(a,b,c)

// object destructuring
let ob1={
    name:'modi',age:57,des:'pm',func:()=>{console.log('started')}
}

const {name, age,func}=ob1
console.log(name,age,func)
func()
