console.log('we are at tut5');
const name = 'arun';
const greeting = 'good morning';
console.log(name + ' ' + greeting);
let html = 'hello gaurav';
ht = html.concat(' GONNA fly');
console.log(ht);
console.log(ht.length);
// console.log(ht.toLowerCase());
// console.log(ht.toUpperCase());
// console.log(ht);
console.log(ht[4]);
console.log(ht.indexOf('el'));
// console.log(ht.lastIndexOf(''));
// console.log(ht.charAt(6));
// console.log(ht.endsWith(''));
// console.log(ht.includes(' z'));
// console.log(ht.substring(1,5));
// console.log(ht.slice(1,3));
// console.log(ht.split(''));
console.log(ht.replace('h', 'ge'));
// template literal
let f1 = 'orange';
let f2 = 'apple';
let myhtml = `this is heading "you like ${f1} and gaurav like ${f2}`;
document.body.innerHTML = myhtml
