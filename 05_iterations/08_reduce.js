// reduce method: iterative method runs a reducer function on all array elements, accumulating a single value output
// used in Shopping cart
const nums=[1,2,3]
// nums.reduce(function(accumulator,currentVal){
//     console.log(`accumulator: ${accumulator}, currentVa: ${currentVal}`);
//     return accumulator+currentVal
// },initValue)

// const total=nums.reduce(function(acc,currVal){
//     console.log(`accumulator: ${acc}, currentVa: ${currVal}`);
//     return acc+currVal
// },0)

const total=nums.reduce((acc,currVal) => acc + currVal,0)       // with arrow function
// console.log(total);

const shoppingCart=[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },{
        itemName:"mob dev course",
        price: 6999
    },{
        itemName:"data science course",
        price: 12999
    }
]

const totalPrice=shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(totalPrice);
