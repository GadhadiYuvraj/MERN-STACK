// console.log("hello");
// alert("YUGA")
// console.log(window.document);
// console.dir(window.document);
// console.log(document.body);
// console.dir(document.body);
// console.dir(document.head);
// console.dir(document.body.childNodes);

// let headings = document.getElementById("headings");
// console.log(headings);

// let heading = document.getElementsByClassName("heading")
// console.log(heading);

// let para = document.getElementsByTagName("p")
// console.log(para);

// let element = document.querySelector("p");
// console.log(element);

// let eleAll = document.querySelectorAll("p");
// console.log(eleAll);

// let firCalss = document.querySelector(".heading");
// console.log(firCalss);

// let idHash = document.querySelectorAll("#headings");
// console.log(idHash);

// let demo = document.querySelector("div").children;

// console.log(demo);


// let h2 = document.querySelector("h2")

// h2.innerText = h2.innerText + " from YUGA" 

// console.log(h2.innerText);


let divs = document.querySelectorAll(".box")

let idx = 1;

for(div of divs){
    div.innerText = `New Unique Text ${idx}`
    idx++

}



// divs[0].innerText = "New Unique Text 1"

// divs[1].innerText = "New Unique Text 2";

// divs[2].innerText = "New Unique Text 3";
