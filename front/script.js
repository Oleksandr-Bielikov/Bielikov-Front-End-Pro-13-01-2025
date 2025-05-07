import { Hamburger, Cheeseburger } from "./burgers.js";
import { Cappuccino, Latte } from "./coffee.js";

let menuButtons = document.querySelector('.menu-div');
let containerCoffee = document.querySelector('#container-coffee');
let containerBurger = document.querySelector('#container-burger');
let containerOrders = document.querySelector('#container-orders');
let orders = [];

menuButtons.addEventListener('click', (e) => {
    if (e.target.id === 'coffee-btn') {
        containerCoffee.classList.remove('d-none');
        containerBurger.classList.add('d-none');
        containerOrders.classList.add('d-none');
    } else if (e.target.id === 'burgers-btn') {
        containerCoffee.classList.add('d-none');
        containerBurger.classList.remove('d-none');
        containerOrders.classList.add('d-none');
    } else if (e.target.id === 'orders-btn') {
        containerCoffee.classList.add('d-none');
        containerBurger.classList.add('d-none');
        containerOrders.classList.remove('d-none');
        if (orders.length === 0) {
            console.log('кошик пустий')
        } else {
            let listHTML = '<ul class="list-group">';
            orders.forEach(order => {
            listHTML += `<li class="list-group-item">${order.getDescription()}</li>`;
        });
            listHTML += '</ul>';
            listHTML += '<button type="button" class="btn btn-primary" id="add-order">Оформити замовлення</button>'; // Кнопка після списку
            containerOrders.innerHTML = listHTML;
        }
    }
});
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
let cardButtons = document.querySelectorAll('.card-body > button');
cardButtons.forEach(button => button.addEventListener('click', (e) => {
    if (e.target.id === 'add-cappuccino-btn') {
        let cappuccinoSize;
        if (document.querySelector('#large-capp').checked){
            cappuccinoSize = Cappuccino.SIZE_LARGE;
        } else {
            cappuccinoSize = Cappuccino.SIZE_CLASSIC;
        };

        let selectedToppingsCapp = [];
        if (document.querySelector('#capp-vanilla').checked) {
            selectedToppingsCapp.push(Cappuccino.TOPPING_VANILLA);
        }
        if (document.querySelector('#capp-choco').checked) {
            selectedToppingsCapp.push(Cappuccino.TOPPING_CHOCOLATE);
        }
        
        let cappuccino = new Cappuccino(cappuccinoSize, selectedToppingsCapp);
        orders.push(cappuccino);
        document.querySelector('#card-cappucino form').reset();
    } else if (e.target.id === 'add-latte-btn') {
        let latteSize;
        if (document.querySelector('#large-latte').checked){
            latteSize = Latte.SIZE_LARGE;
        } else {
            latteSize = Latte.SIZE_CLASSIC;
        };

        let selectedToppingsLatte = [];
        if (document.querySelector('#latte-vanilla').checked) {
            selectedToppingsLatte.push(Latte.TOPPING_VANILLA);
        }
        if (document.querySelector('#latte-choco').checked) {
            selectedToppingsLatte.push(Latte.TOPPING_CHOCOLATE);
        }
        
        let latte = new Latte(latteSize, selectedToppingsLatte);
        orders.push(latte);
        document.querySelector('#card-latte form').reset();
    } else if (e.target.id === 'add-hamburger-btn') {
        let hamburgerSize;
        if (document.querySelector('#large-hamburger').checked){
            hamburgerSize = Hamburger.SIZE_LARGE;
        } else {
            hamburgerSize = Hamburger.SIZE_CLASSIC;
        };

        let selectedStuffingsHam = [];
        if (document.querySelector('#hamburger-cheese').checked) {
            selectedStuffingsHam.push(Hamburger.STUFFING_CHEESE);
        }
        if (document.querySelector('#hamburger-meat').checked) {
            selectedStuffingsHam.push(Hamburger.STUFFING_MEAT);
        }
        if (document.querySelector('#hamburger-sauce').checked) {
            selectedStuffingsHam.push(Hamburger.STUFFING_SAUCE);
        };

        let hamburger = new Hamburger(hamburgerSize, selectedStuffingsHam);
        orders.push(hamburger);
        document.querySelector('#card-hamburger form').reset();
    } else if (e.target.id === 'add-cheeseburger-btn') {
        let cheeseburgerSize;
        if (document.querySelector('#large-сheeseburger').checked){
            cheeseburgerSize = Cheeseburger.SIZE_LARGE;
        } else {
            cheeseburgerSize = Cheeseburger.SIZE_CLASSIC;
        };

        let selectedStuffingsCheese = [];
        if (document.querySelector('#сheeseburger-cheese').checked) {
            selectedStuffingsCheese.push(Cheeseburger.STUFFING_CHEESE);
        }
        if (document.querySelector('#сheeseburger-meat').checked) {
            selectedStuffingsCheese.push(Cheeseburger.STUFFING_MEAT);
        }
        if (document.querySelector('#сheeseburger-sauce').checked) {
            selectedStuffingsCheese.push(Cheeseburger.STUFFING_SAUCE);
        };

        let cheeseburger = new Cheeseburger(cheeseburgerSize, selectedStuffingsCheese);
        orders.push(cheeseburger);
        document.querySelector('#card-cheeseburger form').reset();
    }
}));