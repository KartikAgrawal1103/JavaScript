// this keyword currect function ko point karta hai


//BROWSER K ANDR SABSE GLOBAL OBJECT IS : WINDOWS OBJECT  // INTERVIEW QUESTION


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //yeh wla wiith and wo including 
    }

}
//outputs without including : console.log(this);
// user.welcomeMessage() //  hitesh welcome to website 
// user.username = "sam" 
// user.welcomeMessage() // sam welcome to website 

// outputs with including: console.log(this);
// hitesh welcome to Website
// {
//     username: 'hitesh',
//     price:999,
//     welcomeMessage: [Function: welcomeMessage]
// }
// Sam welcome to website 
// {
//     username: 'sam',
//     price:999,
//     welcomeMessage: [Function: welcomeMessage]
// }

// console.log(this); //agr bina andr func k karu toh 
// o/p -> {} -> reffering empty Object




  
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// // chai()
// o/p -> (undefined) yeh this cheeze sirf object k andr hi chalegi and function k andr nhi chal sakti hai 


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// o/p -> (undefined)


// ab dekhte hai using arrow functions // function hata kr parethesis k aage arrow func laga do ARROW FUNC -> (=>)
const chai =  () => {
    let username = "hitesh"
    console.log(this);
} 
// chai()

// o/p -> {} for  console.log(this);
// o/p -> undefined for  console.log(this.username);


// arrow fun syntax : () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Below method is called implicit return  : isme {} parenthesis use nhi karnbe padte // do tarike hai niche 
// acche ek baat aur agar {} yeh wla bracket use kiya haitoh RETURN bhi karana hi padega warna hi chalega 
//OBSERVE AND UNDERSTAND 

// const addTwo = (num1, num2) =>  num1 + num2  //way 1 

// const addTwo = (num1, num2) => ( num1 + num2 ) // way 2

const addTwo = (num1, num2) => ({username: "hitesh"}) // yaha dekh Object return kara hai toh ,
// {} parenthesius ka use hi object return karne k liye hai 

console.log(addTwo(3, 4)) //o/p -> 7


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()