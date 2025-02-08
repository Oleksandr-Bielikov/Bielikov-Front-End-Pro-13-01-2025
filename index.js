///
let result = "";
for(let i = 20; i <= 30; i += 0.5) {
    result += i;
    if(i < 30) {
        result += " ";
    }
}
console.log(result);

///
let oneDollar = 40;
result = "";
for(let i = 10; i <= 100; i += 10) {
    result += i * oneDollar;
    if(i < 100) {
        result += " ";
    }
}
console.log(result);

///
let N = Number(prompt("введіть число N"));
result = "";

for(let i = 1; i <= 100; i++) {
    if(i * i > N) {
        break;
    }
    result += i + " ";
}
console.log(result);

///
let numb = Number(prompt("Введіть число"));
let isPrime = true;

for (let i = 2; i < numb; i++) {
    if (numb % i === 0) {
        isPrime = false;
        break;
    }
}

if (numb > 1 && isPrime) {
    alert(`${numb} - просте число`);
} else {
    alert(`${numb} - складене число`);
}

///
let num = Number(prompt("Введіть число"));

while (num > 1 && num % 3 === 0) {
    num /= 3;
}

if (num === 1) {
    alert(`Число можна отримати піднесенням 3 до степеня`);
} else {
    alert(`Число не можна отримати піднесенням 3 до степеня`);
}