// Задание 1

// let arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 10) {
//         console.log(arr[i]);
//         break;
//     }
//     console.log(arr[i]);
// }

// Задание 2

// let arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));

// Задание 3

//  let arr = [1, 3, 5, 10, 20];
//  console.log(arr.join(' '));

// Задание 4

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     let subArray = [];
//     for (let j = 0; j < 3; j++) {
//         subArray.push(1);
//     }
//     arr.push(subArray);
// }

// console.log(arr);

// Задание 5

// let arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Задание 6

// let arr = [9, 8, 7, 'a', 6, 5];
// arr.sort().pop();
// console.log(arr);

// Задание 7

// let arr = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt('Введите число от 1 до 20'));

// if (arr.includes(userNumber)) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }

// Задание 8
 
// let str = 'abcdef';
// str = str.split('').join('');
// console.log(str);

// Задание 9

// let arr = [[1, 2, 3,],[4, 5, 6]];
// arr = arr.flat();
// console.log(arr);

// Задание 10

// let arr = [1, 3, 4, 5, 7];

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }

// Задание 11

// let numbers = [2, 3, 10, 5]

// function getArrSquare(arr) {
//     return arr.map(num => num**2);
// }

// let numbersSquare = getArrSquare(numbers);

// console.log(numbersSquare);

// Задание 12

// function getLengthWords(arr) {
//     return arr.map(word => word.length);   
// }

// let words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// let wordsLength = getLengthWords(words);

// console.log(wordsLength);

// Задание 13

// function filterPositive(arr) {
//     return arr.filter(number => number < 0)
// }

// console.log(filterPositive([-1, 0, 5, -10, 56]));
// console.log(filterPositive([-25, 25, 0, -1000, -2]));
