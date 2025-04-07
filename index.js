const addButton = document.querySelector('#add-button');
const userList = document.querySelector('#user-list');
const formContainer = document.querySelector('#form-container');
const addForm = document.querySelector('#add-form');
const saveButton = document.querySelector('#save-button');
const cancelButton = document.querySelector('#cancel-button');

addButton.addEventListener('click', function () {
    addForm.style.display = 'block';
    formContainer.style.display = 'block';

})

cancelButton.addEventListener('click', function () {
    addForm.style.display = 'none';
    formContainer.style.display = 'none';
})

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = addForm.elements['name'].value;
    const email = addForm.elements['email'].value;
    const id = Date.now();

    addUserToDOM(name, email, id);
    addToLocalStorage(name, email, id);

    addForm.reset();
    formContainer.style.display = 'none';
});

function addUserToDOM(name, email, id) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.setAttribute('data-id', id);

    userDiv.innerHTML = `
        <strong>Ім'я</strong> ${name}, 
        <strong>Email:</strong> ${email}  
        <button class="view-button">View</button>
        <button class="edit-button">Edit</button>
        <button class="remove-button">Remove</button>
    `;

    userList.appendChild(userDiv);
}

function addToLocalStorage(name, email, id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ id, name, email });
    localStorage.setItem('users', JSON.stringify(users));
}

window.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        addUserToDOM(user.name, user.email, user.id);
    });
});

userList.addEventListener('click', (e) => {
    const userDiv = e.target.closest('.user');
    if (!userDiv) return;

    const id = Number(userDiv.getAttribute('data-id'));

    if (e.target.classList.contains('remove-button')) {
        userDiv.remove();
        removeFromLocalStorage(id);
    }

    if (e.target.classList.contains('view-button')) {
        viewUser(id);
    }

    if (e.target.classList.contains('edit-button')) {
        editUser(id);
    }
});

function removeFromLocalStorage(id) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(users));
}

function viewUser(id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.id === id);

    const container = document.getElementById('details-container');
    container.innerHTML = '';

    if (user) {
        container.innerHTML = `
            <h3>Перегляд користувача</h3>
            <p><strong>Ім'я:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <button onclick="clearDetails()">Закрити</button>
        `;
    }
}

function editUser(id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.id === id);

    const container = document.getElementById('details-container');
    container.innerHTML = '';

    if (user) {
        container.innerHTML = `
            <h3>Редагувати користувача</h3>
            <form id="edit-form">
                <label>
                    Ім'я:
                    <input type="text" name="name" value="${user.name}" required />
                </label>
                <br /><br />
                <label>
                    Email:
                    <input type="email" name="email" value="${user.email}" required />
                </label>
                <br /><br />
                <button type="submit">Зберегти</button>
                <button type="button" onclick="clearDetails()">Скасувати</button>
            </form>
        `;

        document.getElementById('edit-form').addEventListener('submit', function (e) {
            e.preventDefault();

            const newName = e.target.elements['name'].value;
            const newEmail = e.target.elements['email'].value;

            user.name = newName;
            user.email = newEmail;

            localStorage.setItem('users', JSON.stringify(users));

            const userDiv = document.querySelector(`.user[data-id="${id}"]`);
            if (userDiv) {
                userDiv.innerHTML = `
                    <strong>Ім'я</strong> ${newName}, 
                    <strong>Email:</strong> ${newEmail}  
                    <button class="view-button">View</button>
                    <button class="edit-button">Edit</button>
                    <button class="remove-button">Remove</button>
                `;
            }

            clearDetails();
        });
    }
}

function clearDetails() {
    const container = document.getElementById('details-container');
    container.innerHTML = '';
}
