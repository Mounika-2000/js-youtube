const name="mounika"
const repoCount=50
// console.log(name+repoCount+" value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('mounika-ds-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('u'));

const newString=gameName.substring(4,7) // end index (7) is exclusive
// console.log(newString);

const anotherString=gameName.slice(-7,9) // can also give -ve values(gives elements in reverse order)
// console.log(anotherString);

const newStringOne="    mounika    "
// console.log(newStringOne);
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());
// console.log(newStringOne.trim());

const url="https://mounika.com/mounika%20ds"
// console.log(url.replace("%20","-"));
console.log(url.includes("mounika"));
 
console.log(gameName.split("-"));

