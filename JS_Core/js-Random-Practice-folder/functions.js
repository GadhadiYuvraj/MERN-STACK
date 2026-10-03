// simple function

// function sayHello(){
//     console.log("Hello Person!");
// }

// sayHello();

// for(let callFunc = 0; callFunc <= 5; callFunc++){
//     sayHello();
// }

// Functions with parameters and Arguments

// function sayHi(name){
//     console.log("Hii "+name +"!!");    
// }

// sayHi("Yuvraj");

// another example
//add 2 numbers

// function addNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// subNumbers(15,20)

// function subNumber(num1, num2){
//     console.log(num1 - num2);
// }

// subNumber(5, 6);
// subNumber(20, 8);

//Shradha Khapra video 

// function is a block of code that performs specific task, can be invoked whenever needed


function Mysleep(decide){ //parameters
    console.log(`Do I want to Sleep? ${decide},`); 
};

Mysleep("Hell Yes"); //arguments

// once you return the value in function then its not going to execute ahead code in that function

function sum(x, y){
    let s;// block scope // local variable scope it will be executable only in function not outside 
    s = x + y;
    console.log("This msg before return");
    
    return s;
    console.log("This msg after return");// unexecutable code  
};

console.log(sum(15,5));


// arrow Function
// multiplicaition and sub

const arrowMinus = (a , b) => {
    console.log( a - b );
}

arrowMinus(5,4);

const ArrowMulti = (x, y) =>{
    console.log(x);
    console.log(y);
    console.log(x * y);
}

ArrowMulti(15,5);

const div = (D,I) =>{
    console.log(D / I);
    }

div(80, 4);













