console.log('welocme to tut29');

function funct1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true
            if (error) {
                console.log('promise resolved');
                resolve()
            }

            else {
                console.log('promise rejected');

                reject()
            }
        }, 2000);
    }
    )
}
funct1().then(function () {
    console.log('thanks for resolving');
}).catch(function () {
    console.log('not resolved');

})
