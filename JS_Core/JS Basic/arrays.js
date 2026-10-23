/************************************
 * Day 05 – JavaScript Arrays
 * Covers:
 * 1. Creating arrays
 * 2. Accessing elements
 * 3. Updating elements
 * 4. Array length
 * 5. Common array methods
 ************************************/


/* ========= 1. CREATE ARRAY ========= */
let numbers = [10, 20, 30, 40, 50];
let fruits = ["Apple", "Banana", "Mango"];

console.log(numbers);
console.log(fruits);


/* ========= 2. ACCESS ELEMENTS ========= */
console.log(numbers[0]); // first element
console.log(fruits[1]);  // second element


/* ========= 3. UPDATE ELEMENT ========= */
fruits[1] = "Orange";
console.log(fruits);


/* ========= 4. ARRAY LENGTH ========= */
console.log("Length of numbers array:", numbers.length);


/* ========= 5. ARRAY METHODS ========= */

// push – add at end
numbers.push(60);
console.log(numbers);

// pop – remove from end
numbers.pop();
console.log(numbers);

// unshift – add at beginning
numbers.unshift(5);
console.log(numbers);

// shift – remove from beginning
numbers.shift();
console.log(numbers);
