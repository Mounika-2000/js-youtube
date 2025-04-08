// var c=300   // var when declared inside a block, can be accessed outside the block also (which is not good)
let a=100      // global scope in node js is different from console window gobal scope
// const b=200
if(true){
    let a=10
    const b=20
  //  var c=30
  // console.log("inner: ",a); 
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username="hitesh"
  function two(){
    const website="youtube"
    // console.log(username);
  }
  // console.log(website);
  two()
}
one()

if(true){
  const username="hitesh"
  if(username==="hitesh"){
    const website=" youtube"
    // console.log(username+website);
  }
  // console.log(website);
}
// console.log(username);

console.log(addOne(5));      // can access function before initializing

function addOne(num1){
  return num1 + 1
}

const addTwo=function(num){       // variable store function, cannot access function before initializing
  return num + 2
}
console.log(addTwo(5));
