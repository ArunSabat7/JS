// closures
const ofun = (a) => {
    let b = 10
    const ifun = () => {
        let sum = a + b
        console.log(sum)
    }
    ifun()
}
ofun(10)

// eg of closures

const ique = (name) => {
    return (topic) => {
        if (name === 'modi') {
            console.log(`hi ${name}. what is ${topic}. explain?`)
        } else if (name === 'shah') {
            console.log(`hi ${name}. what is ${topic}. explain?`)
        } else if (name === 'raj') {
            console.log(`hi ${name}. what is ${topic}. explain?`)
        } else {
            console.log('welcome')
        }
    }
}
ique('modi')('react')
ique('shah')('go')