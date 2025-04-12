// truthy values
const userEmail=[]
if(userEmail){            // if string is not empty, then it is assumed TRUE (whitespace inside "" is also considered true)
    console.log("got user email"); 
}else{
    console.log("dont have user email");   
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "false", "0", " ", [], {} empty object, function(){} empty function

if(userEmail.length===0){
    console.log("array is empty");    
}

const emptyObj={}
// v  returns array    v 
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// console.log(false==0);
// console.log(false=="");
// console.log(""==0)

// Nullish Coalesing Operator (??): null undefined
let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 10
// val1= null ?? 10 ?? 15      // first value gets assigned  

console.log(val1);

// ternary opeartor
// condition ? true :  false 
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");
;
