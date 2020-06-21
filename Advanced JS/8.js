// // sync vs async
// const func2=()=>{
// setTimeout(() => {
// console.log('func2 is starting')
// }, 3000)
// }
// const func1=()=>{
// console.log('func1 is starting')
// func2()
// console.log('func1 is ending')
// }
// func1()
// event loop
// callback hell
const fu1 = () => {
    setTimeout(() => {
        console.log('get roll no')
        let roll = [1, 2, 3, 4, 5]
        console.log(roll)
        setTimeout(() => {
            let bdara = {
                name: 'modi',
                age: 56
            }
            setTimeout(() => {

            }, 2000)
        }, 2000, roll[1])
    }, 2000)
}
fu1()