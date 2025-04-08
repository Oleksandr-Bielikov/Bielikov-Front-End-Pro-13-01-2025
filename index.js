function Human(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

function Car(model, year, owner = null) {
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.info = function () {
        const ownerInfo = this.owner ? this.owner.getInfo() : "No owner";
        alert(`Model: ${this.model}. Year: ${this.year}. Owner: ${ownerInfo}`);
    }
}

function mainFunc() {
    let userName = prompt("Введіть ім'я");
        while (!userName || userName === '') {
            alert("Введіть коректне значення");
            userName = prompt("Введіть ім'я");
        }
    
    let userAge = prompt("Введіть вік");
        while (isNaN(userAge) || userAge < 18) {
            alert("Вік має бути більше 18 років");
            userAge = prompt("Введіть вік");
        }

    let person = new Human(userName, parseInt(userAge));

    let carModel = prompt("Введіть марку авто");
    let carYear = prompt("Введіть рік авто");
    let car = new Car(carModel, parseInt(carYear), person);

    alert(person.getInfo());
    car.info();
}