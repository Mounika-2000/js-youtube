// filter method: selects specified values and returns, cannot modify.

// const arr=["js","ruby",'java','cpp']

// const values=arr.forEach((value)=>{
//     console.log(value);
//     return value                     // gives undefind, foreach doesnt return anything
// })
// console.log(values);                 // undefined

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num) => num > 4)
// const newNums=myNums.filter((num) => {              // when we start a scope {} we need to use explicit return
//     return num > 4
// })

// const newNums=[]
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks=books.filter((bk) => bk.genre === 'History')
  userBooks=books.filter((bk) => (bk.genre === 'History' && bk.publish >= 1995))      // no new variable, overwrite userBooks
  console.log(userBooks);
  