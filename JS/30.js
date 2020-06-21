console.log('this is tut29');

// arrow function
// creating a regular function
const shah = function () {
    console.log('best person');

}
shah();
// converting it to arrow function
const shah1 = () => {
    console.log('best person1');

}
shah1();

// function returning something

const greet = function () {
    return 'good morning'
}
console.log(greet());

// one liner do not require braces/return
// one line will automatically return
const greet1 = () => 'good evening'
console.log(greet1());

// single parameter do not need paranthesis
// but if there are multiple parameters then you have to give paranthesis
const greet2 = (name, end) => 'good night ' + name + end
console.log(greet2('modi ', 'bye'));

