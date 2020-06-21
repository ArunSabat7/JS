// promises has 3 stages
// pending,resolve,reject
// executor
// promise produce
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rno = [1, 2, 3, 4, 5]
        resolve(rno)
        reject('error while comm.')
    }, 2000)
})
const bdata = (index) => {
    return new Promise((resolve, reject) => {
        setTimeout((index) => {
            let bidata = {
                name: 'modi',
                age: 56
            }
            resolve(`my roll no is ${index} name is ${bidata.name} and age is ${bidata.age}`)
        }, 2000, index)
    })
}
// promise consume
p1.then((rno) => {
    console.log(rno)
    return bdata(rno[1])
}).then((kuch) => {
    console.log(kuch)
}).catch((error) => {
    console.log(error)
})
// async/await
async function data() {
    try {
        const rol = await p1
        console.log(rol)
        const badata = await bdata(rol[1])
        console.log(baadata)
        return badata
    } catch (error) {
        console.log(`the error: ${error}`)
    }
}
let gdata = data().then((n1) => {
    console.log(n1)
})