//function

function greeting(){
    console.log("Hello Devang!");
}
greeting();//reusability

function addNum(...num1){ //rest operator not spread operator

    let temp =0;
    for(let i of num1){

       temp +=i;
          
    }
  
    return temp;

}

console.log(addNum(2,3,4,3));
console.log(addNum(5,10));
console.log(addNum(5,4));
console.log(addNum(9999,5555,775,65,26,4,5,4,5554,55,4));


//rest vs spread operator

/*
The rest operator is used for
 destructuring an array (or object), 
 while the spread operator 
is used to expand elements



and rest is used when there is lots of individual value and i want to catch
function collectItems(first, second, ...remaining) {
  console.log(remaining); // [3, 4, 5]
}
collectItems(1, 2, 3, 4, 5);

In JavaScript, the ...rest parameter syntax (e.g., function(a, b, ...theArgs)) is used to collect an indefinite number of individual arguments into a single array, making it ideal for handling varying amounts of data. It allows functions to handle extra arguments beyond explicitly defined parameters, acting as a flexible catch-all for remaining values
 */

//--->second way to create function 
console.log("----")
const addN = function(num1,num2){
    return num1+num2;
}

console.log(addN(5,5));


//but it is not allow to use above function 
//it should be come after initialization 
//normal function we can call before initialization


// This works because the function declaration is hoisted
displayAlert(); 

function displayAlert() {
  console.log("Hello, world!");
}


//arrow function
const addSum = (num1,num2) =>{
    return num1+num2;

}
console.log(addSum(50,60)); 

const addAverage = (num1) => (num1+1)/2;
console.log(addAverage(50)); 


const sqrt = n => n*n;
//this don't function but it is really
console.log(sqrt(5));


const u = () =>  ({name:"Devang", age:19}); //only {} will not work because it will think i have to return something and need return keyword
console.log(u());

console.log("\n-- Immediate Invoke Function");

(function immediateInvokeF() {
    console.log("Invoked!")
}) ();

//this 4 function are important


//let's talk about callback
//heart of javascript
//in function argument you can pass another function 
console.log("-- Callback --\n")

function FirstFun(callback){//passing the second function
    console.log("First Called!");
        callback();//calling second function
}

function SecondFun(){
    console.log("Second Called!");

}

FirstFun(SecondFun);


//Not real callback
/* 

function FirstFun(){
    console.log("First Called!");
       SecondFun();
}

function SecondFun(){
    console.log("Second Called!");

}

FirstFun();


❌ Hardcoded
❌ Tightly coupled
❌ Not reusable for different behaviors
*/

console.log("\n---CallBacks---\n")

function payment (amount,callback,callback2,callback3)
{
    console.log(`${amount} payment has initiated`);
    callback(callback2,callback3);
}
function FoodDelivery(callback2,callback3){
    console.log("We have started preparing your food.  FOOD PARTNER - 1")
    callback2(callback3);
}
function FoodDelivery2(callback2,callback3){
    console.log("We have started preparing your food. FOOD PARTNER - 2")
    callback2(callback3);
}
function ExpectedTime(callback3){
    console.log("In 15, minute food will be there!");
    callback3();
}

function Delivered(){
    console.log("Ordered is delivered. Please give us feedback! thank you!");
}

payment(500,FoodDelivery,ExpectedTime,Delivered);
console.log("\n---CallBacks---\n")

payment(500,FoodDelivery2,ExpectedTime,Delivered);



// Type	Hoisted?
// Normal function	✅ Yes
// Function expression	❌ No
// Arrow function	❌ No

// Reason:

// Arrow + const behaves like a variable.