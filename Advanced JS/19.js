// higher order function
const ique = (name) => {
    if (name === 'modi') {
        return (topic) => {
            console.log(`hii ${name}. what is ${topic}, explain ?`)
        }
    }
    if (name === 'shah') {
        return (topic) => {
            console.log(`hii ${name}. what is ${topic}, explain ?`)
        }
    }
    if (name === 'raj') {
        return (topic) => {
            console.log(`hii ${name}. what is ${topic}, explain ?`)
        }
    } else {
        return () => {
            'welcome'
        }
    }
}

ique('modi')('ui')
ique('shah')('front')
ique('raj')('back')