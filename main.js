"use stict"
class Worker{
    #name
    #surname
    #rate
    #days
    constructor(name,surname,rate, days ){
        this.#name=name;
        this.#surname=surname;
        this.#rate=rate;
        this.#days=days;
    }
    get getName(){
        return this.#name
    }
    get getSurname(){
        return this.#surname
    }
    get getRate(){
        return this.#rate
    }
    get getDays(){
        return this.#days
    }
    set setRate(value){
         this.#rate=value
    }
    set setDays(value){
         this.#days=value
    }
    getSalary(){
        return this.#rate*this.#days;
    }
}
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate=20; //увеличим ставку
worker.setDays=10; //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
console.log("Задание № 2");
class MyString{
    reverse(str){
       return str.split("").reverse().join("")
    }
    ucFirst(str){
       let y= str.split("")[0].toUpperCase()
       let newStr=str.split("")
       newStr[0]=y

        return newStr.join("")
    }
    ucWords(str){
        let z=[];
        let newStr;
        let x= str.split(" ")
        for(let i=0;i<x.length;i++){
            let y= x[i].split("")[0].toUpperCase()
            let newStr=x[i].split("")
            newStr[0]=y
            z.push(newStr.join(""))
        }
       

        return z
    }
}
var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); 
console.log("zadanie 3");
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed
  };

console.log(bed.glasses);
class Animal{
    constructor(value){
        this.eyes=2
        this.legs=4
        this.animal=value
    }
    showLeg(){
        return this.legs
    }
}
const Tiger=new Animal("tiger");
console.log(Tiger.showLeg());
console.log(Tiger);
class Cat extends Animal{
    constructor(ui,value){
        super(value)
        this.legs=ui
    }
    xvost=0
    sayMyau(){
        console.log("miau miau");
    }
    get Showl(){
       return console.log(this.legs);
    }
    get x(){
        return  console.log(this.xvost);
    }
    set tx(bb){
       return  this.xvost=bb
      
    }
}
const cat = new Cat(5,"cat");
console.log(cat.showLeg());
cat.sayMyau()
cat.Showl;
cat.x
cat.tx=1
cat.x
cat.eyes=4;
cat.x
cat.xvost=1
console.log(cat);
class User{
    constructor(value){
        this._name=value.name;
        this.age=24;
        this.status=value.status
    }
    _fithc=true
    sayHi(){
        console.log("hi",this.name);
    }
    get name(){
        return this._name
    }
    set name(value){
        return this._name=value
    }
}
const newUser=new User({name:"jenya",status:"admin"})
newUser.sayHi();
console.log(newUser);
console.log(newUser.name="vasili");
console.log(newUser.name);
console.log(newUser);
class gost extends User{
    constructor(value){
        super(value)
        this.veri=value.veri
    }

}
const nn=new gost({name,status:"gost",veri:true});
console.log(nn);
console.log(nn.name="petia");
console.log(nn.name
    );
