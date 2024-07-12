console.log("Hello")
const accountId = 144 // Strict values i.e. Values cannot be changed futhure anywhere
let accountEmail = "@gmail.com" // Best way and Changeable i.e. Value can be update later
var accountName = "Kartik" // Not used nowadays due to functional scope issue
accountCity = "jaipur" // Not preferred
let accountState; // o/p -> Undefined

console.log(accountId) // way 1 for Output 

// Tabular way for output
console.table([accountId, accountEmail, accountName,accountCity,accountState]) 