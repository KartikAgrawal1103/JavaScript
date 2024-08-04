const tinder = new Object()   // yeh bhi oo=obj declare krdia  SINGLETON
const tinderUser = {} //const se object declare kia 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "@gmail.com",
    fullname: {
        UserFullName: {
            firstName:"Hitesh",
            lastName:"Choudary"  //nested karke values daali hai 
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.UserFullName.firstName)
// { UserFullName: { firstName: 'Hitesh', lastName: 'Choudary' } }
// Hitesh


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 } //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign({}, obj1, obj2, obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } //yeh use karoge sabse jyadaa SPREAD yaad aya dada
//console.log(obj3);



//database se dfata ese aate hai  user k dekh niche 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// ab meko access krna the first vlaue, kyufrst vale KYUKI array hi toh hai 
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //keys smjha vo dedega Eemial, id ,useloogedi n 
// console.log(Object.values(tinderUser)); // unke keys pr jo value stored hai vo dedega 
// console.log(Object.entries(tinderUser)); //har eky value ko pair me return karta hai [Key,Value] 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //yeh pta krta hai ki ky vo key hai hai database me ya nhi just to check 


//DESTURDTURING kar he 
// destructuring Array / Object dono ki hoti hai
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // yeh dekh chota r DESTURCTURE kara hai tune
// ab ek cheexze notice karo dekh upr tune courseinstructor liya hai jo ki sachme hi kaafi bada naam hai 
//to uskochota karne k liye tune usko sorf instructor naam dekr DESTRUCTURE kardia ... samjha
// console.log(courseInstructor);
console.log(instructor);

// ### Benefits of Destructuring

// 1. **Simplifies Code**: Extract multiple properties from an object in a single statement.
// 2. **Renaming Variables**: Rename variables to shorter or more convenient names.
// 3. **Default Values**: Set default values if the property doesn't exist in the object.
// 4. **Nested Objects**: Easily destructure nested objects.

// ### Important Points for Interviews

// 1. **Destructuring Syntax**: Understand how to use destructuring to extract values and rename variables.
//    ```javascript
//    const { courseInstructor: instructor } = course;
//    ```

// 2. **Default Values in Destructuring**: Be aware that you can provide default values when destructuring.
//    ```javascript
//    const { duration = "3 hours" } = course;
//    ```

// These points cover the main advantages and key aspects of destructuring that can be useful in coding and may come up in interviews.





// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]