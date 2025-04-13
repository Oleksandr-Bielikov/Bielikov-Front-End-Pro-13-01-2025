class ApartmentsBuilding {
    constructor(address) {
        this.address = address;
        this.apartments = [];
    }

    addApartments(apartment) {
        this.apartments.push(apartment)
    }
    getBuildingInfo() {
        let info = `Адреса будинку: ${this.address}<br>`;
        info += `Кількість квартир: ${this.apartments.length}<br>`;

        this.apartments.forEach(apartment => {
            info += `Квартира №${apartment.number}:<br>`;
            apartment.residents.forEach(resident => {
                info += `  Мешканець: ${resident.name}, Вік: ${resident.age}<br>`;
            });
        });

        return info;
    }
}

class Apartments {
    constructor(number) {
        this.number = number;
        this.residents = [];
    }

    addResidents(resident) {
        this.residents.push(resident);
    }
}

class Resident {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

/// --->
let building = null;

let formBuilding = document.querySelector('#building');
let formApartments = document.querySelector('#apartments');
let showDataButton = document.querySelector('#showData');
let buildingDataDiv = document.querySelector('#buildingData');

formBuilding.addEventListener('submit', function (e) {
  e.preventDefault();

  let address = document.querySelector('#add-building').value;

  if (!address) {
      alert('Будь ласка, введіть адресу будинку');
      return;
  }

  building = new ApartmentsBuilding(address);
  console.log('Створено новий будинок:', building);
  formApartments.removeAttribute('hidden');
})

formApartments.addEventListener('submit', function (e) {
    e.preventDefault();

    let quantityOfApartments = parseInt(document.querySelector('#add-apartments').value);

    if (!quantityOfApartments || quantityOfApartments <= 0) {
        alert('Будь ласка, введіть кількість квартир');
        return;
    }

    for (let i = 0; i < quantityOfApartments; i++) {
        let apartmentNumber = prompt(`Введіть номер квартири ${i + 1}`);

        if (!apartmentNumber) {
            alert('Будь ласка, введіть номер квартири');
            return;
        }

        let apartment = new Apartments(apartmentNumber);
        let numberOfResidents = parseInt(prompt(`Кількість мешканців для квартири №${apartmentNumber}:`));

        if (!numberOfResidents || numberOfResidents <= 0) {
            alert('Будь ласка, введіть кількість мешканців для квартири');
            return;
        }

        for (let j = 0; j < numberOfResidents; j++) {
            let residentName = prompt(`Ім'я мешканця ${j + 1}:`);
            if (!residentName) {
                alert("Будь ласка, введіть ім'я мешканця");
                return;
            }

            let residentAge = parseInt(prompt(`Вік мешканця ${j + 1}:`));
            if (!residentAge || residentAge <= 0) {
                alert('Будь ласка, введіть коректний вік мешканця');
                return;
            }

            let resident = new Resident(residentName, residentAge);
            apartment.addResidents(resident);
        }

        building.addApartments(apartment);
    }
    console.log('Додано квартири з мешканцями:', building);
    showDataButton.removeAttribute('hidden');
})

showDataButton.addEventListener('click', function () {
    if (building) {
        buildingDataDiv.innerHTML = building.getBuildingInfo();
    } else {
        alert('Будинок ще не створений!');
    }
})