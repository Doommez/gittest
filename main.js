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
