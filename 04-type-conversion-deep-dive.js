//JavaScript variables can be converted to a new variable and another data type:

// By the use of a JavaScript function
// Automatically by JavaScript itself

// ----> Converting Strings to Numbers

/*The global method Number() converts a variable (or a value) into a number.

A numeric string (like "3.14") converts to a number (like 3.14).

An empty string (like "") converts to 0.

A non numeric string (like "John") converts to NaN (Not a Number).

*/

console.log(Number("3.14")) 
 console.log(Number(Math.PI))
console.log(Number(" "))
console.log(Number("") )

//Number()
//parseFloat()
//parseInt()

// let y = "5";      // y is a string
// let x = + y;      // x is a number
//The unary + operator can be used to convert a variable to a number:

let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)
console.log(x)


// Converting Numbers to Strings
// The global method String() can convert numbers to strings.

// It can be used on any type of numbers, literals, variables, or expressions:

console.log(String(5))          // returns a string from a number variable x
console.log(String(123))        // returns a string from a number literal 123
console.log(typeof String(123))        // returns a string from a number literal 123
console.log(String(100 + 23))   // returns a string from a number from an expression
console.log(typeof String(100 + 23))   // returns a string from a number from an expression


//The Number method toString() does the same.

console.log(x.toString()) 
console.log( (123).toString())
console.log((100 + 23).toString()) 
console.log(typeof (100 + 23).toString()) 



// Converting Dates to Numbers
// The global method Number() can be used to convert dates to numbers.

d = new Date();
console.log( Number(d))          // returns 1404568027739

//The date method getTime() does the same.

// Converting Dates to Strings
// The global method String() can convert dates to strings.

console.log(String(Date()))   // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
// The Date method toString() does the same.

// Example
console.log(Date().toString())
  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

 console.log(Number(false))      // returns 0
console.log(Number(true))       // returns 1

// Converting Booleans to Strings
// The global method String() can convert booleans to strings.

// String(false)      // returns "false"
// String(true)       // returns "true"
// The Boolean method toString() does the same.

// false.toString()   // returns "false"
// true.toString()    // returns "true"


// Automatic Type Conversion
// When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

// The result is not always what you expect:
console.log("---- Automatic Type Conversion -----");
console.log(5 + null )    // returns 5         because null is converted to 0"5" + null  // returns "5null"   because null is converted to "null"
console.log("5" + 2  )    // returns "52"      because 2 is converted to "2"
console.log("5" - 2  )    // returns 3         because "5" is converted to 5
console.log("5" * "2")    // returns 10        because "5" and "2" are converted to 5 and 2


// Automatic String Conversion
// JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:


// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
// Numbers and booleans are also converted, but this is not very visible:

// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"


//  == (Double Equals) vs === (Triple Equals)

/*  

Double equals -> Performs type coercion (converts values to a common type before comparison).
Triple Equals -> No type coercion. Values must be of the same type and value to be equal.

Double Equals -> Compares only values after converting them to the same type.
Triple Equals -> Compares both value and type exactly.

Double Equals -> Used when you want JavaScript to automatically convert types for you.
Triple Equals -> Used for strict comparisons when you want to ensure that both type and value are identical.

Double Equals -> '5' == 5 returns true (because it converts '5' to 5).
Triple Equals -> 5' === 5 returns false (different types: string vs number).

Double Equals -> true == 1 returns true (because true is converted to 1).
Triple Equals -> true === 1 returns false (different types: boolean vs number).

Double Equals -> null == undefined returns true.
Triple Equals -> null === undefined returns false.

Double Equals -> Objects or arrays are compared by reference (not content).
Triple Equals -> Objects or arrays are compared by reference (not content).




*/

console.log(`== vs ===`);
let s = "10"; // String
let n = 10;   // Number

console.log(s == n);
console.log(s === n);
//Same Type and Value: For === to return true, both the value and the type must be exactly the same. and don't perform Type Coercion


//not a number
console.log(0/0);
console.log(Number("Hello"));
console.log(typeof Number("23n"));
console.log(Number(null));
console.log(Number(undefined));

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("true"));
console.log(Boolean("false"));
console.log(Boolean(""));
console.log(Boolean("Why True ?"));


//computer science challenge
console.log(`--- computer science challenge ---`);
let varA = 0.1;
let varB = 0.2;
let varC = varA+varB;
console.log(varC);
console.log(varC == 0.3);

// 0.25 == Binary Number 0.01
// 0.25*2 = 0.5 (0)
// 0.5*2 = 1.0 (1)

// 0.2*2 = 0.4 (0)
// 0.4*2 = 0.8 (0)
// 0.8*2 = 1.6 (1)
// 0.6*2 = 1.2 (1)
// 0.2*2 = 0.4 (0)
// 0.4*2 = 0.8 (0)

//0.001100110011...............
//so it's approx value 
//decimal 0.29980....
// 
//0.30000000000000004 != with 0.29980... because js use some internal calculation to convert so there is minor error

//when use > , < , >= , <= then it convert null to number 0
//undefined -> NaN
console.log(`--`);
console.log(null <=0);
console.log(null >=0);
console.log(null >0);
console.log(null <0);

console.log(`--ASCII VALUE-- A=65 and a=96`);
console.log("A" < "a");
console.log("A" > "a");
console.log("A" == "a");
console.log("A" == "A");

console.log(`--`);
console.log(10>='10');
console.log(0<true);
console.log(2<true);
console.log(null>="");// null= 0, ""=0


console.log(NaN == NaN);
console.log(typeof NaN);
console.log(Number(NaN) );

//--&&
let a = "DEVANG";
let b = "NODE";
let c = a&&b;
console.log(c);
// if we convert the string to boolean then always true so first it see a = true and then it directly print b
 a = "";
 b = "NODE";
 c = a&&b;

 //If first value is false, it will return the first value itself
 //If first value is true, it will return second value
console.log(c);
 a = "DEVANG";
 b = "";
 c = a&&b;
console.log(c);


a =0; //false
b = 10;
console.log(a || b);
a =20; //false
b = 1;
console.log(a || b);
