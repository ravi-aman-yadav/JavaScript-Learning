function myFunction(msg, n) {
  console.log(msg, n);
}

myFunction("I love JavaScript, 100");

//create a function who is used to add two number
function add(a, b) {
  sum = a + b;
  return sum;
}

let additon = add(3, 4);
console.log(additon);

//Arrow function
const arrowSum = (a, b) => {
  console.log(a + b);
};

const arrowMultiplication = (a, b) => {
  return a * b;
};

const printHello = () => {
  console.log("Hello JavaScript");
};
