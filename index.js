const form = document.getElementById('form');
const formContainer = document.getElementById('form-container');
const table = document.getElementById('table');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let name = form.elements['name'].value;
    let surname = form.elements['surname'].value;
    let date = form.elements['date'].value;
    let gender = form.elements['gender'].value;
    let city = form.elements['city'].value;
    let adress = form.elements['adress'].value;
    let languages = document.querySelectorAll('input[name="language"]');

    let selectedLanguages = [];
    languages.forEach((box) => {
      if (box.checked) {
        selectedLanguages.push(box.value);
      }
    });

    document.getElementById('res-name').textContent = name;
    document.getElementById('res-surname').textContent = surname;
    document.getElementById('res-date').textContent = date;
    document.getElementById('res-gender').textContent = gender;
    document.getElementById('res-city').textContent = city;
    document.getElementById('res-adress').textContent = adress;
    document.getElementById('res-languages').textContent = selectedLanguages.join(', ');

    formContainer.style.display = 'none';
    table.style.display = 'block';
});
