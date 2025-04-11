// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month=3        // if break statement is not written, if the case matches , 
switch (month) {     // then all cases get executed after that case except DEFAULT
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");  
        break;
}

// if the case value is string
const month2="march"        // if break statement is not written, if the case matches , 
switch (month2) {     // then all cases get executed after that case except DEFAULT
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");  
        break;
}
