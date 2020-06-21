console.log('its tut 8');

// general loops: for,while,do while
// for(let i=0;i<=100;i++)
// {console.log(i);
// }

// let j = 0
// while (j < 100) {
//     // j++;
//     console.log(j);
//     j++;
// }
// let k = 15;
// do {

//     console.log(k);
//     if (k > 16) { break; }
//     k++;
// }
// while (k <= 20)
// console.log('done');
let arr = [1, 2, 3, 4, 5, 6]
arr.forEach(function (element, index, array) {
    console.log(element, index, array);

})
let obj = {
    name: 'arun',
    age: 25,
    gender: 'male'
}
for (let k in obj) {


    console.log(`the ${k} of object is ${obj[k]}`);

}