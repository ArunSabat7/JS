console.log('welcome to tut28a');

// pretend that response coming from server
const stu = [
    { name: 'modi', sub: 'java' },
    { name: 'shah', sub: 'go' }]

function enrstu(stud) {
    setTimeout(function () {
        stu.push(stud);
        console.log('students enrolled');

    }, 1000);

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

enrstu(stu1)
getstu()