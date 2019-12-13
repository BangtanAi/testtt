let money;
let time;
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(money,time);
let appData = {
    budjet: money,
    timeData: time,
    expenses: {month : prompt("Введите обязательную статью расходов в этом месяце"),
     cost : prompt("Во сколько обойдется?")},
    optionalExpenses: {},
    income: [],
    savings: false
};

// 4

console.log("expenses { " + appData.expenses.month + ":"+ appData.expenses.cost+" }" );

var daily = money / 30;
var daily1 = alert(daily);
console.log(daily);

// for(let i=9;i>0;i--)
// {

// console.log(i);
// }
// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }
// do {console.log(num);
// num++;
// }
// while(num<56);
// for (let i = 1; i < 9; i++){
//     if (i==6) {
//         break
//     }
//     console.log(i)
// }





// var money;
// var time;
// var expens;
// var moneyExpens;
// var everyDay;
// var expenses;
// var appData = {
//     budjet: 0,
//     timeData: '',
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false,
// };
// function checkMoney() {
//     var money = prompt('Ваш бюджет на месяц?');
//     everyDay = money;
//     var time = prompt('Введите дату в формате YYYY-MM-DD');
// if (money&&money > 0) {
//     appData.budjet = money;
//     appData.time = time;
//     console.log('Ваш бюджет на месяц ' + appData.budjet);
// } else {
//     alert('Данные введены не верно. Бюджет на месяц должен быть в числовом формате');
// checkMoney();
// }
// }
// checkMoney();
 
// function checkExpens(){
//     expens = prompt('Введите обязательную статью расходов в этом месяце');
//     moneyExpens = prompt('Во сколько обойдётся');
//     console.log(expens, moneyExpens);
// }
// checkExpens();
// console.log('Бюджет на день ' + everyDay/30);

// var money = prompt('Ваш бюджет на месяц?');
// var time = prompt('Введите дату в формате YYYY-MM-DD');
// console.log(money);
// console.log(time);


// var number = 2;
// var string = " Hello";
// var boolean = true;
// var obj = {};

// var persone = {
//     name: "John",
//     age: 28,
//     isMarried: false
// };
// let arr = ['plum.png', 'orange.png', 'apple.bmp'];

// console.log(persone.name + string);
// let answer = prompt("Есть ли вам 18 лет?", "Да");
// console.log(answer);
// console.log(arr[0]);

// let incr = 10;
// let decr = 5;
// console.log(incr++);
// console.log(decr--);
// console.log(10%3);

// let isChecked = true;
// let isWatched = false;

// console.log(isChecked || isWatched);

// if(3*2 == 7){
//  console.log("Верно!");   
// } else {
//     console.log("Неверно!");
// }

// let num = 130;
// if (num < 40) {
//     console.log('Неверно!');
// } else if (num > 100) {
//     console.log('Много!');
// } else if (num == 50) {
//     console.log('Верно!');
// }
// let num = 50;
// switch (num) {
//     case num < 49:
//         console.log('Неверно!');
//         break;
//     case num > 100:
//         console.log('Верно!');
//         break;
//     case num > 80:
//         console.log('Все еще верно!');
//         break;
//     default:
//         console.log('Что-то пошло не так');
// }