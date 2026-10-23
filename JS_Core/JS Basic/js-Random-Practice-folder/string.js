// const name = "Yuvraj";
// const age = 22;

// console.log(`Name : ${name}, Age : ${age}`);

let str1 = "Hello ";
let str2 = "Yuvraj ";

let str3 = str1 + str2;

console.log(`${str1}, ${str2}!!`); // this is template literal
console.log(str3.length);

console.log(str3[0], str3[1], str3[2],str3[3],str3[4]);

console.log(str3.length);

let obj = {
    item : "Pen",
    cost : 10
};

let output = `the cost of ${obj.item} is ${obj.cost} rupees.`;
console.log(output);

// escape characters

console.log(`Hello Yuvraj,\nHow are you \t doing great`);

//string methods
let str4 = "Myself Yuvraj";

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str4.trim()); // this only remove first and last blank/white spaces it does not remvoe middle blank or whitespaces.
//strings are immutable so this methods are returning a copy of that string its not changing real string 
// for e.g str1 --> to uppercase--> it will create a copy str1(copy).touppercase--> this is how it works and it will not change original str1
// se below result 
console.log(str1);


// learn other methods
console.log(str3.slice(3));
console.log(str4.length);
console.log(str4.slice(7,13)); // ending value non inclusive

console.log(str3.concat(str4));// concatination method

let char = "hoig hoig";

console.log(char.replace("ho","mo"));// this will only replace once whichever the one comes first
console.log(char.replaceAll("h","P")); //This will replace all the repeating character


console.log(str4.charAt(12)); // charAt() is like in str4 tell me what CHARACTER is there AT index 4(N) CharAt(Index_Value)

// NOTE: we make changes in string by useing string methods like replace
// we cannot change value by usign index number like str4[4] = "b" this is not going to work

console.log(char) // again its not going to change the real value until you do the below thing
char = char.replace("h","M");
console.log(char); // see you just kindoff change the complete string value

//Practice Question (failed one)

let Firstname = "Yuvraj";
let Lastname ="Gadhadi"
let FullName = Firstname+Lastname;


console.log(`@${FullName.trim()}${FullName.length}`)

//Advance and correct aproach

let fullname = "Yuvraj Gadhadi";

fullname = fullname.replaceAll(" ","");
console.log(`@${fullname}${fullname.length}`);