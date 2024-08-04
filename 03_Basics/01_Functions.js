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

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);