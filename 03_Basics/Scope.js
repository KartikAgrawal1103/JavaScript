//var c = 300
let a = 300  //yeh a global scope ka hai to print 300 hoga 
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  //a block scope mehai abhi toh ye wala 10 print hoga
    
}



// console.log(a);  300
// console.log(b);  20
// console.log(c);  300


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //access nhi kr payega func one, website o kuki chota bade se le skta hai but bada chote se nahi

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}