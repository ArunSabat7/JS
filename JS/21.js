console.log('welcome to tut21');
let ob = {
    name: 'modi',
    age: 68
}
console.log(typeof ob);

let car = {
    name: 'honda', speed: 80, type: 'bike', run: function () {
        console.log('car is running');

    }
}
// we have already seen constructors like below
let d = new Date(); 
console.log(d);


// creating a constructors for car
function gcar(gname, gspeed) {
    this.name = gname;
    this.topspeed = gspeed;
    this.run = function () {
        console.log(`${this.name} is running`);

    }
    this.analyze = function () {
        console.log(`this car is slower by ${200 - this.topspeed}kms than fer`);

    }

}
car1 = new gcar('fer', 180)
console.log(car1);

car2 = new gcar('mer', 130)
console.log(car2);

car3 = new gcar('ben', 230)
console.log(car3);


// 
console.log(car2.analyze);


