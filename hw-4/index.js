// Задание 1

// const getSmallerNumber = (a, b) => {
//     if (a < b) {
//         return a;
//     } else if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(getSmallerNumber(2, 10));
// console.log(getSmallerNumber(81, 19));
// console.log(getSmallerNumber(50, 50));

// Задание 2

// const getEvenOrOdd = (a) => {
//     if (a % 2 === 0) {
//         return('Число четное');
//     } else {
//         return('Число нечетное');
//     }
// }

// console.log(getEvenOrOdd(5));
// console.log(getEvenOrOdd(0));
// console.log(getEvenOrOdd(-10));
// console.log(getEvenOrOdd(16));

// Задание 3
// 3.1

// const mult = (a) => {
//     console.log(a**2);
// }

// mult(5);
// mult(6);
// mult(10);

// 3.2

// const mult2 = (b) => {
//     return(b**2);
// }

// console.log(mult2(9));
// console.log(mult2(11));
// console.log(mult2(3));

// Задание 4

// const sayHi = (userAge = Number(prompt('Сколько вам лет?'))) => {
//     if (userAge >= 0 && userAge <= 12) {
//         alert('Привет, друг!');
//     } else if (userAge >= 13) {
//         alert('Добро пожаловать!');
//     } else if (userAge < 0) {
//         alert('Вы ввели неправильное значение');
//     }
// }

// sayHi();

// Задание 5

// let userNumber1 = prompt('Введите первое число');
// let userNumber2 = prompt('Введите второе число');

// const stringOrNumber = () => {
//     if (isNaN(userNumber1) || isNaN(userNumber2)) {
//         return('Одно или оба значения не являются числом');
//     } else {
//         return(userNumber1 * userNumber2);
//     }
// }

// console.log(stringOrNumber());

// Задание 6

// let userNumber = prompt('Введите число от 0 до 10').trim();

// const cubing = () => {
//     if (userNumber < 0 || userNumber > 10) {
//         return('Вы не ввели число из заданного промежутка');
//     } else if (isNaN(userNumber) || userNumber === '' || userNumber === null) {
//         return('Переданный параметр не является числом');
//     } else {
//         return(userNumber**3);
//     }
// }

// console.log(cubing());

// Задание 7

// const pi = 3.14;

// function getArea() {
//     return `площадь круга - ${pi * this.radius**2}`;
// }

// function getPerimetr() {
//     return `периметр окружности - ${2 * pi * this.radius}`;
// }

// let circle1 = {
//     radius: 5,
//     circleArea: getArea,
//     circlePerimetr: getPerimetr,
// }

// let circle2 = {
//     radius: 6,
//     circleArea: getArea,
//     circlePerimetr: getPerimetr,
// }

// console.log(circle1.circleArea());
// console.log(circle1.circlePerimetr());
// console.log(circle2.circleArea());
// console.log(circle2.circlePerimetr());