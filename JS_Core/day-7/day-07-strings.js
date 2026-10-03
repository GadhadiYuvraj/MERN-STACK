// ================================
// Day 07 – JavaScript Strings
// ================================

// 1. Basic string
let name = "Yuvraj";
console.log(name);
console.log(name.length);

// --------------------------------

// 2. String methods (case change)
let city = "Vadodara";
console.log(city.toUpperCase());
console.log(city.toLowerCase());

// --------------------------------

// 3. Accessing characters
let language = "JavaScript";
console.log(language[0]);      // J
console.log(language.charAt(4)); // S

// --------------------------------

// 4. String slicing
let message = "Learning JavaScript is fun";
console.log(message.slice(0, 8));     // Learning
console.log(message.slice(9, 19));    // JavaScript

// --------------------------------

// 5. String includes
let email = "test@example.com";
console.log(email.includes("@"));     // true
console.log(email.includes("gmail")); // false

// --------------------------------

// 6. Replace text
let text = "I love JS";
let newText = text.replace("JS", "JavaScript");
console.log(newText);

// --------------------------------

// 7. Split and join (VERY IMPORTANT)
let sentence = "JavaScript is powerful";
let words = sentence.split(" ");
console.log(words);

let joinedSentence = words.join("-");
console.log(joinedSentence);

// --------------------------------

// 8. Trim spaces
let username = "   yuvraj   ";
console.log(username.trim());

// --------------------------------

// 9. String concatenation
let firstName = "Yuvraj";
let lastName = "Gadhadi";
console.log(firstName + " " + lastName);

// --------------------------------

// 10. Template literals (modern way)
let age = 22;
console.log(`My name is ${firstName} and I am ${age} years old`);
