//forEach, filter, reducer, map, set

const arr = [10,20,30,85,90,45];

arr.forEach((number,index,arr)=>{ //number is callback fun
    console.log(number,index,arr);
})

//first argument is mandatory and rest are optional
let s=0;
arr.forEach((number)=>{ //number is callback fun
    s+=number;
})
console.log("Sum is "+ s);

//filter 
const fArray = arr.filter((number)=> number>25);//here it will true false function if true then add else ignore
console.log(fArray);

//how behind work?

//its object so object.fun

/*
array is object so 
*/
let obj = {
    name:"xyz",
    deposit: function(amount){
        console.log(amount);
    }
}
obj.deposit(500);
//this = arr / [10,20]etc


//not recommended | might bug in future | but you can add
Array.prototype.ownfilter = function(compare){

    const ans = [];
    for(let n of this){//u can pass array as well

        if(compare(n)){
ans.push(n);
        }

    }
    return ans;
}


//Functions can be passed as values



// const newArr = arr.ownfilter(compare);
const newArr = arr.ownfilter((num)=> num>25);// arrow function which go to compare 
//arr.ownfilter((num)=> num>25);
// You are passing that function as an argument


console.log(newArr);


//for understanding 
const testF = function (compare){

    const tArr = [];
    for(let i of arr){
       if(compare(i)){
        tArr.push(i);
       } 
    }
    return tArr;
}

 const an = testF((num) =>num > 25);
 console.log("Test Array filtering ")
 console.log(an);

 let nAr = [50,65,54,65,52];
 console.log(nAr.ownfilter((num)=>num>60));

 const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 599,
    category: "Electronics",
    brand: "Logitech",
    rating: 4.3,
    stock: 120,
    discount: 10
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 1499,
    category: "Electronics",
    brand: "Boat",
    rating: 4.1,
    stock: 80,
    discount: 15
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    category: "Footwear",
    brand: "Nike",
    rating: 4.6,
    stock: 50,
    discount: 20
  },
  {
    id: 4,
    name: "Men's T-Shirt",
    price: 799,
    category: "Clothing",
    brand: "H&M",
    rating: 4.0,
    stock: 200,
    discount: 5
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 1299,
    category: "Accessories",
    brand: "Skybags",
    rating: 4.4,
    stock: 75,
    discount: 12
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 2999,
    category: "Electronics",
    brand: "Noise",
    rating: 4.2,
    stock: 60,
    discount: 18
  },
  {
    id: 7,
    name: "Coffee Maker",
    price: 1999,
    category: "Home Appliances",
    brand: "Philips",
    rating: 4.5,
    stock: 30,
    discount: 25
  },
  {
    id: 8,
    name: "Gaming Keyboard",
    price: 1599,
    category: "Electronics",
    brand: "Redragon",
    rating: 4.3,
    stock: 90,
    discount: 10
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 999,
    category: "Fashion",
    brand: "RayBan",
    rating: 4.6,
    stock: 40,
    discount: 8
  },
  {
    id: 10,
    name: "Water Bottle",
    price: 299,
    category: "Home",
    brand: "Milton",
    rating: 4.1,
    stock: 300,
    discount: 5
  },
  {
    id: 11,
    name: "Desk Lamp",
    price: 899,
    category: "Home",
    brand: "Wipro",
    rating: 4.2,
    stock: 110,
    discount: 7
  },
  {
    id: 12,
    name: "Power Bank",
    price: 1199,
    category: "Electronics",
    brand: "Mi",
    rating: 4.4,
    stock: 140,
    discount: 15
  },
  {
    id: 13,
    name: "Yoga Mat",
    price: 699,
    category: "Fitness",
    brand: "Boldfit",
    rating: 4.3,
    stock: 90,
    discount: 10
  },
  {
    id: 14,
    name: "Office Chair",
    price: 4599,
    category: "Furniture",
    brand: "GreenSoul",
    rating: 4.5,
    stock: 25,
    discount: 22
  },
  {
    id: 15,
    name: "LED Monitor",
    price: 8999,
    category: "Electronics",
    brand: "Samsung",
    rating: 4.7,
    stock: 20,
    discount: 17
  },
  {
    id: 16,
    name: "Hair Dryer",
    price: 1499,
    category: "Personal Care",
    brand: "Havells",
    rating: 4.0,
    stock: 55,
    discount: 13
  },
  {
    id: 17,
    name: "Electric Kettle",
    price: 1099,
    category: "Home Appliances",
    brand: "Prestige",
    rating: 4.2,
    stock: 70,
    discount: 9
  },
  {
    id: 18,
    name: "Notebook",
    price: 199,
    category: "Stationery",
    brand: "Classmate",
    rating: 4.6,
    stock: 500,
    discount: 3
  },
  {
    id: 19,
    name: "Perfume",
    price: 2499,
    category: "Beauty",
    brand: "Fogg",
    rating: 4.3,
    stock: 35,
    discount: 14
  },
  {
    id: 20,
    name: "Mobile Cover",
    price: 399,
    category: "Accessories",
    brand: "Spigen",
    rating: 4.5,
    stock: 180,
    discount: 6
  }
];

const PriceFArray = products.filter((product) => product.price > 2000).sort((a,b)=> a.price-b.price);//now sort in desc

console.log(PriceFArray);



//map

const mapAns = products.map((product)=> ({name:product.name, price:product.price}));
console.log(mapAns);

/*


*/


//reducer

//accumulator = sum
//accumulator = 0;
//accumulator += 599;

const tPrice = products.reduce((accumulator,currentValue)=>{

  return  accumulator+currentValue.price;
},0)

console.log(tPrice + " Total Price Reducer");


let aT1 = [1,2,3,4,5,8,7,9,5,6];
let nAT1 =  aT1.reduce((h1,h2)=>{
    return h1+ h2;// here it wil take 1 ,2 and then =3 +3 then =6 + 4 then =10 +5 and etc...
})
console.log(nAT1);


let setA = [10,50,60,30,56,54];
//Data Structure: set {only unique value}
const set = new Set(setA);

set.add(11);
set.add(15);
console.log(set);
console.log(set.has(10));
set.delete(10);
console.log(set.has(10));
console.log(set.size);
set.clear();

console.log(set);
set.add(50);
set.add(50);
set.add(50);
set.add(56);
console.log(set);


//map 

const m1 = new Map([
    ["Devang", 19],
    [6, "test"],
    [true, 34],
    [[10,50,60], "NODE"]

])

m1.set({name: "Alex", age:19}, false);
console.log(m1);

console.log(m1.has("Devang"));

for(let [key,val] of m1){

    console.log(key,val);
}