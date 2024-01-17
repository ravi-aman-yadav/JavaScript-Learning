//for a given array with student marks of student = [85, 97, 44, 37, 76, 60]
//find the average marks of the entire class

let student_marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i of student_marks) {
  sum = sum + i;
}

avg = sum / student_marks.length;
console.log(`Average marks of the student is : ${avg}`);

//for a given array with price of 5 items [250, 645, 300, 900, 50]
//all the item have an offer of 10% off on them. Change the array to store final price
//applying offer
let store_price = [250, 645, 300, 900, 50];
let i = 0;
for (let val of store_price) {
  let offer = val / 10;
  store_price[i] = store_price[i] - offer;
  console.log(`value after offer at index ${i} is ${store_price[i]}`);
  i++;
}

item = [250, 645, 300, 900, 50];
for (let i = 0; i < item.length; i++) {
  let offer = item[i] / 10;
  item[i] = item[i] - offer;
}
console.log(item);

//Create an array to store companines bloomberg, microsoft, uber, google, ibm, netflix

let companines = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

console.log(companines);
//remove the first company of the array
removing_first_company = companines.shift();
console.log(companines);

//remove uber and add ola
companines.splice(1, 1, "Ola");
console.log(companines);

//Add amazon at the end
companines.push("amazon");
console.log(companines);
