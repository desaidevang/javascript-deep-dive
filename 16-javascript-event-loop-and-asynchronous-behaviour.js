// ==========================================================
// JAVASCRIPT SYNCHRONOUS VS ASYNCHRONOUS + EVENT LOOP NOTES
// ==========================================================


// ----------------------------------------------------------
// JAVASCRIPT IS SINGLE THREADED
// ----------------------------------------------------------

// JS has only ONE CALL STACK
// It executes ONE task at a time
// Means it is SYNCHRONOUS by default


console.log("First");
console.log("Second");
console.log("Third");

/*
OUTPUT:
First
Second
Third

Because:

Call Stack:
-----------
console.log("First")   -> executes -> removed
console.log("Second")  -> executes -> removed
console.log("Third")   -> executes -> removed
*/


// ==========================================================
// BUT THEN WHY setTimeout IS ASYNCHRONOUS ?
// ==========================================================


// IMPORTANT:

// setTimeout is NOT part of JavaScript Engine
// It is provided by:
// Browser OR Node.js Runtime Environment


/*
JAVASCRIPT RUNTIME ARCHITECTURE:

JS ENGINE
│
├── CALL STACK (Main JS Thread)
│
RUNTIME ENVIRONMENT
│
├── WEB APIs (Timer, DOM, Fetch, etc)
├── CALLBACK QUEUE
├── EVENT LOOP
*/


// ==========================================================
// DRY RUN EXAMPLE
// ==========================================================


console.log("Hello");

setTimeout(function(){
    console.log("Timeout Executed");
},5000);

console.log("I am the end");


/*
STEP 1:
-------
console.log("Hello") goes to CALL STACK
Executes immediately
Removed from stack


STEP 2:
-------
JS sees setTimeout()

JS DOES NOT execute it directly ❌

JS sends the callback function to:
WEB API (Timer API)

Timer starts counting 5 sec OUTSIDE JS ENGINE


STEP 3:
-------
Call Stack becomes free again


STEP 4:
-------
console.log("I am the end")
goes to CALL STACK
Executes immediately


OUTPUT TILL NOW:
---------------
Hello
I am the end


STEP 5:
-------
After 5 sec timer finishes

Callback moves to:
CALLBACK QUEUE


STEP 6:
-------
EVENT LOOP checks:

Is CALL STACK empty ?

YES ✅

So it moves callback from:
CALLBACK QUEUE → CALL STACK


STEP 7:
-------
Callback executes

console.log("Timeout Executed")


FINAL OUTPUT:
------------
Hello
I am the end
Timeout Executed
*/


// ==========================================================
// EVENT LOOP
// ==========================================================


/*
EVENT LOOP JOB:

1. Continuously check CALL STACK
2. If empty
3. Then take function from CALLBACK QUEUE
4. Push it into CALL STACK
5. Execute it
*/


// ==========================================================
// setTimeout()
// ==========================================================


// Runs ONCE after given delay
// Returns a TIMER ID


setTimeout(()=>{
    console.log("I am called after 3 sec");
},3000);


// Passing arguments


function greet(a,b,c){
    console.log("Hello",a,b,c);
}

setTimeout(greet,4000,5,10,15);


// ==========================================================
// setInterval()
// ==========================================================


// Runs AGAIN and AGAIN after interval
// Infinite loop until stopped


let id = setInterval(()=>{
    console.log("Running every 2 sec");
},2000);


// To stop setInterval


setTimeout(()=>{
    clearInterval(id);
},8000);


// ==========================================================
// IMPORTANT INTERVIEW QUESTION
// ==========================================================


console.log("Start");

setTimeout(()=>{
    console.log("Inside Timeout");
},0);

console.log("End");


/*
OUTPUT:
Start
End
Inside Timeout

WHY ?

Even if delay is 0
Callback goes to WEB API first

Then CALLBACK QUEUE

Then waits for CALL STACK to become empty

EVENT LOOP pushes it later
*/


// ==========================================================
// FLOW SUMMARY
// ==========================================================


/*

setTimeout() called
        ↓
Moves to WEB API
        ↓
Timer Starts
        ↓
Timer Finishes
        ↓
Moves to CALLBACK QUEUE
        ↓
EVENT LOOP checks CALL STACK
        ↓
If empty
        ↓
Moves callback to CALL STACK
        ↓
EXECUTES

*/

