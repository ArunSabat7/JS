// function is a first class citizen

const thank = () => {
    console.log('thank you pm')
}
thank()

const yu = {
    name: 'modi',
    age: 57,
    qua: () => {
        console.log('pm do the well job')
    }
}
yu.qua()

// passing function as an arguement
const name = () => {
    return 'hello '
}
const greet = (a, b) => {
    console.log(a() + b)
}
greet(name, 'modi')

// returning functions
const fun = () => {
    return function b() {
        console.log('thanks for support')
    }
}
// fun()()

const c = fun()
c()