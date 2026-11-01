"use strict";
// const ageVictor = 30;
// const ageDasha = 29;
// let isOlder: boolean = ageDasha > ageVictor; 
// console.log(`Даша старше Виктора: ${isOlder}`);
// isOlder = ageVictor > ageDasha;
// console.log(`Виктор старше Даши: ${isOlder}`)
Object.defineProperty(exports, "__esModule", { value: true });
// const fixSalary = 250000;
// let bonusCash = 0;
// if (bonusCash > 400000) {
//     console.log("Сотрудник эффективен")
//     bonusCash = 10;
// }
// else if (bonusCash > 300000) {
//     console.log("Сотрудник должен улучшить результаты")
//     bonusCash = 15;
// }
// else  {
//     console.log("Сотруднику необходимо пройти переквалификацию")
//     bonusCash = 20;
// }
// const salary = fixSalary + (fixSalary / 100) * bonusCash;
// console.log (`Зарплата: ${salary}`)
// const engineerExp: number = 3;
// const engProjects: number = 12;
// const fixSalary = 250000;
// function getSalary(fixSalary: number, engProjects: number, engineerExp: number) {
// const isProfit = engProjects / engineerExp >= 4
// let premium = 0;
// if (isProfit) {
//     if (fixSalary > 400000) {
//         premium = 10;
//     }
//     else if (fixSalary > 300000) {
//         premium = 15;
//     }
//     else {
//         premium = 20;
//     }
// }
// const salary = fixSalary + (fixSalary / 100) * premium;
// console.log(`Зарпалат сотрудника ${salary}`)
// }
// getSalary(250000, 3, 12)
// const birthYear = (engExp: number, engProjects: number) => {
// const eff = engProjects / engExp;
//     if (eff >= 4) {
//         return "'Отлично"
//     } else if (eff >= 3) {
//         return "Норм";
//     } else {
//         return "Плохо";
//     }
// }
// function week(dayWeek: number) {
// let dayNumber: string;
// switch(dayWeek) {
//     case 1:
//         console.log('Понедельник')
//         break;
//     case 2:
//         console.log('Вторник')
//         break;
//     case 3:
//         console.log('Среда')
//         break;
//     case 4:
//         console.log('Четверг')
//         break;
//     case 5:
//         console.log('Пятница')
//         break;
//     case 6:
//         console.log('Суббота')
//         break;
//     case 7:
//         console.log('Воскресенье')
//         break;
// }
// }
// week(1)
// week(4)
// week(6)
// enum colors {
//     red = 'RED',
//     green = 'GREEN',
//     blue = 'BLUE'
// }
// function colorOf(color: colors) {
//     switch(color) {
//         case colors.red:
//         return 'красный'
//          case colors.green:
//         return 'зеленый'
//          case colors.blue:
//         return 'синий'
//     }
// }
// type ResuktsCallBack = (result: number) => void;
// function compute(a: number, b:number, callback: ResuktsCallBack): void {
//     const sum = a + b;
//     callback(sum);
// }
// compute(2,3, (result) =>
// console.log(`Сумма:  ${result}`))
console.log('1. Начало');
setTimeout(() => {
    console.log('2. Прошла секунда');
}, 1000);
console.log('3. Конец');
