// // Задание 1

// let password = '123456';
// let userAnswer  = prompt('Введите пароль');
// (userAnswer === password) ? console.log('Пароль введен верно') : console.log('Пароль введен неверно');

// // Задание 2

// let c;
// function check (c) {
//     if (c > 0 && c < 10) {
//         console.log('верно');
//     } else {
//         console.log('неверно');
//     }
// }
// check(2);
// check(0);
// check(10);
// check(-3);

// // Задание 3

// let d = 50;
// let e = 1000;

// (d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

// // Задание 4

// let a = '2';
// let b = '3';
// alert(+a + +b);

// // Задание 5

// let monthNumber  = Number(prompt('Введите число от 1 до 12, чтобы увидеть какому месяцу оно соответсвует'));

// switch (monthNumber) {
//     case 1:
//         console.log('Январь');
//         break;

//     case 2:
//         console.log('Февраль');
//         break;

//     case 3:
//         console.log('Март');
//         break;

//     case 4:
//         console.log('Апрель');
//         break;
        
//     case 5:
//         console.log('Май');
//         break;
    
//     case 6:
//         console.log('Июнь');
//         break;
    
//     case 7:
//         console.log('Июль');
//         break;
    
//     case 8:
//         console.log('Август');
//         break;    

//     case 9:
//         console.log('Сентябрь');
//         break;
        
//     case 10:
//         console.log('Октябрь');
//         break;
        
//     case 11:
//         console.log('Ноябрь');
//         break;
        
//     case 12:
//         console.log('Декабрь');
//         break;    

//     default:
//         console.log('Такого месяца не существует');
//         break;
// }

// // Задание 7

// let userNumber = Number(prompt('Пожалуйста, введите любое число'));
// console.log(userNumber);
// if (isNaN(userNumber)) {
//     console.log('Вы ввели не число, попробуйте сначала');
// } else {
//     (userNumber % 2 === 0) ? console.log('Число четное') : console.log('Число нечетное');
// }

// // Задание 8

// let clientOS = Number(prompt('Выберите вашу операционую систему: 0 - iOS, 1 - Android'));
// let clientDeviceYear = Number(prompt('Введите год выпуска вашего устройства'));

// if (clientOS === 0 && clientDeviceYear >= 2015) {
//     console.log('Установите версию приложения для iOS по ссылке');
// } else if (clientOS === 0 && clientDeviceYear <= 2015) {
//     console.log('Установите облегченную версию приложения для iOS по ссылке');
// } else if (clientOS === 1 && clientDeviceYear >= 2015) {
//     console.log('Установите версию приложения для Android по ссылке');
// } else if (clientOS === 1 && clientDeviceYear <= 2015) {
//     console.log('Установите облегченную версию приложения для iOS по ссылке');
// } else {
//     console.log('Вы не ввели требуемые данные');
// }