const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let keyString = "";
    for (let i = 1; i <= length; i++) {
        let random = Math.floor(Math.random() * characters.length);
        keyString += characters.substring(random, random + 1);
    }
    return keyString;
}

const key = generateKey(16, characters);
console.log(key);
