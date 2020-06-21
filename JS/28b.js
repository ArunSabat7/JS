console.log('welcome to tut28b');

// pretend that response coming from server
const stu = [
    { name: 'modi', sub: 'java' },
    { name: 'shah', sub: 'go' }]

function enrstu(stud) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            stu.push(stud);
            console.log('students enrolled');
            const error = false
            if (!error) {
                console.log('resolved');
                resolve()
            }
            else {
                console.log('rejected');
                reject()
            }
        }, 1000);

    })

}

function getstu() {
    setTimeout(function () {
        let str = ''
        stu.forEach(function (student) {
            str += `<li>${student.name} </li>`
        })
        document.getElementById('st').innerHTML = str;
        console.log('students fetched');

    }, 3000);
}

let stu1 = { name: 'raj', sub: 'python' }

enrstu(stu1).then(getstu) .catch(function () {
    console.log('bad');

})
// getstu()
// function inside then is run as resolve
// function inside catch is run as reject