function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("U");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("A");
}
// sayMyName()
                    //  v parameters (function definition)
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// } 

function addTwoNumbers(num1,num2){
    // let result=num1+num2
    // return result
    // console.log("mounika"); never executes, anything after return statement wont execute in a function

    return num1+num2
    
} 
         // v arguments (function call)
const result=addTwoNumbers(3,4)
// console.log("Result:", result);
                            
                              //    v default value
function loginUserMessage(username="sam"){
    if(!username){              // (username === undefined),  "" and undefined are considered false
        console.log("Please enter a username");
        return  // important
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("mounika"));
// console.log(loginUserMessage("hitesh"));   // undefined just logged in

function calculateCartPrice(val1,val2,...num1){     // ... => rest operator, bundles up all the argument values and gives it in a array
    return num1
}
// console.log(calculateCartPrice(200,400,700,900,3400));  // val1=200, val2=400, num1=[700,900,......]

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){      // can access any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   // must give object name here
// handleObject({          // another way of function call and with object as argument
//     username:"mia",
//     price: 499
// })

const myArray=[100,200,300,400]
function returnSecondVal(getarray){   // any name can be given inside as parameter
    return getarray[1]
}
// console.log(returnSecondVal(myArray));
console.log(returnSecondVal([500,600,700]));
 