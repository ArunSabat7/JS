console.log('this is tut16');
// let b=document.getElementById('btn')
// b.addEventListener(
//     // 'click',func1
// )
b = document.getElementById('btn')
b.addEventListener(
    'dblclick', func2
)

function func2() {
    console.log('thanks double');

}


// document.querySelector('.no').addEventListener(
// 'mouseenter',function()  {
//     console.log('enter');

// }  
// )
document.querySelector('.no').addEventListener(
    'mousemove', function (e) {
        console.log('exit', e.offsetX);
        document.body.style.backgroundColor = 'yellow';
    }
)
// document.querySelector('.cont').addEventListener(
// 'mousemove',function()  {
//     console.log('move');

// }  
// )
console.log(document.links);

