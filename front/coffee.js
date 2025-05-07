export class Cappuccino {
    static SIZE_CLASSIC = {name: 'classic size', cost: 40};
    static SIZE_LARGE = {name: 'large size', cost: 60};

    static TOPPING_VANILLA = {name: 'topping vanilla', cost: 5};
    static TOPPING_CHOCOLATE = {name: 'topping chocolate', cost: 7};

    constructor(size, toppings = []) {
        this.size = size;
        this.toppings = toppings;
    };
    
    addToppings(topping) {
        this.toppings.push(topping);
    };

    calculatePrice() {
        let totalPrice = this.size.cost;
        for (let topping of this.toppings) {
            totalPrice += topping.cost; 
        }
        return totalPrice;
    }

    getDescription() {
        let toppingsNames = this.toppings.map(t => t.name).join(', ') || 'без топінгів';
        return `Капучино (${this.size.name}) з: ${toppingsNames}. Ціна: ${this.calculatePrice()} грн.`;
    }
}

export class Latte extends Cappuccino {
    static SIZE_CLASSIC = {name: 'classic size', cost: 45};
    static SIZE_LARGE = { name: 'large size', cost: 65 };
    
    constructor(size, toppings = []) {
     super(size, toppings);
    }

    getDescription() {
        let toppingsNames = this.toppings.map(t => t.name).join(', ') || 'без топінгів';
        return `Латте (${this.size.name}) з: ${toppingsNames}. Ціна: ${this.calculatePrice()} грн.`;
    }
}