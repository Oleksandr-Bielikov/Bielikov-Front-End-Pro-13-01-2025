// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає
let input = document.querySelector('input');
let div = document.querySelector('h2');

input.addEventListener('focus', focusHandler);
input.addEventListener('blur', blurHandler);

function focusHandler() {
    div.style.display = 'block';
};
function blurHandler() {
    div.style.display = 'none';
}

// На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, 
// при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо
let button_1 = document.querySelector('.button_1');
let button_2 = document.querySelector('.button_2');

button_1.addEventListener('click', inputDatas);
button_2.addEventListener('click', goToDatas);

let data;
function inputDatas() {
    data = prompt('Введіть дані!');
    return data;
}

function goToDatas() {
    if (data !== null) {
        window.location.href = data;
    };
    if (!data.includes('http://') && !data.includes('https://')) {
        window.location.href = 'http://' + data;
    };
};

// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
let table = document.querySelector('.table');
let generateButton = document.querySelector('.generate_button');
let counter = 1;
generateButton.addEventListener('click', generateTable);
function generateTable() {
    table.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            cell.textContent = counter++;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)
let photos = document.querySelector('.random_photo')
let randomPhoto = document.querySelectorAll('img');
let generatePhotoButton = document.querySelector('.generate_photo');
let photoIndex = 0;

generatePhotoButton.addEventListener('click', showRandomPhoto);
generatePhotoButton.addEventListener('focus', showPhoto);

function showRandomPhoto() {
    photoIndex = Math.floor(Math.random() * randomPhoto.length)
    for (let i = 0; i < randomPhoto.length; i++) {
        if (i == photoIndex) {
            randomPhoto[i].style.display = 'block';
        } else {
            randomPhoto[i].style.display = 'none';
        }
    }
}
function showPhoto() {
    photos.style.display = 'block';
}
showRandomPhoto();
