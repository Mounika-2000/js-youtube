// singleton object (through constructor, single instance)
// Object.create

// object literals
const mySymbol=Symbol("key1") // key1 and mykey1 need not be same since, key1 -> decription/label for readability, mykey1 -> actual value of symbol

const JsUser={
    name:"mounika",
    "full name":"mounikads", 
    [mySymbol]:"mykey1",     // use symbol as key, right syntax, [] important to treat it as a symbol or gets treated as a string
    age:20,
    location:"bengaluru",
    email:"mounika@js.com",
    isLoggedIn:false,
    latLoginDays:["monday","saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); // treats keys as string, only way to access keys with whitespace ex: "full name"
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);  // NO " ", right syntax

JsUser.email="mounika@flipkart.com" // to change values in object
// Object.freeze(JsUser)            // NOT to change values in object
JsUser.email="mounika@phonepe.com"
// console.log(JsUser);
// we shouldn't 'freeze' the object values to use it in a function

JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`); // String Interpolation -> using `` instead of '' or "" , this -> to refer to same object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

