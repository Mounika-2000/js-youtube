// Dates

let myDate= new Date(); // Date is an o
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate1=new Date(2023,0,23) // month starts from 0 in such declaration , array index starts from 0
let myCreatedDate2=new Date(2004,11,4) // year, month, date
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate2.toDateString());

let myCreatedDate3=new Date(2004,11,4,21,0) // y,m,d,hour,minutes
// console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4=new Date("2025-01-14") // yy-mm-dd
// console.log(myCreatedDate4.toLocaleString());

let myCreatedDate5=new Date("04-12-2004") // dd-mm-yy
// console.log(myCreatedDate5.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp); // direct method, in milliseconds
// console.log(myCreatedDate5.getTime()); // object method

// console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); // jan-0
// console.log(newDate.getDay()); // mon-1

// important
console.log(
 newDate.toLocaleString('default',{
    weekday:"long",
}))



