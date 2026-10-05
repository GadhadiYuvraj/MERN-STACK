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
