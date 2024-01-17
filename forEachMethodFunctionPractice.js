//For a given array of numbers, print the square of each value using the forEach loop
let arr = [1, 2, 3, 4, 5];

function square(arr) {
  console.log(arr * arr);
}

let num = (arr) => {
  console.log(arr * 10);
};

arr.forEach(square);
arr.forEach(num);

//We are given array of marks of student filter out who scored more than 90
let student_marks = [90, 66, 91, 89, 100];
let studnet_marks_greater_than_90 = student_marks.filter((val) => {
  return val >= 90;
});
console.log(studnet_marks_greater_than_90);

//Take number input from the user and create array of number from 1 to n
//use reduce method to calculate additon of the number;
let n = prompt("enter a number :");
let array = [];
for (let i = 1; i <= n; i++) {
  array[i - 1] = i;
}
console.log(array);
let arraySum = array.reduce((res, curr) => {
  return res + curr;
});
console.log(`sum : ${arraySum}`);

//use reduce method to calculate the product of the number
let arrayMulti = array.reduce((res, curr) => {
  return res * curr;
});
console.log(`Multiplication is ${arrayMulti}`);
