# 📘 TypeScript Fundamentals Assignment

This assignment demonstrates fundamental TypeScript concepts including data typing, interfaces, class inheritance, type guards, generics, and data structure manipulation. All solutions follow best coding practices and are implemented in a single file.

---

## 📁 Project Structure

```
├── solutions.ts   # All 7 coding solutions
├── blog-1.md      # Blog post: `any` vs `unknown` & type narrowing
├── blog-2.md      # Blog post: `Pick` & `Omit` utility types
└── README.md
```

---

## 💻 Problem Solving (50 Marks)

All solutions are in `solutions.ts`.

### Problem 1 — `filterEvenNumbers`
Accepts an array of numbers and returns only the even ones.

```ts
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// Output: [2, 4, 6]
```

---

### Problem 2 — `reverseString`
Takes a string and returns its reversed version.

```ts
reverseString("typescript");
// Output: "tpircsepyt"
```

---

### Problem 3 — `checkType` with Union Type
Defines a `StringOrNumber` union type and uses type guards to identify the input type.

```ts
checkType("Hello"); // Output: "String"
checkType(42);      // Output: "Number"
```

---

### Problem 4 — `getProperty` (Generic Function)
A generic function that retrieves a value from an object by key, constrained to valid keys only.

```ts
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
// Output: "John Doe"
```

---

### Problem 5 — `toggleReadStatus` with Interface
Defines a `Book` interface and returns a new object with `isRead: true` added.

```ts
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);
// Output: { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024, isRead: true }
```

---

### Problem 6 — `Person` & `Student` Classes
`Person` base class extended by `Student`, which adds a `grade` property and a `getDetails()` method.

```ts
const student = new Student("Alice", 20, "A");
student.getDetails();
// Output: "Name: Alice, Age: 20, Grade: A"
```

---

### Problem 7 — `getIntersection`
Returns elements that appear in both input arrays.

```ts
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// Output: [3, 4, 5]
```

---

## ✍️ Blog Writing (10 Marks)

Two blog posts have been written covering the following topics:

### Blog 1 — `any` vs `unknown` & Type Narrowing (`blog-1.md`)
Explains why `any` is considered a "type safety hole" and how `unknown` offers a safer alternative when dealing with unpredictable data. Covers the concept of type narrowing with practical code examples.

### Blog 2 — `Pick` & `Omit` Utility Types (`blog-2.md`)
Demonstrates how `Pick` and `Omit` utility types help avoid code duplication by creating focused "slices" of a master interface, keeping your codebase DRY (Don't Repeat Yourself).

---

### Run the Solutions

```bash
tsc solutions.ts
node solutions.js
```

Or use `ts-node` for direct execution:

```bash
npx ts-node solutions.ts
```

---
