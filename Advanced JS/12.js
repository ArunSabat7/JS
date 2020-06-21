// use strict
// 'use strict'
// function sum (a,a) {
// var add=a+10
// console.log(add)
// }
// sum(10,10)

// this keyword

// 'use strict'
// console.log(this)
function sum() {
    var add = 2 + 3
    console.log(add)
    console.log(this)
}
sum()
const ob = {
    name: 'modi',
    age: 59,
    sum: function () {
        var ad = 3 + 9
        console.log(ad)
        console.log(this)
        console.log(this.name)

        function child() {
            var name = 'raj'
            console.log(name)
            console.log(this)
        }
        child()
    }
}
ob.sum()