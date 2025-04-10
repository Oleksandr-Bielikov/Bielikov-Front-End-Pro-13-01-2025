class Student {

    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.marks = [];
        this.logOfVisits = Array(25).fill(null);
    };

    // Визначити вік студента
    getAge() {
        let year = new Date().getFullYear();
        return `Студенту ${year - this.yearOfBirth} років`;
    };

    // Додати оцінку в масив оцінок
    addMark(mark) {
        let value = Number(mark);
        this.marks.push(value);
    };

    // Визначити середнє значення оцінок
    getAverageOfMarks() {
       let resultOfMarks = this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
       return resultOfMarks;
    };

    // Метод для почергового додавання значень в журнал відвідувань
    #markVisit(value) {
        let index = this.logOfVisits.indexOf(null);
        if(index !== -1) {
            this.logOfVisits[index] = value;
        }
    };

    // Присутній
    present() {
        this.#markVisit(true);
    };

    // Відсутній
    absent() {
        this.#markVisit(false);
    };

    // Визначити середню відвідуваність
    getAverageOfVisits () {
        let visits = this.logOfVisits.filter(v => v !== null);
        if (visits.length === 0) return 0;
        let resultOfVisits = visits.filter(v => v === true).length / visits.length;
        return resultOfVisits;
    };
    
    summary () {
        let averageMarks = this.getAverageOfMarks();
        let averageVisits = this.getAverageOfVisits();

        if (averageMarks > 90 && averageVisits > 0.9) {
            return "Молодець!";
        } else if (averageMarks < 90 && averageVisits < 0.9) {
            return "Редиска!";
        } else {
            return "Добре, але можна краще!";
        }
    };
}

// Студент 1:
let studentOne = new Student("Serhiy", "Zhuravel", 1984);
studentOne.addMark(100);
studentOne.addMark(100);
studentOne.present();
studentOne.present();

console.log(studentOne);
console.log(studentOne.getAge());
console.log(studentOne.summary());

// Студент 2:
let studentTwo = new Student("Oleksandr", "Bielikov", 1996);
studentTwo.addMark(95);
studentTwo.addMark(80);
studentTwo.present();
studentTwo.present();

console.log(studentTwo);
console.log(studentTwo.getAge());
console.log(studentTwo.summary());

// Студент 3:
let studentThree = new Student("Elon", "Musk", 1971);
studentThree.addMark(60);
studentThree.addMark(60);
studentThree.present();
studentThree.absent();
studentThree.absent();

console.log(studentThree);
console.log(studentThree.getAge());
console.log(studentThree.summary());
