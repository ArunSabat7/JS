// scope chain
var a = 'hello '

function first() {
    var b = 'how are you '
    second()

    function second() {
        var c = 'modi'
        console.log(a + b + c)
        third()
    }
}

function third() {
    var d = 'and shah'
    console.log(a + b + c + d)
}
first()