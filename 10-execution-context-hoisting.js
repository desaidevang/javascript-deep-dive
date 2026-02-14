// ================= EXECUTION CONTEXT IN JAVASCRIPT =================

// JavaScript runs code inside something called Execution Context

// Every Execution Context runs in 2 phases:
// 1. Memory Creation Phase (Hoisting Phase)
// 2. Execution Phase



// ===================== EXAMPLE =====================

var a = 10;
var b = 20;

function addNumber(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(4,5);

console.log(sumResult1, sumResult2); // 30 9



// ================= MEMORY CREATION PHASE =================

// Before running code JS scans whole program and allocates memory

// Internally JS stores:

// a = undefined
// b = undefined
// addNumber = {entire function definition}
// sumResult1 = undefined
// sumResult2 = undefined

// IMPORTANT:
// num1, num2 and sum are NOT created now
// They will be created when function is called



// ================= EXECUTION PHASE =================

// Now JS executes line by line:

// a = 10
// b = 20

// addNumber(a,b) is called
// So a NEW Execution Context is created for this function



// ================= FUNCTION EXECUTION CONTEXT =================

// Memory Phase inside function:

// num1 = undefined
// num2 = undefined
// sum = undefined


// Execution Phase inside function:

// num1 = 10
// num2 = 20
// sum = 30
// return 30

// Now:

// sumResult1 = 30

// Function Execution Context is removed from Call Stack

// Same process happens for addNumber(4,5)



// ================= CALL STACK =================

// JS uses Call Stack to manage execution

// First Global Execution Context pushed:

// | Global EC |

// When function called:

// | addNumber EC |
// | Global EC    |

// After return:

// | Global EC |

// Function Execution Context removed automatically



// ================= STACK vs HEAP =================

// STACK STORES:
// Primitive values
// Execution Context
// Function call frames
// Variable references

// HEAP STORES:
// Objects
// Arrays
// Functions
// Closures


// Primitive Data Types stored in Stack:
// Number
// String
// Boolean
// Null
// Undefined
// BigInt
// Symbol



// ================= HOISTING =================

// Example:

console.log(m); // undefined
var m = 20;
console.log(m); // 20


// Internally JS sees:

// var m;
// console.log(m);
// m = 20;



// ================= FUNCTION HOISTING =================

displayAlert();

function displayAlert() {
    console.log("Hello!");
}

// Function declarations are fully hoisted
// So we can call before declaration



// ================= TEMPORAL DEAD ZONE =================

// let and const are hoisted
// BUT they are NOT initialized

// They stay in Temporal Dead Zone (TDZ)
// Until execution reaches their declaration line


// console.log(n1); // ReferenceError
// let n1 = "let";



// ================= FUNCTION EXPRESSION + TDZ =================

// let x = 30;
// const y = 50;

// const r = sum2(x,y);

// const sum2 = function(n1, n2){
//     return n1 + n2;
// }

// sum2 is in Temporal Dead Zone
// Cannot access before initialization

// So it throws:

// ReferenceError: Cannot access 'sum2' before initialization
