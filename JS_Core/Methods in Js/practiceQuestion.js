// We are given an array of marks of students. Filter out of the marks of students that scored 90+

// let marks = [97, 64 ,60, 65 , 70, 90, 94, 87, 60]


// let topperMarks = marks.filter((val) => {
//     return val > 90
// })

// console.log(topperMarks);

// Q2) Take a number n as  nput from user.Creae an array of numbers from 1 to n. (i am running js code in terminal soo ill keep static input)
//2.1)  use reduce method to calculate sum of all numbers in the array.

let n = 7;

let arr = [];

for(let i = 1; i <= n ; i++){
    arr[i-1] = i

}


console.log(arr);

let sumArr = arr.reduce((prev , curr) => {
     return prev + curr
})

console.log(sumArr);

// 2.2) Use the Reduce method to calculate product of all numbers in the array. (AKA its called Factorial of N number)

let productOfAllNumber = arr.reduce((prev, curr) => {
    return prev*curr;

})

console.log(productOfAllNumber);
