// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);   //true js conveerts string to number
// console.log("02">1);

// Avoid such comparisions 
// console.log(null>0); //false, comparisions(>,<,>=,<=) work differently compared to equality check(==)
// console.log(null==0); // false, comparisions convert null to number, trating it as 0
// console.log(null>=0); // true

// console.log(undefined>0); // all false
// console.log(undefined==0);
// console.log(undefined>=0);

// === (strict check)

console.log("2"===2); //false, doesnt convert datatype, checks both value and datatype
