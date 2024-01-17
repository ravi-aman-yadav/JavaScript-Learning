//Arrays method :
//Push() - add to end
//pop() -  delete from end and return
//toString() - convert array to string

//Push() method
let food_item = ["potato", "Apple", "litchi", "tomato"];

food_item.push("burger", "panner", "banana");
console.log(food_item);
//Pop() method
food_item.pop();


//toString() method
console.log(food_item);
console.log(food_item.toString());

let marks = [90, 80, 70, 80, 90];

//concat
let marvel_heros = ['ironman', 'spiderman', 'thor', 'hulk'];
let dc_heros = ['superman', 'batman', 'green lantern'];
let indian_heros = ['Krish', 'shaktiman'];
let heros = marvel_heros.concat(dc_heros, indian_heros);
console.log(heros);


//unshift mehtod = push() but add element at start
marvel_heros.unshift("antman");
console.log(marvel_heros);

//shift method = pop() but delete element from the start
marvel_heros.shift();
console.log(marvel_heros);


//slice
let marvel = ['ironman', 'spiderman', 'hulk', 'thor', 'antman', 'loki', 'hawkey', 'blackwidow'];
console.log(marvel);
console.log(marvel.slice(1, 5));


//splice : - change original array
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102);
console.log(arr)

//Add element
arr.splice(2, 0, 101);
console.log(arr);

//Delete
arr.splice(2, 1);
console.log(arr);

//Splice
arr.splice(3, 1, 1000);
console.log(arr)