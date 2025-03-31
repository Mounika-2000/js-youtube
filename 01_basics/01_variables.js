const accId=12837
let accEmail="mounika@gmail.com"
var accPassword="123"
accCity="Jaipur" //also a variable, but not a good practice
let accState;

// accId=2 // Not allowed to change const
accEmail="abc@gmail.com"
accPassword="3754"
accCity="Bengaluru"
console.log(accId);

/* Prefer not to use var, as it has issue in block and functional scope */

console.table([accId,accEmail,accPassword,accCity,accState]);