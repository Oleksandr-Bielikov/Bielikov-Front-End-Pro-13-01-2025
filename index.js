// порівняння двох чисел
const numer_a = Number(prompt("enter first numer"));
const numer_b = Number(prompt("enter second numer"));

if (numer_a > numer_b) {
    alert(`numer ${numer_a} bigger than ${numer_b}`);
} else if (numer_a < numer_b) {
    alert(`numer ${numer_a} smaller than ${numer_b}`);
} else {
    alert("This numers are equal")
}

// порівняння відстаней
const distance_a = Number(prompt("enter distance in kilometers"));
const distance_b = Number(prompt("enter dictance in foots"));

let footCalc = distance_b * 0.000305;

if (distance_a > footCalc) {
    alert(`Distance ${distance_a} km bigger than ${distance_b} ft`);
} else if (distance_a < footCalc) {
    alert(`Distance ${distance_a} km smaller than ${distance_b} ft`);
} else {
    alert("This distances are equal");
}

// визначення чи є число дільником іншого
const numb_a = Number(prompt("enter first numer"));
const numb_b = Number(prompt("enter second numer"));

if (numb_a % numb_b) {
    alert(`number ${numb_a} is a divisor of number ${numb_b}`);
} else {
    alert(`number ${numb_a} is not a divisor of number ${numb_b}`);
}

if (numb_b % numb_a) {
    alert(`number ${numb_b} is a divisor of number ${numb_a}`);
} else {
    alert(`number ${numb_b} is not a divisor of number ${numb_a}`);
}

// Визначення числа на парність
const numer = Number(prompt("Enter a numer")) ;

if (numer % 2 === 0) {
    alert("This numer are even");
} else {
    alert("This numer are not even");
}
let lastDigit = numer % 10;
alert(`Last digit of this numer are ${lastDigit}`);

// визначення більшої чифри з числа
const number = Number(prompt("enter numer"));


let digit_1 = Math.floor(number / 10);
let digit_2 = number % 10;

if (digit_1 > digit_2) {
    alert(`Number ${digit_1} bigger than ${digit_2}`);
} else if (digit_1 < digit_2) {
    alert(`Number ${digit_1} smaller than ${digit_2}`);
} else {
    alert("This digits are equal");
}

// операції з трьома числами
let threeDigitNumer = Number(prompt("Enter a three-digit-numer"));

if (threeDigitNumer <= 100 || threeDigitNumer >= 999) {
    alert("Please write correct three-digit-number");
} else {
    var threeDigitNumer_3 = threeDigitNumer % 10;
    
    threeDigitNumer = (threeDigitNumer - threeDigitNumer_3) / 10;
    var threeDigitNumer_2 = threeDigitNumer % 10;

    threeDigitNumer = (threeDigitNumer - threeDigitNumer_2) / 10;

    var threeDigitNumer_1 = threeDigitNumer;

    alert(`${threeDigitNumer_1} ${threeDigitNumer_2} ${threeDigitNumer_3}`);
}

if ((threeDigitNumer_1 + threeDigitNumer_2 + threeDigitNumer_3) % 2 === 0) {
    alert("the sum of the digits is even");
} else {
    alert("the sum of the digits is not even");
}

if ((threeDigitNumer_1 + threeDigitNumer_2 + threeDigitNumer_3) % 5 === 0) {
    alert("The sum is multiple of 5");
} else {
    alert("The sum is not multiple of 5");
}

if ((threeDigitNumer_1 * threeDigitNumer_2 * threeDigitNumer_3) > 100) {
    alert("The product of digits bigger than 100");
} else {
    alert("The product of digits smallers than 100");
}

// порівняння цифр ризначного числа
let threeDigit = Number(prompt("Enter a three-digit-numer"));

if (threeDigit <= 100 || threeDigit >= 999) {
    alert("Please write correct three-digit-number");
} else {
    var threeDigit_3 = threeDigit % 10;
    
    threeDigit = (threeDigit - threeDigit_3) / 10;
    var threeDigit_2 = threeDigit % 10;

    threeDigit = (threeDigit - threeDigit_2) / 10;

    var threeDigit_1 = threeDigit;

    alert(`${threeDigit_1} ${threeDigit_2} ${threeDigit_3}`);
}

let threeDigitEqual = threeDigit_1 === threeDigit_2 && threeDigit_2 === threeDigit_3 
? "This digits are equal" 
: "This digits are not equal";
alert(threeDigitEqual);

let threeDigitEqual_2 = threeDigit_1 === threeDigit_2 || threeDigit_2 === threeDigit_3 || threeDigit_1 === threeDigit_3
? "This three-digit-number have equal numbers"
: "This three-digit-number don't have equal numbers";
alert(threeDigitEqual_2);


// визначення дзеркальності чисел
let sixDigitNumer = prompt("Enter a six-digit-numer");
    sixDigitNumer.toString();

if (sixDigitNumer.length !== 6) {
    alert("Please write correct three-digit-number");
} else

if (sixDigitNumer[0] === sixDigitNumer[5] && sixDigitNumer[1] === sixDigitNumer[4] && sixDigitNumer[2] === sixDigitNumer[3]) {
    alert("This six-digit-number are mirrored");
} else {
    alert("This six-digit-number are not mirrored");
}