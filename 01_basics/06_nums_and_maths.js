const score=400
// console.log(score);

const balance=new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2)); // For decimal count

const otherNumber=123.8946
// console.log(otherNumber.toPrecision(4)); // rounds off and gives 3 numbers

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(2.5));
// console.log(Math.round(3.5));
// console.log(Math.ceil(2.5)); // even if value is slightly greater than 2, gives 3(nearest greater number of 2 )
// console.log(Math.floor(2.5));
// console.log(Math.min(2,6,1,8,3,5));
// console.log(Math.max(2,6,1,8,3,5));

console.log(Math.random()) // value always comes between 0-1
console.log(Math.floor(Math.random()*10)+1); //  sometimes 0.04 * 10 can still give 0, which is floored to 0, but we want number more than 1 so we add 1

// to get the values in a range
const min=10
const max=20                        // v          v range
console.log(Math.floor(Math.random() * (max-min+1)) + min);
