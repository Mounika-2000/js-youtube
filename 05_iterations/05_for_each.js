const arr=["js","ruby",'java','cpp']
arr.forEach(function (val){      // no name function
    // console.log(val);   
})

// another way by arrow function
arr.forEach( (element) => {
    // console.log(element); 
} )

// another printMe functon
function printMe(item){
    // console.log(item); 
}
// arr.forEach(printMe)

// foreach can print value,index,whole array
arr.forEach((value,index,array)=>{
    // console.log(value,index,array);
})

// for-each on array of objects
const myArr=[
    {
        name:"javascipt",
        shorter:"js"
    },
    {
        name:"C++",
        shorter:"cpp"
    },{
        name:"ruby",
        shorter:"rb"
    }
]
myArr.forEach((value,index,)=>{
    // console.log(index,value);
    console.log(value.name);
    
})