// window => browser's global object
const user={
    username:"mounika",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);     // this => refers to current context
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this); // refers to an empty object {}

// function chai(){         // this keyword doeesnt work the same in function as in object
//     let username="mounika"
//     console.log(this.username);    // gives undefined
// }
// chai()

// const chai=function(){
//     let username="mounika"
//     console.log(this.username);
// }
// chai()

// const chai=() => {         // ARROW Function
//     let username="mounika"
//     console.log(this);
// }
// chai()

// const addTwo= (num1,num2) => {
//     return num1+num2
// }

// const addTwo= (num1,num2) => num1+num2      // implicit return (since it is 1 line no need of {} and return keyword)
// const addTwo= (num1,num2) => (num1+num2)       // if {} are written then return keyword is must
const addTwo= (num1,num2) => ({username:"mounika"})   // when using implicit return in arrow function, wrap the component to return in ()
// console.log(addTwo(3,4));


// Arrow function : 1) unlike normal functions, arrow functions do not have arguments object/variables
// const print = () => {
//     console.log(arguments)
//   }
// print("hello", 400, false)

// we can use 'rest parameters' instead.

// const findMaxNumber=(...numbers)=>{
//   console.log(numbers) //[10,2,44,37]
// }
// findMaxNumber(10,2,44,37)

// 2) Arrow functions do not create their own this binding, In normal functions, a this variable is created which references the objects that call them.
// const chai=() => {         
//     let username="mounika"
//     console.log(this);
// }
// chai()

// 3) cant call arrow function before intializing the function (Hosting cant be done)
// 4) duplicate parameters are not allowed
// non-strict mode
// function add(a,a,a){
//     console.log(a)   //3
//   }
//   add(1,2,3);
  
//   // strict mode
//   function add(a,a,a){
//     console.log(a)
//     // Uncaught SyntaxError: Duplicate parameter name not allowed in this context
//   }
//   add(1,2,3);
// 5) Arrow function can’t be used as a Constructor : The arrow function cannot be invoked with the new keyword, because arrow functions don’t have a constructor.
// Normal function
// class Animal {
//     constructor(name, color){
//     this.name=name
//     this.color=color
//     }
//     nameOfAnimal(){
//     console.log(`my name is ${this.name}`)
//     }
//   }
//   const Dog = new Animal("moti", "black")   // constructor
//   const Bird = new Animal("LoveBird", "skyBlue")   // constructor
//   Dog.nameOfAnimal()
//   // My name is moti
//   Bird.nameOfAnimal()
//   // My name is LoveBird