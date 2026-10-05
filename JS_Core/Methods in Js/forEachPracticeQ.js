// for a given arrar of numbers, print the square of each value using the for each loop

let arr = [5,19,29,22,89,449]

// arr.forEach( (sqVal) => {    
//     // let num = sqVal * sqVal
//     //  console.log(num);
//     console.log(sqVal * sqVal);
// })

let calSquare = (num) => {
    console.log(num * num);
}

arr.forEach(calSquare)

// forEach()
// → runs a function for each element
// → does NOT create/return a new array from the callback results

// map()
// → runs a function for each element
// → creates and returns a NEW array containing the returned values