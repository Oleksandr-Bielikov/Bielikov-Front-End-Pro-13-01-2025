// Є масив об'єктів з товарами та їх цінами. Вивести в консоль список із даними по всіх товарах (кожен товар на окремому рядку в консолі). 
const market = [
    {
        position: '1',
        name: 'phone',
        price: 2000
    },
    {
        position: '2',
        name: 'TV',
        price: 3000
    },
    {
        position: '3',
        name: 'camera',
        price: 4000
    },
    {
        position: '4',
        name: 'notebook',
        price: 5000
    }
];

market.forEach(item => { console.log(`${item.position}. ${item.name} - ${item.price}`) });


/* Від користувача отримати номер товару (реалізувати перевірку на правильність введення номера) та кількість (також реалізувати валідацію), 
вивести на сторінку підсумкову вартість покупки. Якщо вартість перевищує 10.000грн, розрахувати знижку в 20% і повідомити про це користувача. */
function calculateOfItems() {

    function validateItem() {
        let positionOfItem;
        while (true) {
            positionOfItem = parseInt(Number(prompt('Введіть номер товару')));
            if (!isNaN(positionOfItem) && isFinite(positionOfItem) && (positionOfItem > 0 && positionOfItem <= 4)) {
                return market[positionOfItem - 1];
            } else {
                alert('Введіть коректне значення');
            }
        }
    }
    const item = validateItem();

    function validateQuantity() {
        let quantityOfItem;
        while (true) {
            quantityOfItem = parseInt(Number(prompt('Введіть кількість одиниць товару')));
            if (!isNaN(quantityOfItem) && isFinite(quantityOfItem) && quantityOfItem > 0) {
                return quantityOfItem;
            } else {
                alert('Введіть коректне значення');
            }
        }
    }
    const quantity = validateQuantity();

    const sum = item.price * quantity;
    if (sum < 10000) {
        alert(`Загальна сума до оплати складає: ${sum} грн.`);
    } else {
        alert(`Ваша сума до оплати перевищує 10000 грн, і складає ${sum} грн, тому застосовано знижку -20%. Загальна сума до оплати складає: ${sum * 0.8} грн.`);
    }
}
calculateOfItems();