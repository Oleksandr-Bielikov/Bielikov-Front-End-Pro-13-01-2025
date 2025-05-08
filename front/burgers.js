export class Hamburger {
    static SIZE_CLASSIC = {name: 'hamburger classic size', cost: 60};
    static SIZE_LARGE = {name: 'hamburger large size', cost: 80};

    static STUFFING_CHEESE = {name: 'sheese', cost: 7};
    static STUFFING_MEAT = {name: 'meat', cost: 10};
    static STUFFING_SAUCE = {name: 'sauce', cost: 5};

    constructor(size, stuffings = []) {
        this.size = size;
        this.stuffings = stuffings;
    };
    
    addStuffing(stuffing) {
        this.stuffings.push(stuffing);
    };

    calculatePrice() {
        let totalPrice = this.size.cost;
        for (let stuffing of this.stuffings) {
            totalPrice += stuffing.cost;
        }
        return totalPrice;
    }

    getDescription() {
        let stuffingsNames = this.stuffings.map(s => s.name).join(', ');
        return `Гамбургер (${this.size.name}) з начинками: ${stuffingsNames}. Ціна: ${this.calculatePrice()} грн.`;
    }

}

export class Cheeseburger extends Hamburger {
    static SIZE_CLASSIC = {name: 'cheeseburger classic size', cost: 65};
    static SIZE_LARGE = { name: 'cheeseburger large size', cost: 85 };
    
    constructor(size, stuffings = []) {
     super(size, stuffings);
    }

    getDescription() {
        let stuffingsNames = this.stuffings.map(s => s.name).join(', ');
        return `Чізбургер (${this.size.name}), додатково: ${stuffingsNames}. Ціна: ${this.calculatePrice()} грн.`;
    }
};