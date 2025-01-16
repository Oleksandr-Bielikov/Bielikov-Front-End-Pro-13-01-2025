let timeHour = prompt('Введіть кількість годин, яку треба перевести в секунди');
timeHour = Number(timeHour);

if (timeHour > 0) {
    alert(timeHour * 3600 + ' секунд')
} else {
    alert('Введіть значення більше ніж 0')
};  