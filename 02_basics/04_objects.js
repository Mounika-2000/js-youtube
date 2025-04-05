// non-singleton object
const tinderUser={}

// Singleton object
// const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
const regularUser={
    email:"mounika@google.com",
    fullname:{
        userfullname:{
            firstname:"Mounika",
            lastname:" D S"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3=Object.assign(obj1,obj2) // for concatinating 1 obj to another object
// const obj3=Object.assign({},obj1,obj2,obj4)  // when 2 or more objects are there to concatinate, {} empty object acts as target
const obj3={...obj1,...obj2,...obj4}     // spread operator (mostly used)
console.log(obj3);

const users=[
    {
        id:1,
        email:"mounika@phonepe.com"
    },
    {
        id:1,
        email:"mounika@phonepe.com"
    },
    {
        id:1,
        email:"mounika@phonepe.com"
    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // returns in array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // gives array of arrays (each element in array)
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if an object has a key/property
