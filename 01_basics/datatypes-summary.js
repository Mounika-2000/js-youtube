// JavaScript is a dynamic language and not static , which means that variables can hold values ​​of different types during runtime. Unlike languages ​​such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

// Primitive datatypes (call by value: just copies the value, not reference)
// 7 types: String, Number, Boolean, null, undefined, Symbol(makes something unique), BigInt

const score=100
const scoreValue=100.2
const loggedIn=true
const tempOutside=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log([id, anotherId]);
//console.log(id===anotherId); //even though the value might be same id and anotherId are not equal as Symbol makes them unique

const bigNumber=13986468765737432236n

// Reference (non-primitive), return type => object/ function
//arrays, objects, functions

const heros=["Hulk","Ironman","Spiderman"]; 
let myObj={
    name:"mounika",
    age:20,
}

const myFunction = function(){ // return type => function object
    // console.log("hello world!"); 
}

// console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (non-primitive)

let myYoutubeChannel="Mounika"
let anotherChannel=myYoutubeChannel
anotherChannel="mounika"

// console.log(myYoutubeChannel);
// console.log(anotherChannel);

let user1 = {
    email: "abc@gmail.com",
    upi: "user1@kbl"
}

let user2 = user1
user2.email="bdbhd@gmail.com"
console.log(user1.email);
console.log(user2.email);
