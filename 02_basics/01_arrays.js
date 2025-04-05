// array
const myArr=[0,1,2,3,4,5] // can also have different data types in same array, resizable, make shallow copy (copies share same reference)
const myHeros=["hulk","ironman"]
const myArr2=new Array(1,6,4,2) //no square brackets
// console.log(myArr[0]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
myArr.unshift(9) // inserts at start of array, not so useful as all the values should be shifted
myArr.shift() // removes start value of array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // gives -1
const newArr=myArr.join() // adds all values of an array into a string
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);
console.log("A ", myArr);
const myn1=myArr.slice(0,3) // end index exclusive, and doesnt affect original array
console.log(myn1);
console.log("B ", myArr);

const myn2=myArr.splice(0,3) // end index inclusive, and doesnt affect original array
console.log(myn2);
console.log("C ", myArr);