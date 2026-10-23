// ================================
// DAY 6: JAVASCRIPT OBJECTS
// ================================

// 1. Basic object
const person = {
    name: "Yuvraj",
    age: 22,
    isLearningJS: true
};

console.log(person);
console.log(person.name);
console.log(person.age);

// --------------------------------

// 2. Adding & updating properties
person.city = "Vadodara";
person.age = 23;

console.log(person);

// --------------------------------

// 3. Deleting a property
delete person.isLearningJS;
console.log(person);

// --------------------------------

// 4. Object with methods (functions inside object)
const user = {
    username: "gadhadiyuvraj",
    login() {
        console.log("User logged in");
    },
    logout() {
        console.log("User logged out");
    }
};

user.login();
user.logout();

// --------------------------------

// 5. Nested objects
const student = {
    name: "Amit",
    marks: {
        math: 85,
        science: 90
    }
};

console.log(student.marks.math);

// --------------------------------

// 6. Looping through object (for...in)
const car = {
    brand: "Tata",
    model: "Nexon",
    year: 2022
};

for (let key in car) {
    console.log(key + ":", car[key]);
}

// --------------------------------

// 7. Object inside array (real-life pattern)
const users = [
    { name: "Rahul", role: "Admin" },
    { name: "Neha", role: "User" },
    { name: "Karan", role: "Editor" }
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name + " - " + users[i].role);
}

// --------------------------------

// 8. Destructuring (important for interviews)
const product = {
    title: "Laptop",
    price: 55000,
    brand: "HP"
};

const { title, price } = product;
console.log(title, price);

// --------------------------------

// 9. Object.keys / values / entries
console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
