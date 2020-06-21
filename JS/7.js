console.log('tut 7');
const age = 58;
const dri = true;
if (age !== 25) {
    console.log('age is incorrect');
}
if (age !== '50') {
    console.log('age is correct');

}
else {
    console.log('age is not ' + age);

}
if (dri && age == 18) {
    console.log('yes');

}
else {
    console.log('no');
}
// ternary operator
console.log(age !== 8 ? 'age is t' : 'age is f');

switch (age) {
    case 18: console.log('age is 18'); break;
    case 28: console.log('age is 28'); break;
    case 38: console.log('age is 38');
        break;

    default: console.log('unknown age');

        break;
}
