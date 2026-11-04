console.log(
	"Q1 create a nuw button element. give it a text Click me background color red and text color white",
);

let btn = document.createElement("button");
btn.innerText = "Click Me!";

btn.style.color = "White";
btn.style.backgroundColor = "red";

document.querySelector("body").prepend(btn);

