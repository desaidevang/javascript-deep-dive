//array

let marks = [100,90,40,40,20];

console.log(marks);
console.log(marks.length);

//insert at end
marks.push(65);
marks.push("Devang");

marks[0] = marks[1];
console.log(marks);
console.log(marks[6]);

console.log("Type of Array - "+typeof marks );

//delete element from end 
marks.pop();
console.log(marks);



//add at starting
marks.unshift("Devang");
marks.unshift("ABCD");
console.log(marks)

//delete at starting
marks.shift();
for(let n of marks){
  
    console.log(n);
}

//should we use Shift & Unshift
//can use but it's recommended that you should avoid it 
//it reduce performance 


//non-primitives are copy by reference - no memory allocated in heap just pointing the same reference 
//primitives are copy by value  - heap new memory allocated with same value
let m1 = marks;

marks.push("Mutable");
console.log(m1 +" mutable copy by reference!");

console.log(marks);


//combine two array
let ar1 = [10,30,50,"NODE"];
let ar2 = [0,20,60,"DOCKER"];

//method 1
/*
ar1.push(ar2);
console.log(ar1)//[ 10, 30, 50, 'NODE', [ 0, 20, 60, 'DOCKER' ] ]
*/

//method 2
// let ar3= ar1.concat(ar2);
// console.log(ar3)

//method 3
//SPREAD OPERATOR
let ar3 = [...ar1,...ar2];
console.log(ar3);

console.log(ar1.join(", "));
console.log(ar1.includes("NODE"));


let nArr = [  "Charlie", "Alex", "Jack","David", "Devang","Bob"];
nArr.sort();
console.log(nArr);
nArr.push("anderson");
console.log(nArr);
//A = 65 a = 95


console.log(nArr.reverse());

console.log(nArr.sort().reverse());


let num = [54,96,11,58,65,47,122,14];
num.sort();
console.log(num);


//it treat as " " not number 
// '0' → 48
// '1' → 49
// '2' → 50
// '3' → 51
// '4' → 52
// '5' → 53
// '6' → 54
// '7' → 55
// '8' → 56
// '9' → 57

num.sort((a,b)=> a-b);
console.log(num);
num.sort((a,b)=> b-a);
console.log(num);


let arn = [10,20,20,30,[50,50,60,70,80,[50,65,68,32]]];
console.log(arn);
console.log(arn.flat());
console.log(arn.flat(Infinity));

// Quotation is this is really an Array?
//let's look at the definition of the array
//An array is a fundamental and linear data structure that stores items at contiguous locations. 
//Here it store same data? -> X - NO 
//contiguous -> one by one

//Proof 1
 arr = [10, 20, 30];

console.log(typeof arr); //object

//Proof 2


console.log(arr);

//output
// [10, 20, 30]
//but internally in the javascript
/* {
   "0": 10,
   "1": 20,
   "2": 30
    } */ 

    arr = [10, 20, 30];

console.log(arr[0]);     // 10
console.log(arr["0"]);   // 10  Same!

const obj = {
  "0": 10
};

console.log(obj[0]);     // 10

// Proof 3
// const arr = [10, 20, 30];

arr.name = "Devang";

console.log(arr);
console.log(arr.name);
//[ 10, 20, 30, name: 'Devang' ] 
//we can't do this in c++ java

//Proof 4

// const arr = [10, 20, 30];

delete arr[1];

console.log(arr);
console.log(arr.length);

//No contiguous memory reallocation happened

//Proof 5
arr = [10, 20];
arr[100] = 999;

console.log(arr.length + " is the length of array?");