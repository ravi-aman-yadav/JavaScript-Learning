// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
//     console.log("event type :", evt.type);
//     console.log("event target :", evt.target);
//     console.log("event clientX :", evt.clientX);
//     console.log("event clinetY :", evt.clientY);
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// };

// //Event Listeners
// It is used because we can perform multiple event in a single arguments
// //node.addElement(event, callback) //function or event handlers
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  console.log("handler1");
});

btn1.addEventListener("click", () => {
  console.log("handler2");
});

const handler3 = () => {
  console.log("handler3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("handler4");
});

// //node.removeEventListners(event, callback)

btn1.removeEventListener("click", handler3);
