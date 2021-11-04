"use stict";
class Worker {
  #name;
  #surname;
  #rate;
  #days;
  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }
  get getName() {
    return this.#name;
  }
  get getSurname() {
    return this.#surname;
  }
  get getRate() {
    return this.#rate;
  }
  get getDays() {
    return this.#days;
  }
  set setRate(value) {
    this.#rate = value;
  }
  set setDays(value) {
    this.#days = value;
  }
  getSalary() {
    return this.#rate * this.#days;
  }
}
var worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate = 20; //увеличим ставку
worker.setDays = 10; //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
console.log("Задание № 2");
class MyString {
  reverse(str) {
    return str.split("").reverse().join("");
  }
  ucFirst(str) {
    let y = str.split("")[0].toUpperCase();
    let newStr = str.split("");
    newStr[0] = y;

    return newStr.join("");
  }
  ucWords(str) {
    let z = [];
    let newStr;
    let x = str.split(" ");
    for (let i = 0; i < x.length; i++) {
      let y = x[i].split("")[0].toUpperCase();
      let newStr = x[i].split("");
      newStr[0] = y;
      z.push(newStr.join(""));
    }

    return z;
  }
}
var str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde"));
console.log("zadanie 3");
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(bed.glasses);
class Animal {
  constructor(value) {
    this.eyes = 2;
    this.legs = 4;
    this.animal = value;
  }
  showLeg() {
    return this.legs;
  }
}
const Tiger = new Animal("tiger");
console.log(Tiger.showLeg());
console.log(Tiger);
class Cat extends Animal {
  constructor(ui, value) {
    super(value);
    this.legs = ui;
  }
  xvost = 0;
  sayMyau() {
    console.log("miau miau");
  }
  get Showl() {
    return console.log(this.legs);
  }
  get x() {
    return console.log(this.xvost);
  }
  set tx(bb) {
    return (this.xvost = bb);
  }
}
const cat = new Cat(5, "cat");
console.log(cat.showLeg());
cat.sayMyau();
cat.Showl;
cat.x;
cat.tx = 1;
cat.x;
cat.eyes = 4;
cat.x;
cat.xvost = 1;
console.log(cat);
class User {
  constructor(value) {
    this._name = value.name;
    this.age = 24;
    this.status = value.status;
  }

  _fithc = true;
  sayHi() {
    console.log("hi", this.name);
  }
  get name() {
    return this._name;
  }
  set name(value) {
    return (this._name = value);
  }
}
const newUser = new User({ name: "jenya", status: "admin" });
newUser.sayHi();
console.log(newUser);
console.log((newUser.name = "vasili"));
console.log(newUser.name);
console.log(newUser);
class gost extends User {
  constructor(value) {
    super(value);
    this.veri = value.veri;
  }
}
const nn = new gost({ name, status: "gost", veri: true });
console.log(nn);
console.log((nn.name = "petia"));
console.log(nn.name);

function LIL() {
  /* var self=this */
  this.name = "lklj";
}
LIL.prototype.sayHi = function () {
  console.log("hi " + this.name);
};
function Li() {
  LIL.call(this);
}
Li.prototype = Object.create(LIL.prototype);
Li.prototype.constructor = Li;
let newli = new Li("ll");

console.log(newli.sayHi());

// запросы

const requestUrl = "http://fe.it-academy.by/Examples/test.html";

const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.send();
xhr.onreadystatechange = function () {
  console.log(this.response);
};
xhr.onerror = function () {
  console.log("os");
};

//PROMIS

/* console.log(`request data...`);
    setTimeout(()=>{
        console.log("prepering data..");
        const backData={
            serv:"avs",
            port:2000,
            status:"working"

        }  
         setTimeout(()=>{
        console.log("data recived..");
         backData.mod=true;
         console.log(`reserv data..`,backData);
         
    },2000)

    },2000)
  */

const promis = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("prepering data..");
    const backData = {
      serv: "avs",
      port: 2000,
      status: "working",
    };
    resolve(backData);
    reject("ERROR");
  }, 2000);
});
promis
  .then((data) => {
    console.log("promis end");
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.modifi = true;
        resolve(data);
      }, 2000);
    });
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("завершен");
  });

//codwars!!!

function createPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ") ");
  numbers.splice(8, 0, "-");

  return numbers.join("");
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 5, 7, 8, 9, 0]));

//next kata

function descendingOrder(n) {
  //...
  let m = n + "";
  m.split("");
  function cc(a, b) {
    return b - a;
  }
  console.log(m.split("").sort(cc).join(""));
}
descendingOrder(15548);

//next kata
function squareDigits(num) {
  let n = num + "";
  let s = n.split("");
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let d = Math.pow(parseInt(s[i]), 2);
    res = res + d;
  }

  return console.log(res);
}
squareDigits(123);

//next kata

function openOrSenior(data) {
  // ...
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 55 && data[i][1] > 7) {
      res.push("Senior");
    } else {
      res.push("Open");
    }
  }
  return console.log(res);
  res;
}
openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

//next kata

function solution(number) {
  if (number > 0) {
    let res = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        res += i;
      }
    }
    return res;
  } else {
    return 0;
  }
}
console.log(solution(10));

//next kata
//count(['james', 'james', 'john'])
function count(array) {
  //your code here
  let obj = {};
  let i = 0;
  for (key of array) {
    if (key in obj) {
      obj[key] += 1;
      continue;
    } else {
      obj[key] = 1;
    }
  }
  return obj;
}
count(["james", "james", "john"]);

//next kata

function disemvowel(str) {
  let arr = ["e", "y", "u", "i", "o", "a", "O", "E", "Y", "U", "I", "A"];
  return str
    .split("")
    .map((item) => {
      let t = true;
      TTT: for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
          t = false;
        }
        if (t && i == arr.length - 1) {
          return item;
        }
      }
    })
    .join("");
}
console.log(disemvowel("This website is for losers LOL!"));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
console.log(disemvowel("What are you, a communist?"));

//asdf
let numbers = [2, 3, 5, 7, 11, 13, 17];
function currentSums(numbers) {
  let rez = [];
  numbers.reduce((summ, item) => {
    let s = summ + item;
    console.log(s);
    rez.push(s);
    return s;
  }, 0);
  return rez;
}
console.log(currentSums(numbers));
let summ = 0;
let znach = 0;
for (let i = 10; i <= 190; i++) {
  if (i % 10 == 0) {
    summ += i;
    znach++;
  }
}
console.log(summ / znach);

function sortWords(n) {
  let arr = ["ё", "у", "е", "ы", "а", "о", "э", "я", "и", "ю"];
  let t = [];
  let rez=[];
  let arrWords = n.split(" ");
  console.log(arrWords);
   let a= arrWords.forEach((element, index, arra) => {
    let g = 0;
    element.split("").forEach((item, ind, array) => {
      for (let i = 0; i < arr.length; i++) {
        if (item == arr[i]) {
          ++g;
          console.log(item);
          console.log(g);
        }
        t[index] = { g: g, index: index };
        console.log(t);
      }
    });

    t.sort((a, b) => {
      if (a.g > b.g) {
        return -1;
      }
    });
    console.log(t);
   
  });
  for(let j=0;j<t.length;j++){// здесь остановился, надо распределить по порядку возможно новый фор
    rez[t[j].index]=arrWords[0]
}
console.log(rez);
}
console.log(sortWords("Шел дожди, мне грустно"));
