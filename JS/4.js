// type conversion and type coercion

console.log('welcome to js tut');
let no;
no = String(30);
console.log(no, typeof no);
let bool;
bool = String(true);
console.log(bool, typeof bool);
let date = String(new Date());
console.log(date, typeof date);

let arr = String([1, 2, 3, 34]);
console.log(arr.length, typeof arr);

let i = 7;
console.log(i.toString());
let str = Number('32745');
// str = Number('3274sdc5');
// str = Number(false);
// str = Number([1, 2, 3, 4, 5, 6]);


console.log(str, typeof str);
let no1 = parseFloat('78548.87546');
console.log(no1.toFixed(2), typeof no1);

// type coercion
let st=Number( '28364');
let nu=8724;
console.log(st+nu);





