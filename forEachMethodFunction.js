let arr = ["mumbai", "pune", "delhi", "hyderbad", "chennai", "raipur"];
arr.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

//Map method similar to forEach method but return new created array
let nums = [100, 250, 300];
let newarray = nums.map((val) => {
  return val;
});
console.log(nums);

//filter Method
let array = [1, 2, 100, 3, 4];

let evenArray = array.filter((val) => {
  return val % 2 === 0;
});

console.log(evenArray);

//reduce method
const arrayReduce = array.reduce((res, curr) => {
  return res + curr;
});

console.log(arrayReduce);

//return greater number
const arrayGreater = array.reduce((res, curr) => {
  return res > curr ? res : curr;
});

console.log(arrayGreater);
