// arr.forEach(CallBack function)

let arr = [1,2,3,4,5,6]

// arr.forEach(function printVal(Val) {
//     console.log(Val);
    
// })

let citys = ['Pune', 'Delhi', 'Vadodara', 'Gurugram']

// citys.forEach((eachCity) => {
//     console.log(eachCity.toUpperCase());
    
// })

citys.forEach((eachCity, idx, arra) => {
    console.log(eachCity.toUpperCase(), idx, arra);
    
})

// forEach()
// → runs a function for each element
// → does NOT create/return a new array from the callback results

// map()
// → runs a function for each element
// → creates and returns a NEW array containing the returned values