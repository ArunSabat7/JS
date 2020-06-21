console.log('lets talk about arrays');
let marks = [37, 67, 80, 92, 20];
const fruits = ['orange', 'apple', 'banana'];
const mixed = ['arun', 22, 53, ['modi', 'shah']];

const arr = new Array(10, 40, 29, 'wdkjcbd');
// console.log(arr);
// console.log(mixed);
// console.log(fruits);
// // console.log(marks[3]);
// console.log(arr.length);
// console.log(Array.isArray('skjcb'));
// arr[1] = 50;
// console.log(arr);
// arr[3]='ksjgxckjbsxw'
console.log(marks);
let value =marks.indexOf(67);
console.log(value);

// mutating or modifying arrays
marks.push(40);
marks.unshift(50);
marks.pop()
marks.shift()
marks.splice(1,3);
marks.reverse()
let m2=[2,4,5,6];
marks=marks.concat(m2);
console.log(marks);

let obj1={
    name:'arun',channel:'codewitharun',status:true,marks:[30,23,56,78,12]

}
console.log(obj1);
console.log(obj1.status);
console.log(obj1.marks);


