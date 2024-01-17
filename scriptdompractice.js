// //1.Create a h2 heading element with text - 'hello javascript'.append "from apna college" student to text using js
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college";
// console.log("after append");
// console.dir(h2.innerText);

// //2. Create 3 divs with common class name='box'. Access them and add some unique text to each of them
// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(let div of divs){
//     console.log(div.innerText);
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }


// //Create a new button element. Give it a text"click me", background color of red and text color of white insert the button as the first element inside the body tag
let newButton = document.createElement("button");
newButton.innerText = 'Click me';
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
let nB = document.querySelector("body");
nB.prepend(newButton);

// //Create a<p> tag in html, give it a class &some styling
let newPara = document.querySelector("p");
console.log(newPara);
newPara.classList.add("newClass");