// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // isme semicolon lagan jarori hota hai warna iffe rukega hi nhi whikle excecuting 

// jo func immeditaely execute hojaaye,
// gobal scope k pollution se issue create ho hai uske pollution or global scope issue hatanek liye iffe ka use karte hai hum \


( (name) => {
    //simple iffe no named 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// do idffe ek saath likh diye  // dhyan de" " (); " do iffe ek sath likhne k liye yeh jaroroi h 
// iffe with funct likh diye /
// yeh sab interview questions hai dhyaan dena 

//IFFE USAGE: 
// Real-Life Example
// Imagine you want to create a small application that tracks the number of times a 
// button is clicked, but you don't want to expose the counter variable to the global scope.

// An Immediately Invoked Function Expression (IIFE) is a function that is executed right after it
// is defined. This is useful for creating a new scope and avoiding polluting the global namespace. 
//  Here's a short and simple explanation along with a real-life example:

// Definition
// An IIFE is a function that is declared and immediately called. The syntax 
// involves wrapping the function in parentheses and then invoking it right away:
