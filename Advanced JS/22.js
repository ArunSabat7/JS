// call() method: pass arguements seperately
const yu = {
    name: 'modi',
    age: 56,
    des: 'pm',
    fea: function (rating, sus) {
        console.log(`good mgmnt.${this.name}.be a good ${this.des}.please submit ${rating} plz sub ${sus}`)
    }
}
yu.fea(5, 'france')
const yu1 = {
    name: 'shah',
    age: 67,
    des: 'hm'
}
yu.fea.call(yu1, 11, 'spain')

// apply() method: pass arguements as an array
yu.fea.apply(yu1, [12, 'uk'])

// methodName.call(context, arguments)
// methodName.apply(context, [arguments])

let max = Math.max(1, 2, 3, 10)
console.log(max)
let max1 = Math.max.apply('', [3, 4, 5, 2, 7, 18, 9])
console.log(max1)

// bind() method
const yu2 = {
    name: 'modi',
    des: 'pm',
    fea1: function () {
        console.log(`try to be a good ${this.des}, ${this.name}`)
    }
}
// yu2.fea1()

// let yufun=yu2.fea1
// yufun()

let yufun1 = yu2.fea1.bind(yu2)
yufun1()

const yu3 = {
    name: 'modi1',
    des: 'pm'
}
const yu4 = {
    name: 'modi2',
    des: 'pm'
}
const yu5 = {
    name: 'modi3',
    des: 'pm'
}

function f1(rat) {
    console.log(`try to be a good ${this.des}, ${this.name} provide good ${rat}`)
}
let y1 = f1.bind(yu3);
y1(2)
let y2 = f1.bind(yu4);
y2(3)
let y3 = f1.bind(yu5);
y3(6)