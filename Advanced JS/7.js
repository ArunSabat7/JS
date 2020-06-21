// class,object,inheritance

class dname{
constructor(cname,cage,cdiv){
this.name=cname;
this.age=cage
this.div=cdiv
}
bdata(){
console.log(`name is ${this.name} age is ${this.age} div is ${this.div} game is ${this.game}`)
}
}
class player extends dname{
constructor(cname,cage,cdiv,cgame){
super(cname,cage,cdiv)
this.game=cgame
}
}
let ob1=new player('raj',56,2,'tennis')
ob1.bdata();
let ob2=new player('ajay',35,6,'baseball')
ob2.bdata()