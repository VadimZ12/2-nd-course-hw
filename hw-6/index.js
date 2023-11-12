// Задание 1

// let str = 'abcEFmDKdg';
// str  = str.toUpperCase();
// console.log(str);

// Задание 2

// function searchStart(arr, str) {
//     arr = arr.filter(function (arrElem) {
//         return arrElem.toLowerCase().startsWith(str)
//     })
//     console.log(arr);
// }

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// Задание 3

// let num = 32.58884;

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// Задание 4

// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5

// const getRandom = () => {
//     console.log(Math.round(Math.random() * 10));
// }

// getRandom();

// Задание 6

// const getRandomArrNumbers = (num) => {
//     let arr = [];

//     for (let i = 0; i < Math.floor(num / 2); i++) {
//         let randomNum = Math.round(Math.random() * num);
//         arr.push(randomNum);
//     }
//     return arr;
// }

// console.log(getRandomArrNumbers(5));
// console.log(getRandomArrNumbers(10));
// console.log(getRandomArrNumbers(50));

// Задание 7

// const getNumber = (minNumber, maxNumber) => {
    
//     let result = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)
//     return result;
// }

// console.log(getNumber(2, 5));

// Задание 8

// const currentDate = new Date();
// const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
// console.log(currentDate.toLocaleDateString('ru-RU', options));

// Задание 9

// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate.toDateString());

// Задание 10

// let currentDate = new Date();

// const getDateAndTime = (date) => {
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//     let formattedDate = 'Дата: ' + currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear() + ' - это ' + days[currentDate.getDay()];
//     let formattedTime = currentDate.toLocaleTimeString('ru-Ru');

//     return formattedDate + '\n' + formattedTime;
// }

// console.log(getDateAndTime(currentDate));
