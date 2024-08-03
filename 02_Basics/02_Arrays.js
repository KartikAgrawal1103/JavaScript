const marvel_Hero = ["thor", "Ironman", "Spiderman"]
const dc_hero = ["Superman", "flash", "batman"]

//marvel_Hero.push(dc_hero)

//console.log(marvel_Hero) //[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ] 
//issue dekh ---> Array k andr array aagya jo ki kaafi gadbad kar rha hai 
//console.log(marvel_Hero[3][1]) // 0/p -> Flash // chi ganda syntax bad
// [3][1] kyukia... kyuki vo 3rd index se new array hai DC_Hero wala aur uska dc_hero[1] pr Flash dada hai 

// marvel_Hero.concat(dc_hero)
// console.log(marvel_Hero);
// chi yeh bhi ganda yeh b hi upar jese hi aa rha hai'

// const allHero = marvel_Hero.concat(dc_hero)
// or ypu can use spread method 

// console.log(allHero); //o/p -> [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ] // ab theekba

// const allNewHero  = [...marvel_Hero,...dc_hero] // SYNTAX DEKHLE BABU 
// console.log(allNewHero)
//o/p -> [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ] // ab theekba


//maanlo ek ganda sa array ya mixed array mil gya to USING 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//FLAT me uske subarrays return kar skta hu usme jitne arrays alag se bane hue honge
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// o/p -> 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// Sure! Here’s a simple explanation with real-life examples:

// 1. **`Array.isArray("Hitesh")`**: Imagine you have a box labeled "Hitesh,"
// and you want to check if it's a toy box. Since it's just a label on a box
// (not an actual toy box), `Array.isArray` tells you that it’s not a toy box, so you get `false`.

// 2. **`Array.from("Hitesh")`**: Think of the word "Hitesh" as a line of individual letters. When you use `Array.from`, 
//it’s like taking each letter from the word and putting them into separate boxes. 
//You end up with boxes containing: `['H', 'i', 't', 'e', 's', 'h']`.

// 3.A **`Array.from({name: "hitesh"})`**: Imagine you have a box with a label 
//"name: hitesh" but it's not organized in a way you can easily pull things out of. 
//When you try to convert it into an array, there’s nothing to pull out, so you end up with an empty array, `[]`.

//3.B console.log(Array.from({name: "hitesh"})): Array.from expects an iterable or array-like object.
// Since the object {name: "hitesh"} is neither iterable nor array-like, the result is an empty array [].


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// o/p -> [ 100, 200, 300 ]

//sabko pakd kr ek arrya bana kr return akrdegha 