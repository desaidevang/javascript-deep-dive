//promises in javascript

/*
Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation 
and its resulting value. They provide a cleaner and more manageable approach to handling asynchronous code than traditional callbacks, avoiding "callback hell" 
and allowing for better control flow and error handling.
*/

// const p1 = fetch("https://api.github.com/users");

// const p2 = p1.then((response)=>{
// return response.json();  //async
// })

// p2.then((response)=>{
//     console.log(response);
// })


// for(let i =0;i< 100;i++){
// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{

//     console.log(data);
// // let jsObject = JSON.parse(data);
// // console.log(jsObject);
// })
// .catch((error)=>{
//     console.log("Failed!");
// })
// }

fetch("https://api.github.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{

    console.log(data);
// let jsObject = JSON.parse(data);
// console.log(jsObject);
})
.catch((error)=>{
    console.log("Failed!");
})




// console.log(response);
//     Response {
//   status: 200,
//   statusText: 'OK',
//so now convert in js object

//asynchronous. time is not predicable. it make take more or less
//so client will request to github server so
//p1 = pending
//if give response then p1 = fulfilled
//if not then p1 = reject

//promise: object 1: pending -> 2: fulfilled or -> 2: reject
//read p1 only when reject or fulfilled


//convert object to json 


const car = {
  type: "Fiat",
  model: "500",
  color: "white",
//  c: undefined //ignore
};

console.log(JSON.stringify(car));



const b1 = new Promise((resolve,reject)=>{
   // resolve("ok");
//    resolve({
//     name:"devang",
//     reason:"ok"
//    })
   reject("REJECTED");
})

b1.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error)
})

const orderDetails={
    orderID: 465456,
    food:["cold coffee"],
    cost: 150,
    customer_name:"Devang",
    customer_location: "Ahmadabad",
    restaurant:"Starbucks"
}
function placeOrder(orderDetails){
    return new Promise((resolve,reject)=>{
        console.log(`🚀 Payment of rs. ${orderDetails.cost} is in progress.`);

        setTimeout(()=>{
            console.log("✅ Payment is received and order get placed");
            orderDetails.status = true;
            resolve(orderDetails);
        },3000);
    })
}
function preparingOrder(orderDetails){
    return new Promise((resolve,reject)=>{
        console.log("🥗 Your food preparation of "+orderDetails.food+" started");

        setTimeout(()=>{
            console.log("📦 Your order is now prepared");
            orderDetails.token = 65;
            resolve(orderDetails);
        },3000);
    })
}
function pickupOrder(orderDetails){
    return new Promise((resolve,reject)=>{
        console.log("🏍️ Delivery boy is on way to pickup order from "+orderDetails.restaurant);

        setTimeout(()=>{
            console.log("👋 I have picked up the order");
            orderDetails.received = true;
            resolve(orderDetails);
        },3000);
    })
}
function deliverOrder(orderDetails){
    return new Promise((resolve,reject)=>{
        console.log("🏍️ I am on my way to deliver order to "+orderDetails.customer_location);

        setTimeout(()=>{
            console.log("🏠 Order delivered successfully");
            orderDetails.deliver = true;
            resolve(orderDetails);
        },3000);
    })
}
function feedback(orderDetails){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`⭐ Thanks ${orderDetails.customer_name} for ordering with us.
please give us feedback!`);
            resolve(orderDetails);
        },3000);
    })
}
placeOrder(orderDetails)
.then(preparingOrder)
.then(pickupOrder)
.then(deliverOrder)
.then(feedback)
.catch((err)=>{
    console.log("❌ Something went wrong:",err);
});
