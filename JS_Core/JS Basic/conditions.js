// ==============================
// Day 02 – JavaScript Conditions
// ==============================

// 1. IF statement
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}

// 2. IF–ELSE statement
let marks = 50;

if (marks >= 35) {
  console.log("Result: Pass");
} else {
  console.log("Result: Fail");
}

// 3. IF–ELSE IF–ELSE
let score = 92;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// 4. Nested IF
let hasID = true;
let hasTicket = false;

if (hasID) {
  if (hasTicket) {
    console.log("Entry allowed");
  } else {
    console.log("Ticket required");
  }
} else {
  console.log("ID required");
}

// 5. Logical operators with conditions
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Admin access granted");
} else if (isLoggedIn && !isAdmin) {
  console.log("User access granted");
} else {
  console.log("Please log in");
}

// 6. Ternary operator
let temperature = 30;

let weather =
  temperature > 25 ? "Hot Weather" : "Cool Weather";

console.log(weather);

// 7. Switch statement
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day");
}
