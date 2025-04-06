// Реалізувати подобу інтернет-магазину

// Дано 3 блоки

// У лівій частині сторінки – перелік категорій.
// При натисканні на категорію виводиться у середній блок список товарів цієї категорії.
// Клік на товар – інформацію про товар у правому блоці.
// В інформації товару - кнопка "купити"
// При натисканні на “купити” з'являється повідомлення, що товар куплено та повернення у вихідний стан програми (коли відображається лише список категорій)

const categoryButton = document.querySelectorAll('.category');
const avtoDiv = document.querySelector('#avto-div');
const motoDiv = document.querySelector('#moto-div');

categoryButton.forEach(button =>
    button.addEventListener('click', function () {
        avtoDiv.style.display = 'none';
        motoDiv.style.display = 'none';

        if(button.dataset.target === 'avto') {
            avtoDiv.style.display = 'block';
        } else if (button.dataset.target === 'moto') {
            motoDiv.style.display = 'block';
        }
}));

const itemsAvto = document.querySelectorAll('#avto-div p');
const itemsMoto = document.querySelectorAll('#moto-div p');

let bmw = document.querySelector('#bmw');
let audi = document.querySelector('#audi');
let honda = document.querySelector('#honda');
let kawasaki = document.querySelector('#kawasaki');

function showItem (item) {
    hideItem()
    if (item === 'BMW') {
        bmw.style.display = 'block';
    } else if (item === 'Audi') {
        audi.style.display = 'block';
    } else if (item === 'Honda') {
        honda.style.display = 'block';
    } else if (item === 'Kawasaki') {
        kawasaki.style.display = 'block';
    }
}

function hideItem () {
    bmw.style.display = 'none';
    audi.style.display = 'none';
    honda.style.display = 'none';
    kawasaki.style.display = 'none';
}

for (let i = 0; i < itemsAvto.length; i++) {
    itemsAvto[i].addEventListener('click', function () {
        showItem(itemsAvto[i].textContent);
    })
}

for (let i = 0; i < itemsMoto.length; i++) {
    itemsMoto[i].addEventListener('click', function () {
        showItem(itemsMoto[i].textContent);
    })
}

let button = document.querySelectorAll('.buy-button');
let selectedPrice = 0;

for (let i of button) {
    i.addEventListener('click', function () {
    
    let productSection = i.closest('section');
    let priceElement = productSection.querySelector('.price');

    if (priceElement) {
      selectedPrice = parseInt(priceElement.textContent.replace(/\D/g, ''));
    }
        formContainer.style.display = 'block';
    })
}

/// Доповнення інтернет-магазину ДЗ 25
const form = document.getElementById('form');
const formContainer = document.getElementById('form-container');
const table = document.getElementById('table');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let name = form.elements['name'].value;
    let surname = form.elements['surname'].value;
    let secondName = form.elements['second-name'].value;
    let city = form.elements['city'];
    let post = form.elements['post'].value;
    let pay = form.elements['pay'].value;
    let quantity = form.elements['quantity'].value;
    let comment = form.elements['comment'].value;

    const namePattern = /^[А-ЯІЇЄҐа-яіїєґ'’\-]+$/u;

    if (!namePattern.test(name) || !namePattern.test(surname) || !namePattern.test(secondName)) {
        alert("Ім'я, прізвище та по-батькові повинні містити тільки літери!");
        return;
    };
    document.getElementById('res-name').textContent = name;
    document.getElementById('res-surname').textContent = surname;
    document.getElementById('res-second-name').textContent = secondName;

    if (city.selectedIndex === 0) {
        alert("Оберіть місто!")
        return;
    };
    document.getElementById('res-city').textContent = city.value;

    if (!/^\d+$/.test(post)) {
        alert("Номер відділення пошти має містити тільки цифри!");
        return;
    };
    document.getElementById('res-post').textContent = post;

    document.getElementById('res-pay').textContent = pay;

    if (isNaN(quantity) || quantity <= 0) {
        alert("Введіть коректну кількість товару");
        return;
    };
    document.getElementById('res-quantity').textContent = quantity;

    if (comment.length > 500) {
        alert("Коментар не може перевищувати 500 символів");
        return;
    };
    document.getElementById('res-comment').textContent = comment;

    table.style.display = 'block';
    form.style.display = 'none';
    avtoDiv.style.display = 'none';
    motoDiv.style.display = 'none';
    hideItem()

    saveOrderToLocalStorage({
        name,
        surname,
        secondName,
        city: city.value,
        post,
        pay,
        quantity,
        comment,
        date: new Date().toLocaleString(),
        price: selectedPrice * quantity
    });
 
});

/// ДЗ 26 Модифікувати інтернет-магазин
const showOrdersButton = document.querySelector('#show-orders-btn');
const ordersDiv = document.querySelector('#orders-container');
const ordersList = document.querySelector('#orders-list');

function saveOrderToLocalStorage(orderData) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
}

showOrdersButton.addEventListener('click', function () {
    ordersDiv.style.display = 'block';
    ordersList.innerHTML = '';

        let orders = JSON.parse(localStorage.getItem('orders')) || [];

    if (orders.length === 0) {
        let li = document.createElement('li');
        li.textContent = 'Немає замовлень';
        ordersList.appendChild(li);
        return;
    }

    orders.forEach(function(order, index) {
        let li = document.createElement('li');
        li.style.marginBottom = '10px';

        let title = document.createElement('p');
        title.textContent = `Замовлення від ${order.date} — ${order.price} грн`;
        title.style.fontWeight = 'bold';
        title.style.cursor = 'pointer';

        let details = document.createElement('div');
        details.style.display = 'none';
        details.style.marginTop = '5px';
        details.innerHTML = `
            <p>Ім'я: ${order.name}</p>
            <p>Прізвище: ${order.surname}</p>
            <p>По-батькові: ${order.secondName}</p>
            <p>Місто: ${order.city}</p>
            <p>Пошта: ${order.post}</p>
            <p>Оплата: ${order.pay}</p>
            <p>Кількість: ${order.quantity}</p>
            <p>Коментар: ${order.comment}</p>
        `;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', function () {
            orders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(orders));
            li.remove();
        });

        title.addEventListener('click', function () {
            details.style.display = (details.style.display === 'none') ? 'block' : 'none';
        });

        li.appendChild(title);
        li.appendChild(details);
        li.appendChild(deleteBtn);
        ordersList.appendChild(li);
    });
});