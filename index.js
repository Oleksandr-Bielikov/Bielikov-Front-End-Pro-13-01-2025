// Реалізувати подобу інтернет-магазину

// Дано 3 блоки

// У лівій частині сторінки – перелік категорій.
// При натисканні на категорію виводиться у середній блок список товарів цієї категорії.
// Клік на товар – інформацію про товар у правому блоці.
// В інформації товару - кнопка "купити"
// При натисканні на “купити” з'являється повідомлення, що товар куплено та повернення у вихідний стан програми (коли відображається лише список категорій)

let item = document.getElementsByTagName('p');

for (let i of item) {
    i.addEventListener('click', function () {
        showList(i.textContent);
    });
}

let avtoList = document.querySelector('.avto');
let motoList = document.querySelector('.moto');

function hiddenList() {
    avtoList.style.display = 'none';
    motoList.style.display = 'none';
}

function showList(item) {
    hiddenList();
    if (item === 'AVTO') {
        avtoList.style.display = 'block';
    } else if (item === 'MOTO') {
        motoList.style.display = 'block';
    }
}

let avtoOne = document.querySelector('.avto-1');
let avtoTwo = document.querySelector('.avto-2');
let motoOne = document.querySelector('.moto-1');
let motoTwo = document.querySelector('.moto-2');

let avtoItems = avtoList.querySelectorAll('li');
let motoItems = motoList.querySelectorAll('li');


for (let i = 0; i < avtoItems.length; i++) {
    avtoItems[i].addEventListener('click', function () {
        showItem(avtoItems[i].textContent);
    })
}
for (let i = 0; i < motoItems.length; i++) {
    motoItems[i].addEventListener('click', function () {
        showItem(motoItems[i].textContent);
    })
}

function hiddenItems () {
    avtoOne.style.display = 'none';
    avtoTwo.style.display = 'none';
    motoOne.style.display = 'none';
    motoTwo.style.display = 'none';
}

function showItem (item) {
    hiddenItems()
    if (item === 'Avto 1') {
        avtoOne.style.display = 'block';
    } else if (item === 'Avto 2') {
        avtoTwo.style.display = 'block';
    } else if (item === 'Moto 1') {
        motoOne.style.display = 'block';
    } else if (item === 'Moto 2') {
        motoTwo.style.display = 'block';
    }
}

let button = document.getElementsByClassName('button');

for (let i of button) {
    i.addEventListener('click', function () {
        alert('Товар куплено!');
        hiddenItems();
        hiddenList();
    })
}
