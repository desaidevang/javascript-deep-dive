//callback hell
/*
In JavaScript, a callback function is
a function that is passed as an 
argument to another function, to
be "called back" (executed) at a
later point in time or when a 
specific condition is met.
*/

//what is callback hell?
/*
"Callback hell" in JavaScript refers 
to a situation where multiple nested 
callback functions are used to handle 
a sequence of asynchronous operations
*/


const orderDetails={
    orderID: 465456,
    food:["cold coffee"],
    cost: 150,
    customer_name:"Devang",
    customer_location: "Ahmadabad",
    restaurant:"Starbucks"
}
function placeOrder(orderDetails,callback) {
    console.log(`🚀 Payment of rs. ${orderDetails.cost} is in progress. `);

    setTimeout(() => {
        console.log("✅ Payment is received and order get placed");
        orderDetails.status= true;
        callback(orderDetails);
    }, 3000);

}

function preparingOrder(orderDetails,callback) {
    console.log("🥗 Your food preparation of "+orderDetails.food + " started");
    setTimeout(() => {
        console.log("📦 Your order is now prepared");
        orderDetails.token = 65;
        callback(orderDetails);
    }, 3000);
}
function pickupOrder(orderDetails,callback) {
    console.log("🏍️  Delivery boy is on way to pickup order from "+orderDetails.restaurant);
    setTimeout(() => {
        console.log("👋 I have picked up the order");
        orderDetails.received = true;
        callback(orderDetails);
    }, 3000);
}

function deliverOrder(orderDetails,callback){
    console.log("🏍️  I am on my way to deliver order to "+ orderDetails.customer_location);

    setTimeout(() => {
        console.log("🏠 Order delivered successfully");
        orderDetails.deliver = true;
        callback(orderDetails);
    }, 3000);
}
function feedback(orderDetails){
 
    setTimeout(() => {
        console.log(`⭐ Thanks ${orderDetails.customer_name} for ordering with us. \nplease give us feedback!`);
    }, 3000);
}
placeOrder(orderDetails, (orderDetails) => {
    preparingOrder(orderDetails,() => {
        pickupOrder(orderDetails,()=>{
            deliverOrder(orderDetails,()=>{
                feedback(orderDetails,()=>{

                });
            });
        });
    });
});

//this is callback hell
//it's not readable