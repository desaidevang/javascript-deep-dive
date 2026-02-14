//scope and closure, HOF

function a(){
    let b=10;
}

//console.log(b); b is not defined

//global scope, functional, block level scope


//but var don't respect the block level scope


if(true){
    var ab =50;
}
console.log(ab);
//but it respect the functional scope


let global =50;
//let global =50; not valid
function globalVar (){

    let global =30;//100% valid
    console.log(global); // 30
}
globalVar();
//first it search global var in inside block if don't found then only search outside


function globalVar2 (){

    let global =60;
    function nF(){
    let global =20;

   console.log(global); // 20 but if not in it's block then 60
    }
    nF();
 
}
globalVar2();


// function createCounter(){
//  
//     function increment(){
//         console.log("+");
//         //return 10; then it won't show undefined

//     }
//     return increment();
// }

// const count = createCounter();
// console.log(count);

function createCounter(){
    let count = 0;
    function increment(){
      count++;
      return count;
        //return 10; then it won't show undefined

    }
    return increment;
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//so how we can access the count? it's is in the block of createCounter but we are accessing the increment()?
//it's happening because of closure
//closure=a function that remembers variables from the outer scope even after the outer function has finished executing.

//like it should be delete once the createCounter function is complete executed then it should be removed? why it exist
//This is exactly the point where most people think JavaScript is breaking its own rules
//Because yes — normally when a function finishes execution, its local variables should be gone.

/*

1️⃣ When createCounter() is called
const counter = createCounter();


Execution goes like this:

Inside Call Stack

createCounter()


Inside Heap Memory

count = 0
increment() { count++ }


Now here is the important part:

JavaScript sees that the inner function increment is using the variable count from its outer function.

So JS engine does something special:

👉 It creates a hidden memory box called Closure Environment
Like this:

increment →
            [[Closure]]
                count: 0


Now when this line runs:

return increment;


You are NOT just returning the function.

You are returning:

increment + its closure memory


So this gets stored in:

counter


Now:

counter →
          increment()
          [[Closure]]
              count: 0

2️⃣ Now createCounter() is removed from Stack

Yes ✅
createCounter() execution is finished
It is popped from the Call Stack.

BUT…

Its variable count is NOT destroyed ❌

Why?

Because it is still being used by someone.

That someone is → increment().

3️⃣ Garbage Collector Rule 🔥

JavaScript only deletes memory when:

❗ Nothing in the program is referencing it anymore

Now ask yourself:

Is count still referenced?

Yes — because:

counter → increment → count


So Garbage Collector says:

"I cannot delete this. Someone is still using it."

So count stays alive in Heap Memory.

4️⃣ When you run:
counter();


Execution:

counter() → increment()
              count++  (from closure memory)


Now memory becomes:

count: 1


Next call:

count: 2


Next:

count: 3


So it's increasing because:

👉 The same closure memory is being used every time.

5️⃣ When will count finally die?

Only when:

counter = null;


Now no one is referencing:

increment OR count


Now Garbage Collector says:

"Okay, safe to delete."

And the closure memory is destroyed.

💡 In One Line

Local variables are destroyed after function execution unless they are captured inside a returned inner function (closure).

Then they move from:

Stack → Heap


and live as long as the returned function lives.
*/

//js is  single threaded so some code run then gc run then run code again because js is single threaded 
//so heap say if the var is used inside the function and it using the outer var then it will be remembered

//so what is use-case
//let say there is baking software
// let balanace =500;

// balance+= "Devang";
// balance - 500;
//developer have direct access so might make mistake so because code have 20000 + or more lines of code so might do mistake
//it doing mistake because it do have the direct access to the balance

let user= {

    balance:500,
    deposit: function (amount){
        if(typeof amount =="number" && amount>0){

            this.balance+= amount;
            return this.balance;
        }else{
            return "Request failed!"
        }
       
    }
}
console.log( user.deposit(200));
console.log( user.deposit("OO"));
console.log("balance is "+user.balance);//still it's accessible so we can add 

//so we can add method and use private 


//higher order function means, passing argument as function to other function  

function double(value) {
return function execute(num) {
return num*value;
}
}
// const n = double(20);
// console.log(n(5));

//or u can use this as well
const n = double(20)(5);
console.log(n);
