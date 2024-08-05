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