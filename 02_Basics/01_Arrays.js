//Arrays

// how to contruct array / or create
// array elemenmts cannot be accessed using artibitary strings

const myArr  = [9,8,7,6]
const array = ["skatiman", "Hero"]

const arr2 = new Array(1,2,3,4)
//console.log(myArr[0])

//Array methods

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// myArr.unshift(0)
// console.log(myArr)
// [ 9, 8, 7, 6, 6 ]
// [ 9, 8, 7, 6 ]
// [ 8, 7, 6 ]
// [ 0, 8, 7, 6 ]

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr  = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)
// console.log(newArr)

// true
// 0
// [ 9, 8, 7, 6 ]
// string  // join se string me convert hogya
// 9,8,7,6


//slice // splice
//interview question splice and slice me difference bataiye 



console.log("A", myArr);
const myn1 = myArr.slice(1,3)
// jo mene slice lika hai (1 3) mtlb ki new array me me puranne array se sirf index 1 to 3 ki vlaue jaeyngi, not including arr[3]
console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
//dekh splice me vo arr[3] waali value bhi include hpgyi  // yeh mt bolna interviewer fuddu samjhega  
// to know asnwer apna puranra array bhiprint karata hu
console.log("C", myArr);
//pura array hi amnupilate kardia splice ne // so splice aapka poora array me se slice waali values hata deta hai main reason 
console.log(myn2);