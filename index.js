// Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки. 
// Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу, 
// достатньо зберігати дані про результати виклику.
// Зберігати потрібно останні 10 дзвінків.

function cachePhones() {
    let cache = [];

    return function (x) {
        if (!cache.includes(x)) {
            cache.push(x);
        }

        if (cache.length > 10) {
            cache.shift()
        }

        return cache;
    };
}
let cache = cachePhones();

console.log(cache(1));
console.log(cache(2));
console.log(cache(1));
console.log(cache(3));
console.log(cache(1));
console.log(cache(4));
console.log(cache(1));
console.log(cache(5));
console.log(cache(1));
console.log(cache(6));
console.log(cache(1));
console.log(cache(7));
console.log(cache(1));
console.log(cache(8));
console.log(cache(1));
console.log(cache(9));
console.log(cache(1));
console.log(cache(10));
console.log(cache(1));
console.log(cache(11));
console.log(cache(1));
console.log(cache(12));

