console.log('welcome to tut32');

async function func1() {
    console.log('inside func1 function');

    return 'func2'
}
console.log('before calling');


let a = func1()

console.log('after calling');
console.log(a);
console.log('last line');

