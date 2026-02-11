//Variables defined with let can not be redeclared.

let x = "Devang";
//let x = 0; it will give SyntaxError: Identifier 'x' has already been declared
//but in var we can declare redeclared Variables 

var y = "Desai";
var y = 19

console.log(y , x);

console.log("\n->Redeclaring a variable using the var keyword can impose problems.\n->Redeclaring a variable inside a block will also redeclare the variable outside the block:");

var z = 20;

function hello(){
    z++;
}

console.log(z);
//if the var variable is written inside the function then it respect the scope of block



{
    z++;
}


// If a var is declared inside a block (e.g., { ... }) but outside any function, it becomes globally accessible
console.log(z);


if(true)
{
   z++;
}

console.log(z);


//so now that's why we use const & let



// variables


//primitive data type
//number(including decimals), string, boolean, undefined, null, bigint, symbol

//non-primitive data type
//array, function, object


/*
if declare const then we have to initialize it with value else it will give error

const a;
wrong!
const a = 5;
correct!
*/


//number take 8 bytes (64 bits) memory 
// Representation: All JavaScript Numbers are double-precision 64-bit floating-point values, following the IEEE 754 standard.
// Safe Integer Capacity: Integers can be safely represented without loss of precision only within the range of Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER.
 let maxSize = Number.MAX_SAFE_INTEGER// is 2⁵³ - 1 (or 9,007,199,254,740,991).
 let minSize = Number.MIN_SAFE_INTEGER// is -(2⁵³ - 1) (or -9,007,199,254,740,991).
console.log(maxSize,minSize);

// BigInt
// Representation: BigInt is a separate primitive data type used to represent integers with arbitrary precision. It does not have a fixed size and its storage grows or shrinks as needed.
// Capacity: There is no specified theoretical maximum limit for a BigInt in the ECMAScript standard; its size is limited only by the host system's available memory.
// Usage:
// You create a BigInt by appending n to the end of an integer literal (e.g., 123n) or by calling the BigInt() function (e.g., BigInt("123")).
// BigInt values can only be used for whole numbers (integers), not decimals.
// You cannot mix BigInt and Number types in the same arithmetic operations without explicit type conversion.
// BigInt is ideal for applications like financial calculations, cryptography, and working with large IDs that require exact precision. 

//Safe Integer Range? number = -(2⁵³ - 1) to 2⁵³ - 1 || bigInt = Virtually unlimited
//Decimals/Floats?  number = yes || bigInt = No (only integers) 
//Memory Size? number = Fixed (64 bits/8 bytes) || bigInt = Dynamic (limited by system memory)
//Math Object Support? number = yes || bigInt = no



// Null
// In JavaScript, null is a special primitive value that represents the intentional absence of any object value
// intentionally set nothing


// Null vs undefined
// Null in JavaScript means an empty value and is also a primitive type in JavaScript.
// The variable which has been assigned as null contains no value. Undefined, 
// on the other hand, means the variable has been declared, but its value has not been assigned.


//Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1);

//it's equal? 
let symbolE = id1==id2;
console.log(symbolE);
//false because its create unique value

// Non-Primitive value

//array


//object - key value
let user = {
    name: "Devang",
    age: 19,
    course: "BCA"
}
console.log(user);


//function

let saveF = function greet(){
    return "Hello";
}
console.log(saveF);
console.log(saveF());
console.log("it is type of: "+typeof(saveF));


//so, here it is bug because it was made in 10 day
//reason fix is not coming because, the legacy code will crash!

//here, can see it's null and instead of printing null it's printing object

console.log(typeof(null));

let legacyBug = null;
console.log(typeof legacyBug);


//now let's get the type of array

let students = ["Devang", "Microservice", 19, "BCA" ];
console.log(students);
console.log(typeof(students));

console.log("\n---- Non-Primitive ----\n");
let nArray = [10,20,30];
let nObject = {
    name:"Devang",
    skill:"Node Backend",
    devOps:true
}
function nFunction(){
    return 0;
}

console.log("Type of array ",typeof nArray);
console.log("Type of object ",typeof nObject);
console.log("Type of function ",typeof nFunction);
//so, here printing the type of array students = object
//it's not bug, i will cover this in next part
//function show type of = function but it's actually function | i will cover in next part
//IMP: ALL non-primitive data type is object 🚨



//primitives = immutable(not changeable)

console.log("\n--- Primitives = Immutable ---")
let str = "Hello";
// The .toUpperCase() method does not change the original 'str'
let upperStr = str.toUpperCase();

console.log(str);       // Output: "Hello" (original value is unchanged)
console.log(upperStr);  // Output: "HELLO" (a new string is created)


//so, how i can prove that primitives are not changeable?

console.log(str[0]);//H
//so now let's change H -> G
str[0]="G";

console.log(str);
//still Hello instead of Gello because it's immutable
console.log("\n--- Non-Primitives = mutable ---")
let obj1 = { name: "Alice" };
let obj2 = obj1; // Both variables refer to the *same* object in memory

obj2.name = "Bob"; // Mutating the object through one reference

console.log(obj1.name); // Output: "Bob" (The change is visible through the other reference)
console.log(obj1 === obj2); // Output: true (they refer to the same underlying object)


let mArray = ["Apple", "Banana"];
console.log(mArray);
mArray.push("Mango");
console.log("After insert: ",mArray);

let mObj ={
    name:"Devang"
}
mObj.name="Desai";
console.log(mObj);


//One more example of immutable

let xA = 10;
let xB = xA;
console.log("Value of A: ", xA);
console.log("Value of B: ", xB);
console.log("Changing value of B");
xB= 20;
console.log("Value of A: ", xA);
console.log("Value of B: ", xB);

//B is not pointing to A memory location hence, proved primitives are immutable
//primitives = copy, not actually change


//non-primitive  are mutable because in real-world there will be thousands of data so if we copy then it might take double memory, for solution they set mutable to non-primitive 
//non-primitive data types (objects, arrays, lists) are designed to be mutable and stored by reference primarily for memory efficiency and performance when handling large datasets
//1. Memory Efficiency (Avoiding "Double Memory")
// Mutable/Reference Approach: When you assign a large array to a new variable (let newArray = oldArray), the system does not copy the thousands of elements. It only copies the memory address (reference). Both variables point to the same data in the heap memory.
// Immutability Problem: If non-primitives were immutable, updating one element in a million-item list would require creating a completely new list, which could double memory usage and slow down the application. 
// DEV Community
// DEV Community
//  +4
// 2. Performance (In-Place Modifications)
// Mutable objects allow for in-place modifications. You can update, add, or remove items directly within the existing memory structure.
// This is much faster than creating a full copy of a massive data structure every time a single value changes, which helps reduce the workload on the Garbage Collector. 
// Software Engineering Stack Exchange
// Software Engineering Stack Exchange
//  +4
// 3. Real-World Application Example
// Imagine a banking application handling a list of 10,000 transactions.
// Mutable: A transaction record can be updated directly, and all references to that account see the change immediately.
// Immutable: Every time a single transaction is updated, you would have to copy the entire 10,000-item list just to update one, which is inefficient 


// Non-primitives are NOT mutable just because of memory efficiency.

// They are mutable because:

// Objects represent real-world entities.

// We often need to update properties dynamically.

// Copying huge structures repeatedly is inefficient.

// But modern JS frameworks like React often use immutable patterns intentionally for predictable state management.

// So mutability is design choice, not just memory trick.