// ============================================================
// 📌 JAVASCRIPT OBJECTS — INTERNAL MEMORY BEHAVIOUR (V8 ENGINE)
// ============================================================


// ------------------------------------------------------------
// 1️⃣ Object Creation
// ------------------------------------------------------------

// Objects are NOT stored directly in Stack Memory.
// Stack stores only the reference (address)
// Actual object is stored in Heap Memory.

const user = {
    LastName: "Devang",
    FirstName: "Desai",
    DOB: "01/10/2006",
    Email: "devang@example.org"
};

/*

INTERNAL MEMORY MODEL:

STACK MEMORY                      HEAP MEMORY
------------                      ------------------------
user   -----------►        0xA1F  {
                                   "LastName"  : "Devang"
                                   "FirstName" : "Desai"
                                   "DOB"       : "01/10/2006"
                                   "Email"     : "devang@example.org"
                                 }

Stack → stores reference
Heap  → stores actual object

*/


// ------------------------------------------------------------
// 2️⃣ Adding Property (Mutation)
// ------------------------------------------------------------

// This DOES NOT create new object
// It modifies the same Heap memory location

user.Skills = "Node js, DevOps";

console.log(user.LastName);
console.log(user);

/*

Still same reference:

user = 0xA1F

Heap becomes:

0xA1F {
  "LastName"
  "FirstName"
  "DOB"
  "Email"
  "Skills"
}

*/


// ------------------------------------------------------------
// 3️⃣ Delete Property
// ------------------------------------------------------------

delete user.FirstName;
console.log(user);

/*

Engine removes key from SAME memory block

NO NEW OBJECT CREATED

user = 0xA1F

*/


// ------------------------------------------------------------
// 4️⃣ Object Keys are Internally Stored as STRINGS
// ------------------------------------------------------------

// Even if you write user.DOB internally JS treats it as:

console.log(user["Email"]);
console.log(user["DOB"]);

/*

Behind the scenes:

{
  "LastName": "Devang",
  "DOB": "01/10/2006"
}

Even this:

user[123]

becomes:

user["123"]

*/


// ------------------------------------------------------------
// 5️⃣ Object Iteration
// ------------------------------------------------------------

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


// for...in (not recommended for production)
for (let k in user) {
    console.log(k + " - " + user[k]);
}


// ------------------------------------------------------------
// 6️⃣ Array Destructuring (Stored in Stack)
// ------------------------------------------------------------

let arr = [10, 30, 50, 50, 40];
const [first, second] = arr;
console.log(first, second);


// ------------------------------------------------------------
// 7️⃣ for...of with Object Methods
// ------------------------------------------------------------

console.log("---");

for (let k of Object.keys(user)) {
    console.log(k + " - " + user[k]);
}

console.log("---");

for (let v of Object.values(user)) {
    console.log(v);
}

console.log("---");

for (let entry of Object.entries(user)) {
    console.log(entry);
}

console.log("---");

for (let [k, v] of Object.entries(user)) {
    console.log(k + " - " + v);
}


// ------------------------------------------------------------
// 8️⃣ Function inside Object (Stored in Heap)
// ------------------------------------------------------------

const user1 = {
    LastName: "Devang",
    FirstName: "Desai",
    DOB: "01/10/2006",
    Email: "devang@example.org",

    skills: function () {
        return `${this.LastName}: Skills are NODE, DEVOPS, RESTful API, AWS, DOCKER, CI/CD, CRM, ERP`;
    }
};

const user2 = {
    LastName: "XYZ",
    FirstName: "ABC",
    DOB: "01/10/2006",
    Email: "xyz@example.org"
};


// ------------------------------------------------------------
// 9️⃣ Function Reference Sharing
// ------------------------------------------------------------

user2.skills = user1.skills;

console.log(user1.skills());
console.log(user2.skills());

/*

INTERNAL MEMORY:

STACK                     HEAP
------                    -----------------------
user1.skills ----► 0xF21  function(){...}
user2.skills ----► 0xF21  function(){...}

Function is NOT copied

Both references point to SAME memory address

*/


// ------------------------------------------------------------
// 🔟 Shallow Copy (Spread Operator)
// ------------------------------------------------------------

let temp = { ...user2 };

temp.LastName = "TESTING";

console.log(user2);
console.log(temp);

/*

Now:

STACK                     HEAP
------                    -----------------------
user2 ------► 0xA1F       {...}
temp  ------► 0xB52       {...}

New Object Created ✔

BUT nested objects still share reference

*/


// ------------------------------------------------------------
// 1️⃣1️⃣ Deep Copy (structuredClone)
// ------------------------------------------------------------

let temp2 = structuredClone(user);

/*

Deep copy creates:

user.address   ----► 0xZ91
temp2.address  ----► 0xP77   ✔ NEW MEMORY

All nested objects are cloned

NO SHARED REFERENCES

*/

