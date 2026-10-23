/************************************************
 * Day 02 - JavaScript Operators
 * Covers:
 * 1. Arithmetic Operators
 * 2. Assignment Operators
 * 3. Comparison Operators
 * 4. Logical Operators
 * 5. Unary Operators
 * 6. Ternary Operator
 ************************************************/

/* ========= 1. Arithmetic Operators ========= */
let a = 10;
let b = 3;

console.log("Arithmetic Operators");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);


/* ========= 2. Assignment Operators ========= */
let x = 5;
x += 2;
x -= 1;
x *= 3;
x /= 2;

console.log("\nAssignment Operators");
console.log("Final value of x:", x);


/* ========= 3. Comparison Operators ========= */
let p = 10;
let q = "10";

console.log("\nComparison Operators");
console.log("p == q:", p == q);
console.log("p === q:", p === q);
console.log("p != q:", p != q);
console.log("p !== q:", p !== q);
console.log("p > 5:", p > 5);
console.log("p < 5:", p < 5);


/* ========= 4. Logical Operators ========= */
let age = 22;
let hasId = true;

console.log("\nLogical Operators");
console.log("AND:", age >= 18 && hasId);
console.log("OR:", age < 18 || hasId);
console.log("NOT:", !hasId);


/* ========= 5. Unary Operators ========= */
let count = 1;
count++;
count--;

console.log("\nUnary Operators");
console.log("Count:", count);


/* ========= 6. Ternary Operator ========= */
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

console.log("\nTernary Operator");
console.log("Result:", result);
