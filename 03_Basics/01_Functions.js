function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// belwo metioned numbers 1 and numbers 2 are called paraemeters for the fucntion you have called 
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


//JS do not check wether you have passed both the values as numbers in the parameters, for the we will check later for the logic check 
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    
    return number1 + number2
}

// and here the 3 and 5 you  have passed are called arguments //REMEMBER
const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) o/p -> Hitesh just logged in 
// console.log(loginUserMessage()) o/p -> Please enter a username

// yeh ... wala operator ko hi SPREAD and rest operator bola jata hai bs use case pr depend karta hai ka bkya use hai wesa bolege
//yaha rest h abhi ->  ...num1
function calculateCartPrice(val1, val2, ...num1){
    return num1 //o/p -> [500,2000] but esa kyu? kuki aapne val 1 and val 2 bhi paas kiya hai so value 200 and 400 is passed in v1 and v2 
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}
// ab object bana liya and usko func me kese paas nad use kiya jata hai 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// //
// In the given code, anyobject is a parameter in the handleObject function that represents the object passed to the function.

// Use of anyobject
// Parameter: anyobject acts as a placeholder for the object passed into the function.
// Dynamic Access: Allows you to dynamically access and manipulate the properties of any object passed to the function.
// Flexibility: Makes the function flexible, enabling it to work with different objects as long as they have the expected properties.


// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
// ese bhi pass kar skte hosame vlaue aayegi  

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //o/p -> 400