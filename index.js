const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
   let element = array.indexOf(item);
    array.splice(element, 1);
    console.log(array);
}


removeElement(array, 5);
