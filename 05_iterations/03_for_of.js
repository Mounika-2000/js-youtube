// for of

// ["","",""]
// [{},{},{}]
const arr =[1,2,3,4,5] 
for(const num of arr){     // num is an element of arr
    // console.log(num);   
}

const greeting ="hello world" 
for(const greet of greeting){     // num is an element(value) of arr
    // console.log(`each char is: ${greet}`);   
}


// Maps: maintains insertion order in key-value pairs, and no duplicate keys
const map=new Map()
map.set('IN','India')
map.set('USA','Unites states of america')
map.set('FR','France')
// console.log(map);

for (const [key,value] of map) {
    // console.log(key); 
    console.log(key,':-',value);  // remember the syntax     
}

// Object in js is not iterable through for of
const myObj={
    "game1":"NFS",
    "game2":"spiderman"
}
// for (const [key,value] of myObj) {
//     console.log(key,':-',value);   
// }
