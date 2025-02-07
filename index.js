///
let i = 10;
let result = "";

while (i <= 20) {
    result += i;
    if (i < 20) {
        result += ", ";
    }
    i++;
}
alert(result);

///
result = "";
for(let i = 10; i <= 20; i++) {
    result += i * i + ", ";
}
alert(result);

///
result = 0;
for(let i = 0; i <= 15; i++) {
    result += i;
}
alert(result);

///
result = 1;
for(let i = 15; i <= 35; i++) {
    result *= i;
}
alert(result);

///
result = 0;
for(let i = 1; i <= 500; i++) {
    result += i;
}
alert(result / 500);

///
result = 0;
for(let i = 30; i <= 80; i++) {
    if(i % 2 !== 0) {
    continue
    }
    result += i;
}
alert(result);

///
result = "";
for(let i = 100; i <= 200; i += 3) {
    result += i;
    if (i + 3 < 200) {
        result += ", ";
    }
}
alert(result);

///
let numb = Number(prompt("Введіть число!"));

result = "";
for(let i = 1; i <= numb; i++) {
    if(numb % i === 0) {
        result += i + " ";
    }
}
alert(result);

///
let numb_1 = Number(prompt("Введіть число!"));

result = "";
for(let i = 1; i <= numb_1; i++) {
    if(numb_1 % i === 0 && i % 2 === 0) {
        result += i + " ";
    }
}
alert(result);

///
let numb_2 = Number(prompt("Введіть число!"));

result = 0;
for(let i = 1; i <= numb_2; i++) {
    if(numb_2 % i === 0 && i % 2 === 0) {
        result += i;
    }
}
alert(result);

///
for(i = 1; i <= 10; i++) {
    for(j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }

}