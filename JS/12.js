console.log('this is tut12');

/* element selectors
single element selector
multi element selector
*/
// single element
let ele=document.getElementById('a1');
// ele=ele.className;
ele=ele.childNodes;
// ele.style.backgroundColor='purple'
ele.innerText='go to google';
ele.innerHTML='<br> go to google';

console.log(ele.innerHTML);

let sel=document.querySelector('.cont');
sel.style.color='red' 
console.log(sel);

let elec=document.getElementsByClassName('cont')
elec=document.getElementsByTagName('div')
console.log(elec);

Array.from(elec).forEach(element => {
    console.log(element);
 element.style.color='green'   
});
    

