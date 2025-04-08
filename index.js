class Hamburger {
    static SIZE_SMALL = { cost: 50, calories: 20 };
    static SIZE_BIG = { cost: 100, calories: 40 };

    static STUFFING_CHEESE = { cost: 10, calories: 20 };
    static STUFFING_SALAD = { cost: 20, calories: 5 };
    static STUFFING_POTATO = { cost: 15, calories: 10 };

    static TOPPING_SAUCE = { cost: 15, calories: 0 };
    static TOPPING_MAYO = { cost: 20, calories: 5 };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let totalPrice = this.size.cost + this.stuffing.cost;
        for (let topping of this.toppings) {
            totalPrice += topping.cost;
        }
        return `${totalPrice} тугриків`;
    }

    calculateCalories() {
        let totalCalories = this.size.calories + this.stuffing.calories;
        for (let topping of this.toppings) {
            totalCalories += topping.calories;
        }
        return `${totalCalories} калорій`;
    }
}
// // маленький гамбургер із начинкою із сиру
// const hamburger =  new Hamburger (Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// // Добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // Запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculateCalories());
// // скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());
// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());