function gameSeasons() {
    let userMonthNumber = Number(prompt('Введите номер месяца  от 1 до 12, чтобы узнать к какому времени года он относится').trim());
    console.log(userMonthNumber);
    if (userMonthNumber === '' || isNaN(userMonthNumber)) {
        return 'Вы не ввели число из указанного промежутка!';
    } else if (userMonthNumber <= 0 || userMonthNumber >= 13) {
        return 'Вы не ввели число из указанного промежутка!';
    } else if (userMonthNumber === 1 || userMonthNumber === 2 || userMonthNumber === 12) {
        return 'Зима';
    } else if (userMonthNumber >= 3 && userMonthNumber <= 5) {
        return 'Весна';
    } else if (userMonthNumber >= 6 && userMonthNumber <= 8) {
        return 'Лето';
    } else {
        return 'Осень';
    }
}

function gameFruits() {
    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
        alert(fruits);
    let firstElement = prompt('Чему равнялся первый элемент массива?');
    let lastElement = prompt('Чему равнялся последний элемент массива?');
    if (firstElement === fruits[0] && lastElement === fruits[fruits.length - 1]) {
        alert('Поздравляю! Вы угадали оба элемента!');
    } else if (firstElement === fruits[0] || lastElement === fruits[fruits.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно!');
    }
}