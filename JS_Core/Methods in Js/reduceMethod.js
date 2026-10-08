// reduce method performs some operaton & reduces the array to a single value. It Returns that single value.

// let arr = [1,2,3,4]

// let output = arr.reduce( (res, cur) => {
//     return res * cur;
// });


// console.log(output);

// find largest numner
let arr = [55,23, 854.2,76,23,66,89,99,22,100,340,745,254,854,32,8,7]

let output = arr.reduce( (prev, cur) => {
    return prev > cur ? prev : cur ;
});


console.log(output);

































































