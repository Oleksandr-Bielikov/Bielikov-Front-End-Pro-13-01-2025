/*
const userAgeOfBirth = prompt('Вкажіть Ваш рік народження.');

if (userAgeOfBirth == null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    const userCity = prompt('Вкажіть місто в якому Ви проживаєте.');
if (userCity == null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
} else {
    const userSport = prompt('Вкажіть Ваш улюблений вид спорту');
if (userSport == null) {
    alert("Шкода, що Ви не захотіли ввести свій вид спорту.");
  } else {
    let cityMessage;
if (userCity === "Київ") {
    cityMessage = "Ти живеш в столиці України";
} else if (userCity === "Вашингтон") {
    cityMessage = "Ти живеш в столиці США";
} else if (userCity === "Лондон") {
    cityMessage = "Ти живеш в столиці Великої Британії";
} else {
    cityMessage = `Ти живеш в місті ${userCity}`; 
} 
    let sportMessage;
if (userSport === "Бокс") {
    sportMessage = "Круто! Хочеш стати Майком Тайсоном";
} else if (userSport === "Футбол") {
    sportMessage = "Круто! Хочеш стати Ліонелем Мессі";
} else if (userSport === "Баскетбол") {
    sportMessage = "Круто! Хочеш стати Майклом Джорданом";
} else {
    sportMessage = `Круто! ${userSport} це чудовий вид спорту!`;
}
alert(`Ти ${userAgeOfBirth} року народження\n${cityMessage}\n${sportMessage}`);
}
  }
}
*/
const userAgeOfBirth = prompt('Вкажіть Ваш рік народження.');

if (userAgeOfBirth == null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    const userCity = prompt('Вкажіть місто в якому Ви проживаєте.');

    if (userCity == null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else {
        const userSport = prompt('Вкажіть Ваш улюблений вид спорту');

    if (userSport == null) {
            alert("Шкода, що Ви не захотіли ввести свій вид спорту.");
    } else {
        let cityMessage;
        switch (userCity) {
            case "Київ":
            cityMessage = "Ти живеш в столиці України";
            break;
            
            case "Вашингтон":
            cityMessage = "Ти живеш в столиці США";
            break;

            case "Лондон":
            cityMessage = "Ти живеш в столиці Великої Британії";
            break;

            default:
            cityMessage = `Ти живеш в місті ${userCity}`;
            }

        let sportMessage;
        switch (userSport) {
            case "Бокс":
            sportMessage = "Круто! Хочеш стати Майком Тайсоном";
            break;

            case "Футбол":
            sportMessage = "Круто! Хочеш стати Ліонелем Мессі";
            break;

            case "Баскетбол":
            sportMessage = "Круто! Хочеш стати Майклом Джорданом";
            break;

            default:
            sportMessage = `Круто! ${userSport} це чудовий вид спорту!`;
            }

        alert(`Ти ${userAgeOfBirth} року народження\n${cityMessage}\n${sportMessage}`);
        }
    }
}