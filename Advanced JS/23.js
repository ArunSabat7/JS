// forEach() loop

const arr = ['js', 'go', 'java', 'python']
// console.log(arr[1])
// console.log(arr.length)

// for(let x=0;x<arr.length;x++){
//     console.log(arr[x])
// }

// arr.forEach(function (cvalue,index) {
//     console.log(cvalue+' - '+index)
// })

//  const arr1=[1,2,3,4,5]
//  arr1.forEach((val,index,ar) => {
//    console.log(val+100)
// })

// for of loop: allows us to iterate
// works on iterable objects: arrays and strings
// for(i of arr){
//     console.log(i)
// }
// for(i1 of 'ar123456'){
//     console.log(i1)
// }

// for in loop: allows us to loop through propertes of object, enumerating: showing properties of object
// works on objects
const ob = {
    name: 'modi',
    age: 68,
    des: 'pm',
    sun: () => {}
}
for (i2 in ob) {
    console.log(i2)
}