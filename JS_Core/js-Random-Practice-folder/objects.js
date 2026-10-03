// //singleton ye apne tarike ka ek hi object hai
// // if make from constructor then its always singleton
// // object literals

// // declaring a Symbol

// // const mySym = Symbol("Key1");

// // const JsUser = {
// //     name: "Yuvraj",
// //     age: 22,
// //     [mySym]: "MyKey1",
// //     location: "Gujarat",
// //     email: "yuvraj@google.com",
// //     isLoggedIn: false,
// //     lastLoggedInDays:["Monday", "Tuesday", "Saturday"]
// // }

// // console.log(JsUser.name); // accessing Objects through Keys
// // console.log(JsUser["email"])
// // console.log(JsUser[mySym])

// // // Accessing full Object 
// // console.log(JsUser);

// // // Updating Information in Obj (JsUser)

// // JsUser.age = 23;
// // JsUser.email ="yuvraj@outlook.com";
// // console.log(JsUser["email"])
// // console.log(JsUser.age);

// // console.log(JsUser);
// // // Making object Unchangable/ Freeze

// // // Object.freeze(JsUser);

// // // JsUser.name = "Yuvraj Gadhadi";

// // console.log(JsUser.name)

// // //--------------------------------------
// // // before working ahead remove the freeze or comment that part for now 

// // console.log("--------------------------------------\n--------------------------------------\n\n")

// // JsUser.greeting = function(){
// //     console.log("Hello Friend");
// // }

// // JsUser.greetingtwo = function(){
// //     console.log(`Hello My Friend ${this.name}!!`);
// // }

// // console.log(JsUser.greeting());
// // console.log(JsUser.greetingtwo())

// // now singleton 

// // const SingletonObj = new Object();
// // console.log(SingletonObj);

// const user = new Object();

// user.id = "UI001";
// user.MixName = "YUGA"
// user.isLoggedIn = false;

// // console.log(user)

// const regUser = {
//     ...user,
//     email: "yuva@gamil.com",
//     fullName: {
//         userFullName: {
//             FirstName: "Yuvraj",
//             LastName: "Gadhadi"
//         }
//     }
// }


// console.log(regUser);

// console.log(Object.keys(regUser));
// console.log(Object.values(regUser));
// console.log(Object.entries(regUser));

// console.log(regUser.hasOwnProperty('isLoggedIn'));
// console.log(regUser.hasOwnProperty('isLogged'));







// // console.log(regUser.fullName.userFullName);
// // obj combining
// // const obj1 ={1: "a", 2: "b"}
// // const obj2 ={3: "a", 4: "b"}
// // const obj3 ={5: "a", 6: "b"}

// // const obj3 ={obj1, obj2} // this will assine obj1 and obj2 in obj3 and print obj1 and obj2 individually in obj3 

// // const obj4 = Object.assign({}, obj1, obj2, obj3);

// // const obj4 = { ...obj1, ...obj2, ...obj3}

// // console.log(obj4);

// part 3
// destructuring 

const course ={
    coursename : "JS with Chai aur Code",
    price : "Free",
    CourseTeacher : "Hitesh"
}

// console.log(course.coursename);

const {CourseTeacher : Teach} = course;

console.log(Teach);








