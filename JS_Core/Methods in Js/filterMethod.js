// Creates a new array of elements that give true for a condition/filter
// Find all the Even & Odd numbers from arr

let arr = [54,634,687,434,87,898,99,75,99,33,55,77,22,,66,88,77,542,98,809]

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})

console.log(evenArr);

let oddArr = arr.filter((val) => {
    return val % 2 !== 0;
})

console.log(oddArr);

let numGreaterThen = arr.filter( (val) => {
    return val > 390;
})

console.log(numGreaterThen);

// filter() creates and returns a NEW array containing the filtered values. 

// filter()
// → check every element against a condition
// → keeps only elements where condition = true
// → creates a new array