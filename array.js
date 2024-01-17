let marks = [97, 72, 56, 36, 43];
console.log(marks);
console.log(marks.length);//property

//changing value with the help of index
marks[3] = 66;
console.log(marks);

//looping an array
let heros = ['Ironman', 'Thor', 'Spiderman', 'Captain America', 'Hulk'];
for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

//for-off
console.log('Iterating using for-of loop');
let city = ['mumbai', 'hyderabad', 'raipur', 'chennai', 'delhi']
for (let item of city) {
    console.log(item.toUpperCase());
}
