// Завдання 1
const welcome = prompt('What is your name?');
alert(`Hello, ${welcome}! How are you?`);


// Завдання 2
function calc() {
   const a = Number(prompt('введіть перше число'));
   const b = Number(prompt('введіть друге число'));

   let add = a + b;
   let sub = a - b;
   let mult = a * b;
   let div = a / b;

alert(add);
alert(sub);
alert(mult);
alert(div);
}
calc();


// Завдання 3
let val_1 = prompt('введіть перше значення');
let val_2 = prompt('введіть друге значення');

let equal = val_1 == val_2;

if (equal != true) {
    alert('This values are not equal');
} else {
    alert('This values are equal');
}


// завдання 4
let num_1 = Number(prompt('введіть перше число'));
let num_2 = Number(prompt('введіть друге число'));
let num_3 = Number(prompt('введіть третє число'));
let num_4 = (num_1 + num_2 + num_3) / 2;

alert(`середнє арифметичне складає ${num_4}`);


// Завдання 5
const num = Number(prompt("введіть п'ятизначне число"));

let number_1 = Math.floor(num / 10000);
let number_2 = Math.floor((num % 10000) / 1000);
let number_3 = Math.floor((num % 1000) / 100);
let number_4 = Math.floor((num % 100) / 10);
let number_5 = num % 10;

if (num >= 10000 && num <= 99999) {
    alert(`${number_1} ${number_2} ${number_3} ${number_4} ${number_5}`);
} else {
    alert('вкажіть коректне число');
}

