const marvel_heros=["hulk","ironman","blackwidow"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros=marvel_heros.concat(dc_heros) // since the new concatinated array cannot change original array, we need to assign it to new variable/array
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // spread operator, array elements act as individual elements
// console.log(all_new_heros);

const another_array=[1,2,3,4,5,[6,7],8,[2,4,[3,5,5]]]
const real_another_array=another_array.flat(Infinity) // inside paranthesis is the depth to which the array need to get flattened, here 2 is enough
// console.log(real_another_array);   // returns a new single array with all sub arrays concatinated 

// console.log(Array.isArray("mounika"));
// console.log(Array.from("mounika"));   // converts to array
// console.log(Array.from({name:"mounika"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
