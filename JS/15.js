console.log('welcome to tut15');
document.getElementById('imy').addEventListener(
    'mouseover', function (e) {
        console.log('clicked');
        // console.log(Array.from(e.target.classList);
        let ve = e.target;
        ve = e.target.id;
        ve = Array.from(e.target.classList)
        ve = e.offsetY
        console.log(ve);

    }

)