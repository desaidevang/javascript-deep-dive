// ==========================================================
// 📘 DOM CRUD OPERATIONS (CREATE, READ, UPDATE, DELETE)
// ==========================================================


// ==========================================================
// 🔹 WHAT IS DOM CRUD ?
// ==========================================================

// CRUD =
// C → Create Element
// R → Read Element
// U → Update Element
// D → Delete Element


// ==========================================================
// 🔹 1. CREATE ELEMENT
// ==========================================================

// Create new element
const newDiv = document.createElement("div");

// Add content inside it
newDiv.innerText = "Hello I am New Div";

// Add class
newDiv.classList.add("card");

// Add ID
newDiv.id = "newCard";


// ==========================================================
// 🔹 2. ADD ELEMENT TO DOM
// ==========================================================

// Select parent
const parent = document.getElementById("card");

// Add at last
parent.append(newDiv);

// Add at first
parent.prepend(newDiv);

// Add before element
parent.before(newDiv);

// Add after element
parent.after(newDiv);


// ==========================================================
// 🔹 3. READ ELEMENT
// ==========================================================

// Read text
const text = document.getElementById("role").innerText;
console.log(text);

// Read HTML
const html = document.getElementById("desc").innerHTML;
console.log(html);

// Read attribute
const imgSrc = document.querySelector(".profile-img").getAttribute("src");
console.log(imgSrc);


// ==========================================================
// 🔹 4. UPDATE ELEMENT
// ==========================================================

// Update text
document.getElementById("role").innerText = "MERN Developer";

// Update HTML
document.getElementById("desc").innerHTML = "<b>Learning Advanced DOM</b>";

// Update attribute
document.querySelector(".profile-img")
.setAttribute("src","newImage.jpg");

// Update style
document.getElementById("card").style.backgroundColor = "black";


// ==========================================================
// 🔹 5. DELETE ELEMENT
// ==========================================================

// Remove element directly
document.getElementById("desc").remove();

// Old method
const parentEl = document.getElementById("card");
const childEl = document.getElementById("role");
parentEl.removeChild(childEl);


// ==========================================================
// 🔹 6. REPLACE ELEMENT
// ==========================================================

const newPara = document.createElement("p");
newPara.innerText = "I am replaced element";

const oldPara = document.getElementById("desc");

oldPara.replaceWith(newPara);


// ==========================================================
// 🔹 7. CLONE ELEMENT
// ==========================================================

const card = document.getElementById("card");

// true = deep clone
const cloneCard = card.cloneNode(true);

document.body.append(cloneCard);


// ==========================================================
// 🔹 8. INSERT ADJACENT ELEMENT
// ==========================================================

// beforebegin
card.insertAdjacentHTML("beforebegin","<p>Before Card</p>");

// afterbegin
card.insertAdjacentHTML("afterbegin","<p>Start of Card</p>");

// beforeend
card.insertAdjacentHTML("beforeend","<p>End of Card</p>");

// afterend
card.insertAdjacentHTML("afterend","<p>After Card</p>");


// ==========================================================
// 🔹 9. REAL WORLD CRUD EXAMPLE
// ==========================================================

// CREATE TODO
function addTodo(){
    const li = document.createElement("li");
    li.innerText = "New Task";
    document.getElementById("todoList").append(li);
}


// UPDATE TODO
function updateTodo(){
    document.querySelector("#todoList li").innerText = "Updated Task";
}


// DELETE TODO
function deleteTodo(){
    document.querySelector("#todoList li").remove();
}


// ==========================================================
// 🔹 10. BEST PRACTICE
// ==========================================================

// ❌ Avoid:
// innerHTML +=

// Because it causes:
// Reflow + Repaint (slow)

// ✅ Use:
// append()
// createElement()


// ==========================================================
// 🔹 INTERVIEW POINT
// ==========================================================

// append() vs appendChild()

// append():
// - accepts multiple elements
// - accepts string

// appendChild():
// - accepts only node
// - returns appended node


// ==========================================================
// END
// ==========================================================
