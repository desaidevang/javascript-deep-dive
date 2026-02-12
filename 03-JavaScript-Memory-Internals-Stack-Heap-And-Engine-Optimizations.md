# 03 - JavaScript Memory Internals: Stack, Heap & Engine Optimizations

---

## 📌 Introduction

Understanding how memory works in JavaScript helps us move from writing code to understanding how the engine actually executes it.

This note covers:

- How CPU uses memory
- Memory addresses & bits
- Stack vs Heap
- Primitives vs Non-Primitives
- Immutability
- Garbage Collection
- 32-bit vs 64-bit systems
- Engine optimizations (like small integers & tagged pointers)

---

# 1️⃣ How Programs Run in Memory

When a program runs:

1. Code is stored in **storage (SSD/HDD)**.
2. When executed, it is loaded into **RAM**.
3. CPU processes instructions from RAM.

Memory in RAM is divided into **addresses**.

Example:

| Address  | Value |
|-----------|--------|
| 0x1000    | 10     |
| 0x1008    | 10     |

Each variable gets its own memory location.

---

# 2️⃣ How CPU Knows Which Variable to Change

Example:

```js
let a = 10;
let b = 10;

b = 20;
```

Even though both `a` and `b` store `10`, they have different memory addresses.

| Variable | Address  | Value |
|-----------|----------|--------|
| a         | 0x1000   | 10     |
| b         | 0x1008   | 10     |

When we do:

```js
b = 20;
```

The CPU updates only address `0x1008`.

It does NOT search for the value `10`.

👉 CPU works with **addresses**, not values.

---

# 3️⃣ Address Space & Bits

If memory has:

- 16 locations → Need 4 bits (2⁴ = 16)
- 32 locations → Need 5 bits (2⁵ = 32)

### 32-bit vs 64-bit Systems

| System | Address Size | Max Addressable Memory |
|--------|-------------|------------------------|
| 32-bit | 4 bytes     | ~4GB                   |
| 64-bit | 8 bytes     | Extremely large        |

64-bit systems can reference much larger memory space.

---

# 4️⃣ Stack vs Heap

JavaScript memory is divided into two major areas:

## 🔹 Stack

- Fast memory
- Fixed size
- Works in LIFO (Last In First Out)
- Stores:
  - Function calls
  - Local variables
  - Primitive values (usually)
  - References (addresses)

Example:

```js
let x = 10;
```

Small primitive values are often stored directly in stack.

---

## 🔹 Heap

- Large memory region
- Slower than stack
- Dynamic allocation
- Stores:
  - Objects
  - Arrays
  - Functions
  - Large strings
  - Complex data structures

Example:

```js
let user = { name: "Devang" };
```

Stack:
```
user → 0x4500
```

Heap:
```
0x4500 → { name: "Devang" }
```

Stack stores the reference.
Heap stores the actual object.

---

# 5️⃣ Why Not Store Everything in Stack?

Stack has limitations:

1. Limited size (MB range)
2. Fixed allocation
3. Must be extremely fast
4. Not suitable for dynamic resizing

If we stored large or dynamic data in stack:

- Memory shifting would be expensive
- Address updates would be inefficient
- Stack overflow could happen

Heap solves this by allowing flexible memory allocation.

---

# 6️⃣ Primitives vs Non-Primitives

## ✅ Primitives

- number
- boolean
- null
- undefined
- bigint
- symbol
- string (special case)

Small primitive values are usually:

- Stored directly in stack
- Or stored in CPU registers
- Or optimized internally by the engine

Example:

```js
let a = 10;
a = 50;
```

The stack slot updates the value directly.

---

## ✅ Non-Primitives (Reference Types)

- Object
- Array
- Function

Always stored in heap.

Stack stores only the reference.

---

# 7️⃣ Strings – Special Case

Strings are primitives.

But they are often stored in heap because:

- They can be large
- They are immutable
- Memory reuse is easier

Example:

```js
let name = "DEVANG";
```

Stack:
```
name → 0x6000
```

Heap:
```
0x6000 → "DEVANG"
```

If changed:

```js
name = "DEV";
```

A new string is created.
Stack reference updates.

Old string becomes eligible for garbage collection.

---

# 8️⃣ Immutability

Primitives in JavaScript are immutable.

This means:

```js
let a = 10;
a = 20;
```

The value `10` is not modified.
Instead:

- A new value `20` replaces it.
- Old value may be garbage collected.

---

# 9️⃣ Garbage Collection (GC)

JavaScript automatically cleans unused heap memory.

If:

- No stack reference
- No object reference

Then GC removes it.

Most engines use:

- Mark and Sweep algorithm
- Generational Garbage Collection

Unlike C, we do not manually free memory.

---

# 🔟 Engine Optimizations

Modern JS engines (like V8) apply optimizations.

## 🔹 Small Integer Optimization (SMI)

Small integers may:

- Be stored directly
- Avoid heap allocation
- Improve performance

## 🔹 Tagged Pointers

Engines use special bits inside memory addresses to indicate:

- Is this a small integer?
- Is this a pointer to heap?
- Is this a special value (null, undefined)?

This allows faster type detection.

---

# 1️⃣1️⃣ Arrays & Memory Formula

In low-level languages (C/C++):

Array element address:

```
Base Address + (Index × Size)
```

Example:

```
1000 + (3 × 8) = 1024
```

But JavaScript arrays:

- Are dynamic
- Can hold mixed types
- Are not always stored in continuous memory

So this formula does not always apply in JS.

---

# 1️⃣2️⃣ Boolean & Special Value Reuse

Values like:

- true
- false
- null
- undefined

Are often internally shared representations.

Multiple variables may reference the same internal value.

---

# 📌 Final Summary

### Stack:
- Stores primitives (usually small ones)
- Stores references
- Stores function call frames
- Very fast
- Limited size

### Heap:
- Stores objects
- Stores arrays
- Stores functions
- Stores large strings
- Dynamic allocation
- Garbage collected

---

# ✅ Important Correction

Incorrect statement:

> "All actual data is stored in heap whether primitive or non-primitive."

Correct statement:

> Complex data is stored in heap.  
> Small primitive values are usually stored directly in stack or registers.  
> Engine may optimize memory internally.

---

# 🚀 Conclusion

JavaScript abstracts memory management from developers.

We don’t control:

- Memory allocation
- Address manipulation
- Garbage collection

But understanding:

- Stack vs Heap
- Immutability
- Engine optimizations
- Memory references

Helps us write better, more efficient code. 

---

End of Notes.
