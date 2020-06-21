console.log('welcome in ajax tut');

let f = document.getElementById('fe')
f.addEventListener('click', bclick)

function d(_bclick) {
    console.log('its clicked');

    // instantiate xhr object

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'modi.txt', true)
    xhr.onprogress = function () {

        console.log('on progress');

    }
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);

        }

        else {
            console.log('error occured');

        }

    }
    xhr.send()
}


