// Задание 1  

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];   

// people.sort(function (a, b) {     
//     if (a.age> b.age) {
//         return 1;     
//     }     
//     if (a.age < b.age) {
//         return -1;     
//     }   
// });    
// console.log(people);

// Задание 2

// function isPositive(elem) {
//     return elem > 0;
// }

// function isMale(people) {
//     return people.gender === 'male'
// }

// function filter(arr, ruleFunction) {
//     let output = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (ruleFunction(arr[i])) {
//             output.push(arr[i]);
//         }
//     }

//     return output;
// }
    
// console.log(filter([3, -4, 1, 9], isPositive));
    
// const people = [
// {name: 'Олег', gender: 'male'},
// {name: 'Глеб', gender: 'male'},
// {name: 'Анна', gender: 'female'},
// {name: 'Оксана', gender: 'female'}
// ];
    
// console.log(filter(people, isMale));

// Задание 3

// let timerId = setInterval(() => console.log(Date()), 3000);

// setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Задание 4

// function delayForSecond(callback) {
//     setTimeout(() => {
// 		if(callback) { 	callback(); }
//     }, 1000)
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })

// Задание 5

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }
//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Gleb'))