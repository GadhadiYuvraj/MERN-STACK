// // let div = document.querySelector("div")

// // let value = div.getAttribute("id")

// // console.log(value);

// let para = document.querySelector("p")
// console.log(para);

// para.setAttribute("class", "NewPara")

// para.style.backgroundColor = "purple"
// para.style.color = "white"
// para.style.fontSize = "19px"
// para.innerText = "This is a ParaGraph"

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me"

let div = document.querySelector("div")
div.append(newBtn);
div.prepend(newBtn);


let p = document.querySelector(".para");
p.after(newBtn);
// p.before(newBtn);

let h1 = document.createElement("h1")
h1.innerText = "This Is Heading";

document.querySelector("body").prepend(h1)

// p.remove()



