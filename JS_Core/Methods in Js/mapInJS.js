 let nums = [67, 52, 89 ]

 let numSq = nums.map((val) => {
    // console.log(val)
    return val * val;
 }); 



console.log(numSq);

// forEach()
// → runs a function for each element
// → does NOT create/return a new array from the callback results

// map()
// → runs a function for each element
// → creates and returns a NEW array containing the returned values