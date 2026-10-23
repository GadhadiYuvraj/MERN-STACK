/****************************************
 * Day 03 – JavaScript Loops
 * Covers:
 * 1. for
 * 2. for...in
 * 3. for...of
 * 4. while
 * 5. do...while
 ****************************************/


/* ========= 1. FOR LOOP ========= */
/* Use when number of iterations is known */

console.log("FOR LOOP");
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}


/* ========= 2. FOR...IN LOOP ========= */
/* Used to loop over object keys */

console.log("\nFOR...IN LOOP");
const person = {
  name: "Yuvraj",
  age: 22,
  city: "Vadodara"
};

for (let key in person) {
  console.log(key, ":", person[key]);
}


/* ========= 3. FOR...OF LOOP ========= */
/* Used to loop over iterable values (arrays, strings) */

console.log("\nFOR...OF LOOP");
const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


/* ========= 4. WHILE LOOP ========= */
/* Condition checked before execution */

console.log("\nWHILE LOOP");
let count = 1;

while (count <= 5) {
  console.log("Count:", count);
  count++;
}


/* ========= 5. DO...WHILE LOOP ========= */
/* Executes at least once */

console.log("\nDO-WHILE LOOP");
let number = 1;

do {
  console.log("Number:", number);
  number++;
} while (number <= 5);
