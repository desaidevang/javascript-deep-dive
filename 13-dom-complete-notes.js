// ==========================================================
// 📘 JAVASCRIPT DOM COMPLETE NOTES (BEGINNER → ADVANCED)
// ==========================================================


// ==========================================================
// 🔹 1. WHAT IS DOM ?
// ==========================================================

// DOM = Document Object Model
// Browser converts HTML into tree of objects (nodes)
// So JavaScript can:
// - Read HTML
// - Change HTML
// - Change CSS
// - Add / Remove Elements
// - Handle Events


// ==========================================================
// 🔹 2. WINDOW vs DOCUMENT
// ==========================================================

// window = browser tab
// document = HTML page inside browser

// window.document === document  // true

// Structure:
// window
//   └── document
//        └── html
//             └── head
//             └── body



// ==========================================================
// 🔹 3. SELECTING ELEMENTS
// ==========================================================

// By ID (returns single element)
document.getElementById("card")

// By Class (returns HTMLCollection)
document.getElementsByClassName("card")

// Access element from HTMLCollection
document.getElementsByClassName("card")[0]

// By Tag
document.getElementsByTagName("p")

// querySelector (returns first match)
document.querySelector("#card")
document.querySelector(".card")
document.querySelector("p")

// querySelectorAll (returns NodeList)
document.querySelectorAll(".card")


// ==========================================================
// 🔹 4. CHANGING CONTENT
// ==========================================================

// Includes HTML tags
element.innerHTML = "<h1>Hello</h1>"

// Only visible text
element.innerText = "Hello"

// Includes hidden text also
element.textContent = "Hello"


// ==========================================================
// 🔹 5. CHANGING STYLES
// ==========================================================

// CSS → JS uses camelCase

element.style.color = "red"
element.style.backgroundColor = "black"
element.style.fontSize = "20px"
element.style.borderRadius = "10px"


// ==========================================================
// 🔹 6. CLASS MANIPULATION
// ==========================================================

element.classList.add("dark")
element.classList.remove("dark")
element.classList.toggle("dark")
element.classList.contains("dark")


// ==========================================================
// 🔹 7. CREATING ELEMENT
// ==========================================================

const div = document.createElement("div");
div.innerText = "Hello";


// ==========================================================
// 🔹 8. ADDING ELEMENT
// ==========================================================

parent.appendChild(div)   // old
parent.append(div)        // modern


// ==========================================================
// 🔹 9. REMOVING ELEMENT
// ==========================================================

element.remove()

// old way
parent.removeChild(child)


// ==========================================================
// 🔹 10. EVENTS
// ==========================================================

button.addEventListener("click", function(){
    alert("Clicked");
});


// Common Events:
// click
// mouseover
// mouseout
// keydown
// submit
// change



// ==========================================================
// 🔹 11. EVENT OBJECT
// ==========================================================

button.addEventListener("click", function(e){
    console.log(e.target);
});


// ==========================================================
// 🔹 12. EVENT BUBBLING
// ==========================================================

// Child → Parent → Grandparent

e.stopPropagation();


// ==========================================================
// 🔹 13. EVENT DELEGATION (PERFORMANCE)
// ==========================================================

parent.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        console.log("Item clicked");
    }
});


// ==========================================================
// 🔹 14. ATTRIBUTES
// ==========================================================

element.getAttribute("src")
element.setAttribute("src","img.jpg")


// ==========================================================
// 🔹 15. FORMS
// ==========================================================

input.value
checkbox.checked

form.addEventListener("submit", function(e){
    e.preventDefault();
});


// ==========================================================
// 🔹 16. DOM TRAVERSAL
// ==========================================================

element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling



// ==========================================================
// 🔹 17. TIMING FUNCTIONS
// ==========================================================

setTimeout(()=>{
    console.log("Hi");
},2000);

setInterval(()=>{
    console.log("Running");
},1000);

clearInterval(id)



// ==========================================================
// 🔹 18. REFLOW vs REPAINT (INTERVIEW)
// ==========================================================

// Reflow → Layout change (width, height etc)
// Repaint → Color/style change

// Reflow is slow ❌
// Repaint is faster ✅


// ==========================================================
// 🔹 19. DOCUMENT READY
// ==========================================================

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded");
});


// ==========================================================
// 🔹 20. BEST PRACTICE
// ==========================================================

// Avoid too many DOM manipulations inside loops
// Use event delegation
// Use classList instead of style
// Cache DOM elements in variables

// ==========================================================
// END
// ==========================================================
