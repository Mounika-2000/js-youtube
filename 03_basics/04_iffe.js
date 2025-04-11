// Immediately Invoked Function Execution (IIFE) : used to avoid/remove "global scope pollution": As variables lose scope, they will be eligible for garbage collection. If they are scoped globally, then they will not be eligible for collection until the global namespace loses scope.
// global variables increase memory usage, dont use too may global variables
// global variables can be overwritten or misconstrued somewhere.

// Two iife in one file: ';' after () is important
// named iife 
(function chai(){
    console.log('DB Connected');
})();   // this function call invokes the function but doent know when to stop, so ; must be written

// simple/unnamed iife
// v parameter
((name) => {                               // can also write arrow function inside ()
    console.log(`DB Connected Two ${name}`);
})("hitesh");
//   ^ argument