/************************************
 * Day 04 – JavaScript Functions
 * Covers:
 * 1. Function declaration
 * 2. Function with parameters
 * 3. Return statement
 * 4. Arrow function
 ************************************/


/* ========= 1. FUNCTION DECLARATION ========= */
function greet() {
  console.log("Hello, welcome to JavaScript");
}

greet();


/* ========= 2. FUNCTION WITH PARAMETERS ========= */
function add(a, b) {
  console.log("Sum:", a + b);
}

add(10, 20);


/* ========= 3. RETURN STATEMENT ========= */
function multiply(x, y) {
  return x * y;
}

let result = multiply(5, 4);
console.log("Multiplication result:", result);


/* ========= 4. ARROW FUNCTION ========= */
const subtract = (a, b) => {
  return a - b;
};

console.log("Subtraction:", subtract(20, 5));
