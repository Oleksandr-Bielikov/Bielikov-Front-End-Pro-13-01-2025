/*
// Завдання 1
// Створення масиву по параметрах користувача;
let arrLength = prompt("введіть кількість елементів масиву");
let array = [];

    for (let i = 0; i < arrLength; i++) {
        let element = prompt(`Введіть елемент ${i + 1}:`);
        array.push(element);
    }
    console.log(array);

// Сортування масиву;
array.sort(function(a, b) {
    return a - b;
});
console.log(array);

// Видалення елементів з масиву;
array.splice(1, 3);
console.log(array);

*/
/// Завдання 2
const newArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Сума і кількість позитивних елементів;
let sum = 0;
let count = 0;

for(let num of newArray) {
    if (num > 0) {
        sum += num;
        count++;
    }
}
console.log("Кількість позитивних елементів:", count);
console.log("Сума позитивних елементів:", sum);

// Мінімальний елемент масиву і його порядковий номер;
let minElement = newArray[0]; 
let minIndex = 0; 

for (let i = 1; i < newArray.length; i++) {
    if (newArray[i] < minElement) {
        minElement = newArray[i];
        minIndex = i;
    }
}
console.log("Мінімальний елемент масиву:", minElement);
console.log("Його порядковий номер (індекс):", minIndex);

// Максимальний елемент масиву і його порядковий номер;
let maxElement = newArray[0]; 
let maxIndex = 0; 

for (let i = 1; i < newArray.length; i++) {
    if (newArray[i] > maxElement) {
        maxElement = newArray[i];
        maxIndex = i;
    }
}
console.log("Максимальний елемент масиву:", maxElement);
console.log("Його порядковий номер (індекс):", maxIndex);

// Кількість негативних елементів;
let countNegative = 0;

for(let num of newArray) {
    if (num < 0) {
        countNegative++;
    }
}
console.log("Кількість негативних елементів:", countNegative);

// Кількість непарних позитивних елементів і їх сума;
let evenSum = 0;
let evenCount = 0;

for(let num of newArray) {
    if (num > 0 && num % 2 !== 0) {
        evenSum += num;
        evenCount++;
    }
}
console.log("Кількість непарних позитивних елементів:", evenCount);
console.log("Сума непарних позитивних елементів:", evenSum);

// Кількість парних позитивних елементів і їх сума;
let notEvenSum = 0;
let notEvenCount = 0;

for(let num of newArray) {
    if (num > 0 && num % 2 === 0) {
        notEvenSum += num;
        notEvenCount++;
    }
}
console.log("Кількість парних позитивних елементів:", notEvenCount);
console.log("Сума парних позитивних елементів:", notEvenSum);

// Добуток позитивних елементів;
let prod = 1;

for(let num of newArray) {
    if (num > 0) {
        prod *= num;
    }
}
console.log("Добуток позитивних елементів:", prod);

// Знайти найбільший серед елементів масиву, решту занулити;
let nullArray = newArray.map(num => (num === maxElement? num : 0));
console.log("Новий масив з найбільшим елементом: ", nullArray);