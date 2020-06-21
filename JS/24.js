console.log('welcome to tut24');

class emp {
    constructor(cname, cexp, cdiv) {
        this.name = cname
        this.exp = cexp
        this.div = cdiv
    }
    slogan() {
        return `i am ${this.name} and company is good`
    }
    joiningyear() {
        return `have exp of ${this.exp}`
    }
    static add(a, b) {
        return a + b;
    }

}

modi = new emp('shah', 5, 'maths')
console.log(emp.add(7, 2));
console.log(modi.joiningyear());

class pro extends emp {

    constructor(cname, cexp, cdiv, clang, cgithub) {
        super(cname, cexp, cdiv);
        this.lang = clang;
        this.github = cgithub;
    }
    favlang() {
        if (this.lang == 'python') {
            return 'python'
        }
        else {
            return 'js'
        }
    }
    static mul(a, b) {
        return a * b;
    }
}

raj = new pro('ajay', 3, 'science', 'python', 'ajay30')
console.log(pro.mul(2, 6));
console.log(raj.favlang());

