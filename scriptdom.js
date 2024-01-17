console.dir(window)
console.dir(document.body);
console.log(document.body);
console.dir(document.body.childNodes[1]);
console.log(document.body.childNodes[1]);
document.body.childNodes[1].innerText = "JS";

//DOM manipulation
//1.document.getElementByID("myid")
let header = document.getElementById("myId");
console.dir(header);

//2.docuemtn.getElementByClassName("myClass")
let paragraph = document.getElementsByClassName("paragraph");
console.dir(paragraph);
console.log(paragraph);

//3.docuemnt.getElementByTagName("p")
let p = document.getElementsByTagName("p");
console.dir(p);

//Query selector

//1.document.querySelector("myID/myClass/tag"); //return first element
let elements = document.querySelector("p");
console.dir(elements);

//2.document.querySelectorALL("myID/myCLass/tag"); //return a nodelist
let allelement = document.querySelectorAll("p");
console.dir(allelement);


// DOM manipulation
// 1.tagNamge //return tag for element nodes
// 2.innerText //return the text content of the element and all it's children
// 3.innerHTML //return the plain text or HTML contents in the element
// 4.textcontent //return textual content even for hidden element


// DOM tree :-use for navigation
// 1.Text node
// 2.comment node
// 3.element node //we will work on element node only

console.dir(document.body.firstChild);
console.dir(document.querySelector("div").children);


//getAttribute(attr) :-to get the attribute value
let divs = document.querySelector("div");
console.log(divs);
let value = divs.getAttribute("id");
console.log(value);
let pa = document.querySelector("p");
console.log(p);
let idvalue = p.getAttribute("class");
console.log(idvalue);

//setAttribute(attr) :- to set the attribute value
let para = document.querySelector("p");
console.log(para.setAttribute("class", "divClass"));

// //node.style
let nodeStyle = document.querySelector("div");

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);
// //node.appned(element):-add element at the end
let divbtn = document.querySelector("div");
divbtn.append(newBtn);
console.log(divbtn);
// //node.prepend(element):-add element at the start
divbtn.prepend(newBtn);
// //node.before(element):-add eleemnet before the node(outside)
divbtn.before(newBtn);
// //node.after(element):-add element after the node(outside)
divbtn.after(newBtn);

// //delete paragraph
let delPara = document.querySelector("p");
delPara.remove();