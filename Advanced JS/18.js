// // callback functions

// const f1=()=>{
// setTimeout(() => {
//   console.log('welcome f1')

// }, 2000)
// }
// const f2=()=>{
//     console.log('welcome f2')
// }
// f1();
// f2()

const p1 = (fr1, cb) => {
    console.log(`hello want to meet to ${fr1}`)
    cb()
}
const p2 = () => {
    console.log('done meeting bro')
}
p1('modi', p2)

// anonymous function
document.addEventListener('click', () => {
    console.log('thank you')
});

let sum = (a, b) => {
    let add = a + b
    console.log(add)
}
sum(10, 20)