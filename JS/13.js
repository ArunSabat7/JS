console.log('welcome to tut13');
let cont = document.querySelector('.no')
cont = document.querySelector('.cont')
console.log(cont);

console.log(cont.childNodes);
console.log(cont.children);
// let nodename=cont.childNodes[1].nodeName
let nodetype = cont.childNodes[1].nodeType
// console.log(nodename);
console.log(nodetype);
console.log(cont.children);
console.log(cont.childNodes);
console.log(cont.lastElementChild);
console.log(cont.childElementCount);

console.log(cont.firstElementChild.parentNode);
console.log(cont.firstElementChild.nextElementSibling);
console.log(cont.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);

