// Задание 1
// Выведите в консоль 2 раза слово «Привет».

// for (let i = 0; i < 2; i++) {
//     console.log('Привет');
// }

// Задание 2
// Выведите в консоль цифры от 1 до 5.

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Задание 3
// Выведите в консоль числа от 7 до 22.

// for (let i = 7; i < 23; i++) {
//     console.log(i);
// }

// Задание 4
// Дан объект obj с ключами «Коля», «Вася», «Петя» и с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля — зарплата 200 долларов.'

// let obj = {
//     Коля: '200',
//     Вася: '300',
//     Петя: '400',
// }

// for (const key in obj) {
//     console.log(`${key} — зарплата ${obj[key]} долларов.`);
// }

// Задание 5
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация — это проход цикла), и запишите его в переменную num.

// let n = 1000;
// let num = 0;
// while (n > 50) {
//     n = n / 2;
//     num++;
// }
// console.log(n);
// console.log(num);

// Задание 6
// В вашей компании пятница является днем отчетным.

// Нам нужно написать программу, которая считает дни месяца по датам, определяет, какой день пятница, и выводит сообщение с напоминанием, что нужно подготовить еженедельный отчет.

// Условия задачи:

// Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7).

// Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида:

// "Сегодня пятница, ...-е число. Необходимо подготовить отчет."

// В нашем месяце 31 день. В результате у вас должно вывестись от 4 до 5 сообщений с напоминаниями по разным датам.

// let firstFriday = 6;

// for (let i = firstFriday; i <= 31; i += 7) {
//     console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
// }
