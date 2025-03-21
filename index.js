let array = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
    let ul = document.createElement('ul');
        for (let item of array) {
        let li = document.createElement('li');
        if (Array.isArray(item)) {
            li.appendChild(generateList(item));
        } else {
            li.textContent = item; 
        }
        ul.appendChild(li);
    }
    return ul;
}
document.body.appendChild(generateList(array));