const array = [1, 2, 5, 3, 4, 5, 6, 5, 7];

function removeElement(array, item) {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
        array.splice(index, 1);
    }
    console.log(array);
}


removeElement(array, 5);
