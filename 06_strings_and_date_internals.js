/******************************************************
 * STRING CONCEPTS IN JAVASCRIPT
 ******************************************************/

// 1️⃣ Different Ways to Create Strings

let str1 = "Devang";          // Double quotes
let str2 = 'Devang Desai';    // Single quotes
let backend = "Node Js";      

// Template Literal (ES6 Modern Way)
// Allows multi-line string + variable interpolation
let str3 = `Backend Engineer
${backend}`;

console.log(str3);


/******************************************************
 * STRING IMMUTABILITY
 ******************************************************/

// Strings in JavaScript are IMMUTABLE
// That means once created, they cannot be changed

str1[1] = 'F'; // This will NOT modify the string
console.log(str1); // Still prints "Devang"

// When we "modify" a string, JS creates a NEW string in memory
const upperCopy = backend.toUpperCase(); 
console.log(upperCopy);  // "NODE JS"
console.log(backend);    // "Node Js" (original unchanged)


/******************************************************
 * STRING METHODS
 ******************************************************/

const grade = "A++, A+, B+, B, C+, C, F";

// split() converts string → array
// It splits based on comma
console.log(grade.split(","));


/******************************************************
 * DATE & TIME IN JAVASCRIPT
 ******************************************************/

// Create a Date object
// By default it uses system time (device clock)
// Time internally stored as milliseconds since Jan 1, 1970 (UTC)

let now = new Date();

console.log(now);              // Raw Date object
console.log(now.toString());   // Human readable format
console.log(now.toLocaleString()); // Based on system locale


/******************************************************
 * IMPORTANT DATE METHODS
 ******************************************************/

console.log(now.getTime()); 
// Returns milliseconds since 1 Jan 1970 (Unix Epoch)

console.log(now.getDay());     
// Day of week (0 = Sunday, 6 = Saturday)

console.log(now.getDate());    
// Day of month (1-31)

console.log(now.getMonth());   
// Month index (0 = January, 11 = December)
// That’s why people do +1

console.log(now.getFullYear());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());


/******************************************************
 * IMPORTANT NOTE
 ******************************************************/

// Date depends on system clock.
// If user changes system time → new Date() changes.
// In production backend apps, always rely on server time.
