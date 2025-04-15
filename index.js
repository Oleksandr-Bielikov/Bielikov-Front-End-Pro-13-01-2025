const images = './clock';
const digits = ['h1', 'h2', 'm1', 'm2', 's1', 's2'];
let prevDigits = [];

function pad(num) {
    return num.toString().padStart(2, '0');
}

function getTime() {
    const now = new Date();
    const h = pad(now.getHours());
    const m = pad(now.getMinutes());
    const s = pad(now.getSeconds());
    return [...h, ...m, ...s];
}

function updateClock() {
    const currentDigits = getTime();

    currentDigits.forEach((digit, index) => {
        if (prevDigits[index] !== digit) {
            const img = document.getElementById(digits[index]);
            if (img) {
                img.src = `${images}/${digit}.gif`;
                prevDigits[index] = digit;
            }
        }
    });
}

updateClock();
setInterval(updateClock, 1000);
