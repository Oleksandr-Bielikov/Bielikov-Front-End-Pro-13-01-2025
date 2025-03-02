// Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. 
// Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28
function counter() {
    let count = 0;
    return function (x) {
        count += x;
        return count;
    };
}
let sum = counter();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

// Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.
let arr = [1, 2, 'qwerty', 3, 'John', 4, 'apple', 5, NaN, Infinity];

function averageOfNum(arr) {
  let sum = 0;
  let count = 0;
    for (let i of arr) {
        if (typeof i == 'number' && !isNaN(i) && isFinite(i)) {
          sum += i;
          count++;
        }
    }
  return count > 0 ? sum / count : 0;
}
console.log(averageOfNum(arr));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). 
// Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.
function doMath(x, znak, y) {
    switch (znak) {
        case "+":
            return x + y;

        case "-":
            return x - y;

        case "*":
            return x * y;

        case "/":
            return x / y;

        case "%":
            return x % y;

        case "^":
            return x ** y;
        default:
            return "невідомий оператор";
        
    }
}
let num_1 = parseFloat(prompt('введіть перше число:'));
let operator = prompt('введіть оператор роботи з числами:');
let num_2 = parseFloat(prompt('введіть друге число:'));
console.log(doMath(num_1, operator, num_2));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач.
function createArray() {
  const rows = prompt("Введіть кількість рядків:");
  const cols = prompt("Введіть кількість стовпців:");
  let array = [];

  for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < cols; j++) {
      array[i][j] = prompt(`Введіть елемент для рядка ${i + 1}, стовпця ${j + 1}:`);
    }
  }
  return array;
}
let result_1 = createArray();
console.log(result_1);


// Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач
function removeElementOfString(string, chars) {
    for (let char of chars) {
        string = string.split(char).join('');
    }
    return string;
}
let inputString = prompt('введіть рядок:');
let charsToRemove = prompt('введіть символи які необхідно видалити').split('');
let result_2 = removeElementOfString(inputString, charsToRemove);
console.log(result_2);