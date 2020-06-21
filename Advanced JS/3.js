// var, let, const
// var name1='modi'
// // name1='hari'
// // console.log(name1)
// let stu='shah'
// stu='raj'
// console.log(stu)
// const sch='lvm'
// // sch='vit'
// console.log(sch)
function modjs(love) {
    var a = 'love1'
    if (a == 'love1') {
        let name = 'dada'
        const sname = 'mane'
        console.log('name is ' + name + ' ' + sname);
    } else {
        console.log('no fun');

    }
}
modjs()
// template string/literals
console.log(`name is 'modi' and hm is 'shah'`)
let fname = 'raj'
let sname = 'thak'
console.log(fname.startsWith('r'))
console.log(fname.includes('aj'))
console.log(fname.repeat('5'))
// array destructuring
const arr = ['js', 'java', 'go', 'c', 'python']
console.log(arr[4])
// var a0=arr[0]
// var a1=arr[1]
// var a2=arr[2]
// var a3=arr[3]
// var a4=arr[4]
// console.log('fav lang is '+a4)
let [a0, a1, a2, a3, a4] = arr
console.log('fav lang is ' + a2)
console.log(arr.length)

let [topfirst, , , , toplast] = arr
console.log(toplast)