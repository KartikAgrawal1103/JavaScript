//  Primitive (Uses STACK memeory)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language.
// This means that the type of a variable is determined at runtime, 
// not at compile time. You don't need to declare the type of a variable when 
// you create it, and the type can change during the program's execution.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) (Uses HEAP memory)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //arrays

// curly braces k andr object hai
let myObj = {
    name: "hitesh",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello world");
}

// to know data type 
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primituve) , Heap(non - primitive)

let channelName = "AnyYouthubeName"

let anothername = channelName
anothername = "ChangedYtNamed"

console.log(channelName)
console.log(anothername)

let userOne = {
    email: "@gmail.com",
    upi: "@gpay"
}

let userTwo = userOne

userTwo.email = "@yahoo.com"

//dono user k output changes ho chuki haitoh yahoo .com