console.log('welcome to tut18');
// add a key value inside localstorage
localStorage.setItem('name', 'modi')
localStorage.setItem('name1', 'shah')

let arr = ['app', 'ora', 'ban']
localStorage.setItem('fru', JSON.stringify(arr))

// clear entire localstorage
// localStorage.clear();e
localStorage.removeItem('name');
// retrieve item from localstorage
let name = localStorage.getItem('name1')
name = JSON.parse(localStorage.getItem('fru'))
console.log(typeof name);


console.log(name);

sessionStorage.setItem('name', 'smodi')
sessionStorage.setItem('name1', 'sshah')
sessionStorage.clear();
