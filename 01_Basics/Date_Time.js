// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(tmyypeof myDate) //o/p -> Object


let CustomDate = new Date(2024,5,24) //way to declare date YYYY MM DD 
let myCustomDate = new Date(2024,5,24,4) //way to declare date YYYY MM DD 
let mCustomDate = new Date("2024-08-15") //way to declare date YYYY MM DD 
// console.log(CustomDate.toDateString());
// console.log(myCustomDate.toDateString());
// console.log(mCustomDate.toDateString());
// console.log(mCustomDate.toLocaleString());

// Mon Jun 24 2024
// Mon Jun 24 2024
// Thu Aug 15 2024
// 8/15/2024, 12:00:00 AM

let timeStamp = Date.now()
// console.log(timeStamp)
// // console.log(timeStamp.toLocaleString())
// console.log(myCustomDate.getTime()) // mnore gunction arwe there to (get month+1) Plus 1 to get correct month , get day, get year etc EXPLORE
// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))

// 1722604397533
// 1719201600000
// 1722604397538
// 1722604397
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1)
`${newDate.getDay()} and the time` //using Streing interpolartuion

newDate.toLocaleString('Default',{
    weekday:"long",
})
// yeh exactly same akaam akrega jo hyum ne dekhaa tha ki // console.log(mCustomDate.toLocaleString()); yeh jo krha rha tha 
// bas aur thoda jyada custom foramt and better practicce k l iye use karte hai 

