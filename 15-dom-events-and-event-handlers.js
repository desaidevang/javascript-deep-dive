// ==========================================================
// 📘 JAVASCRIPT DOM EVENTS & EVENT HANDLERS (FULL NOTES)
// ==========================================================


// ==========================================================
// 🔹 1. WHAT IS EVENT ?
// ==========================================================

// Event = action performed by user or browser

// Examples:
// click
// double click
// key press
// mouse hover
// form submit
// scroll
// load


// ==========================================================
// 🔹 2. EVENT HANDLER WAYS
// ==========================================================


// ----------------------
// (1) INLINE HTML EVENT ❌ NOT RECOMMENDED
// ----------------------

// <button onclick="alert('Hello')">Click</button>



// ----------------------
// (2) USING JS PROPERTY
// ----------------------

const btn = document.getElementById("changeText");

btn.onclick = function(){
    console.log("Button Clicked");
};



// ----------------------
// (3) addEventListener ✅ BEST WAY
// ----------------------

btn.addEventListener("click", function(){
    console.log("Clicked using addEventListener");
});


// ==========================================================
// 🔹 3. COMMON EVENTS
// ==========================================================

// Mouse Events
// click
// dblclick
// mouseover
// mouseout
// mouseenter
// mouseleave

// Keyboard Events
// keydown
// keyup
// keypress

// Form Events
// submit
// change
// focus
// blur

// Window Events
// load
// resize
// scroll


// ==========================================================
// 🔹 4. EVENT OBJECT
// ==========================================================

btn.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target); // clicked element
    console.log(e.type);   // event type
});


// ==========================================================
// 🔹 5. KEYBOARD EVENT
// ==========================================================

document.addEventListener("keydown", function(e){
    console.log("Key Pressed:", e.key);
});


// ==========================================================
// 🔹 6. FORM SUBMIT EVENT
// ==========================================================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault(); // stop page reload
    console.log("Form Submitted");
});


// ==========================================================
// 🔹 7. MOUSE EVENTS
// ==========================================================

btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "yellow";
});

btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = "white";
});


// ==========================================================
// 🔹 8. EVENT BUBBLING
// ==========================================================

// Child → Parent → Grandparent

const parent = document.getElementById("card");

btn.addEventListener("click", function(){
    console.log("Button Clicked");
});

parent.addEventListener("click", function(){
    console.log("Card Clicked");
});


// ==========================================================
// 🔹 9. STOP BUBBLING
// ==========================================================

btn.addEventListener("click", function(e){
    e.stopPropagation();
});


// ==========================================================
// 🔹 10. EVENT CAPTURING
// ==========================================================

// true = capture phase

parent.addEventListener("click", function(){
    console.log("Capture Mode");
}, true);


// ==========================================================
// 🔹 11. EVENT DELEGATION 🔥 IMPORTANT
// ==========================================================

// Instead of adding event to each li

const ul = document.getElementById("todoList");

ul.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        console.log("List item clicked");
    }
});


// ==========================================================
// 🔹 12. REMOVE EVENT LISTENER
// ==========================================================

function sayHello(){
    console.log("Hello");
}

btn.addEventListener("click", sayHello);

// Remove it
btn.removeEventListener("click", sayHello);


// ==========================================================
// 🔹 13. ONLOAD EVENT
// ==========================================================

window.addEventListener("load", function(){
    console.log("Page Fully Loaded");
});


// ==========================================================
// 🔹 14. SCROLL EVENT
// ==========================================================

window.addEventListener("scroll", function(){
    console.log("Scrolling...");
});


// ==========================================================
// 🔹 15. INPUT CHANGE EVENT
// ==========================================================

const input = document.querySelector("input");

input.addEventListener("change", function(){
    console.log(input.value);
});


// ==========================================================
// 🔹 INTERVIEW QUESTIONS
// ==========================================================

// Difference:
// onclick vs addEventListener ?

// onclick:
// only one handler at a time ❌

// addEventListener:
// multiple handlers allowed ✅


// ==========================================================
// END
// ==========================================================
