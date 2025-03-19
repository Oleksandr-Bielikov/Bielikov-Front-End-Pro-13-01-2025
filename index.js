let buttons = document.querySelectorAll('.button');
let counter = document.querySelectorAll('.counter');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let count = parseInt(counter[i].textContent);
        counter[i].textContent = count + 1;
    });
};