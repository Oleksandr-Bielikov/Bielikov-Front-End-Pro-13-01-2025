let coffeeButton = document.querySelector('.coffee-button');
let burgersButton = document.querySelector('.burgers-button');
let coffeeDiv = document.querySelector('.coffee-div');
let burgersDiv = document.querySelector('.burgers-div');
let menu = document.querySelector('.menu-category');
let turnBackCoffee = document.querySelector('.turn-back-coffee');
let turnBackBurgers = document.querySelector('.turn-back-burgers');

burgersButton.addEventListener('click', () => {
    burgersDiv.removeAttribute('hidden');
    menu.setAttribute('hidden', '');
});

coffeeButton.addEventListener('click', () => {
    coffeeDiv.removeAttribute('hidden');
    menu.setAttribute('hidden', '');
});

turnBackCoffee.addEventListener('click', () => {
    menu.removeAttribute('hidden');
    coffeeDiv.setAttribute('hidden', '');
});

turnBackBurgers.addEventListener('click', () => {
    menu.removeAttribute('hidden');
    burgersDiv.setAttribute('hidden', '');
});

////////////////////////////////////////////////////////
class Latte {
    static SIZE_SMALL = { cost: 55 };
    static SIZE_BIG = { cost: 75 };

    static TOPPING_VANIL = { cost: 5 };
    static TOPPING_CHOCO = { cost: 7 };

    constructor(size) {
        this.size = size;
        this.toppings = [];
    }

    addToppings(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let totalPrice = this.size.cost;
        for (let topping of this.toppings) {
            totalPrice += topping.cost;
        }
        return`${totalPrice} грн.`;
    }
}

class Cappucino extends Latte {
    static SIZE_SMALL = { cost: 50 };
    static SIZE_BIG = { cost: 70 };
};

class Hamburger {
    static SIZE_SMALL = { cost: 60 };
    static SIZE_BIG = { cost: 80 };

    static STUFFING_MEAT = { cost: 15 };
    static STUFFING_CHEESE = { cost: 10 };
    static STUFFING_SAUCE = { cost: 7 };

    constructor(size) {
        this.size = size;
        this.stuffings = []
    }

    addStuffings(stuffing) {
        this.stuffings.push(stuffing);
    }

    calculatePrice() {
        let totalPrice = this.size.cost;
        for (let stuffing of this.stuffings) {
            totalPrice += stuffing.cost;
        }
        return`${totalPrice} грн.`;
    }
}

class Cheeseburger extends Hamburger {
    static SIZE_SMALL = { cost: 65 };
    static SIZE_BIG = { cost: 85 };
}

// let cappucino = document.querySelector('.cappucino');
// let latte = document.querySelector('.latte');
// let hamburger = document.querySelector('.hamburger');
// let cheeseburger = document.querySelector('.cheeseburger');
// let addCoffeeButton = document.querySelector('.add-coffee');
// let addBurgerButton = document.querySelector('.add-burger');
// let list = document.querySelector('.offcanvas-body');

