// map method: creates a new array same length as og array by applying a function to each element of og array
//  can modify array values and returns them

const nums=[1,2,3,4,5,6,7,8,9,10]
// const newNum= nums.map((num) => num+10)

// const newNum= nums.filter((num) => num+10)   // cannot modify values, only selects specified values
// nums.forEach((num) => {      
//     console.log(num+10);
// })

// Chaining
// const newNum=nums.map().filter() // OR
// const newNum=nums.map().map()

// const newNum= nums
//             .map((num) => num+10)
//             .filter((num) => num > 15)

const newNum= nums
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num >= 40)
console.log(newNum);
