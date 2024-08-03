// objects ko declare karne k l teen tarike 
// literal  / constructor and anotehr concept SINGLETON -> const se humesha singelton banta hai but literal se nahi

//object literals 
Object.create //const method

//lo bangya object

const mySyn = Symbol("key1") 
const mySyn2 = Symbol("key2")
// symbol declared 
//Que-> Symbol ko as a key use karna hai toh kese karenge interview me puch lete hai 
// ek symbol lo usko object ki keys me add karo and print karake dikha do 
const Juser = {
    name:"Hitesh",
    "full name" : "Hirsh Choudhary",
    mySyn : "Key1Value",  //kar toh diya but datatyoe as a symbol nhi hai string hai dekho 
    // ab dekh as a symbol kese declare kareneg and SYNTAX dekh
    [mySyn2] : "Key2Value",
    age: 18,
    location : "jaipur",
    email: "@google.com",
    isLoggedIn: false,
    LastLoginDays: ["monday","Saturday"]
    // jo man chahe vo paas karo onject bhi aur kuch bhi
    //upr name jo hai na vo node js as a String hi lega 
}

console.log(Juser.email)//ese bhi kar skte ho pprint 
console.log(Juser["email"]) //better way aur bhi values add kr skte ho f for output
//ab me . (dot) waale method se full name kuch bhi karu nhi access kr skta seocnd wala tarike se hi hoga access
console.log(Juser["full name"])
console.log(Juser.mySyn)
console.log(typeof Juser.mySyn)
console.log(Juser[mySyn2]) //dekh yaha bhi change hai hai while printing //IMP 
console.log(typeof Juser[mySyn2]) // dekh yuaha bhi change h
// o/p -> 
// @google.com
// @google.com
// Hirsh Choudhary
// Key1Value
// string
// Key2Value
// string

// Juser.email = "Kartik@gmail.com"
// //Object.freeze(Juser)
// Juser.email = "Agrawal@gmail.com"
// console.log(Juser)

// o/p -> + dekh freeze krne se kuch bhi aasing karo jo pehle kardi value wahi rehti h 
// {
//     name: 'Hitesh',
//     'full name': 'Hirsh Choudhary',
//     mySyn: 'Key1Value',
//     age: 18,
//     location: 'jaipur',
//     email: 'Kartik@gmail.com',
//     isLoggedIn: false,
//     LastLoginDays: [ 'monday', 'Saturday' ],
//     [Symbol(key2)]: 'Key2Value'
//   }


Juser.greeting = function(){
    console.log("Hello JS user");
}
Juser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Juser.greeting());
console.log(Juser.greetingTwo());