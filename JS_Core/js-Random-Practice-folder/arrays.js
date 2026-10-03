// let marks = [20, 45, 74, 34, 76, 89, 32];

// console.log(marks + "\nLength of arr is : " +marks.length);

// let heros = ["ironman", "spiderman", "thor", "hulk", "captain america"];

// console.log("Heros are : " + heros);
// console.log("Type of heros is : " + typeof heros);
// console.log(`Type of Marks is : ${typeof marks}` );


// //properties give some kind of value
// //methods perform some kind of action

// //let marks = [20, 45, 74, 34, 76, 89, 32];

// marks[0] = 67
// console.log(marks);// array in  js is mutable

// // looping over array
// //let heros = ["ironman", "spiderman", "thor", "hulk", "captain america"];
// // for(let idx in heros){
// //     console.log(heros[idx]);
// // }

// // for(let idx = 0; idx < heros.length; idx++){
// //     console.log(heros[idx]);
// // }

// // for(let hero of heros){
// //     console.log(hero);
// // }

// // Practice question

// // let studentMarks = [85,97,44,37,76,60];
// // let sum = 0;

// // for(let value of studentMarks){
// //     console.log(value);
// //     sum += value;
// // }
// // console.log(sum)
// // let avg = sum/studentMarks.length;
// // console.log(`Avg is ${avg}`);

// // practice question 2
// // lets do this with "for_of_loop" first

// let items =[250, 645, 300, 900, 50];
// // let idx = 0;

// // for( let price of items){
// //     console.log(`Price at Index ${idx} = ${price}`);
// //     idx++;
    
// // } 
// // the above one is complecated dont use that one just a practice 

// let percentage = 10;
// for(let idx = 0 ; idx < items.length; idx++){
//     let discountprice = items[idx] *(percentage/100);
//     // console.log(discountprice);
//     // let sellingprice = items[idx] - discountprice; // another way below
//     // items[idx] = items[idx - discountprice]; // another way to write this same thing 
//     items[idx] -= discountprice;
//     console.log(`Offer price Right now is : ${items[idx]}`);
    
// }
// console.log(items);

// array methods

let FoodItems = ["Potato", "apple", "litchi", "tomato"];
// console.log(FoodItems);

FoodItems.push("Chips", "Burger", "paneer");
// console.log(FoodItems);

let deleteitem = FoodItems.pop();
// console.log(FoodItems);
// console.log(deleteitem);

// console.log(FoodItems.toString());
// console.log(FoodItems);

let marks = [55,98,65,78,79,96,46]
// console.log(marks.toString());

let marvel = ["Thor", "Spiderman", "Ironman"];
let DC = ["Superman", "Batman", "Flash"];

let superHeros = marvel.concat(DC);

console.log(marvel);
// console.log(DC);
// console.log(superHeros);

marvel.unshift("antman") //unshift works as push but this addes value at first   
console.log(marvel);

marvel.shift(); // this works as pop but this delete value from start
console.log(marvel);

// superhero arr = ["Thor", "Spiderman", "Ironman", "Superman", "Batman", "Flash"]; this is just for visualisation already concat above

console.log(superHeros.length) // it says 6 but indx start from 0 so its 5.

// slice returns a piece of the array and it does not make changes in original array
console.log(superHeros.slice("0","3")); // this will print first 3 heros

// splice method make changes in original array (add, remove, replace)
let arr = [1,2,3,4,5,6,7];
let newarr = arr.splice(3,3,101,102,104); // syntax spilce(starting indx, delete_how_much_from starting index, now add new one but this will add from the starting index) by starting index i mean index which you have given in spilce
console.log(newarr);
console.log(arr);

newarr = arr.splice(2,0,33,44,55);
console.log(newarr);
console.log(arr);

//now if i only use splice staring indx then it will work as slice

newarr = arr.splice(2);
console.log(newarr);
console.log(arr); // now only 1st two elements are there and resest are deleted

// Practice Question for methods

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"]
console.log(companies.shift())
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);




