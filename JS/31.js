console.log('welcome to tut31');

let st = document.getElementById('st')
let mybtn = document.getElementById('mybtn')


function getdata() {
    console.log('started getdata');
    url = 'modi.txt'
    fetch(url).then((response) => {
        console.log('inside first then');
        return response.text()
    }).then((data) => {
        console.log('inside second then');
        console.log(data);
    })

}
getdata()