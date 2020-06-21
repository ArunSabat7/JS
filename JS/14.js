console.log('welcome to tut14');

let ele = document.createElement('li');
let text = document.createTextNode('its a text node');
ele.appendChild(text);
ele.className = 'childul';
ele.id = 'ch1';
ele.setAttribute('name', 'myname');
// ele.innerText='created by modi';
// ele.innerHTML='<b> created by modi </b>';
console.log(ele);
let ul = document.querySelector('.this')
ul.appendChild(ele)

console.log(ul);

let ele1 = document.createElement('h3');
ele1.id = 'ele1';
ele1.className = 'ele1';
ele1.appendChild(document.createTextNode('its a text node2'));

// replace ele with ele1
ele.replaceWith(ele1);

// replace child

let child = document.getElementById('ch0');
child.replaceChild(ele1, document.getElementById('ch1'));
child.removeChild(document.getElementById('ch2'))

let pr = ele1.removeAttribute('id')
console.log(pr);
