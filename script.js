'use strict';

//Урок 2 - Условия

// let num = 50;
// if (num<49){
// 	console.log('neverno')
// }else if (num >100){
// 	console.log('mnogo')
// } else {
// 	console.log('verno')
// }

// (num == 50) ? console.log('Verno') : console.log('Neverno');

// switch (num) {
// 	case num <49:
// 		console.log('neverno');
// 		break;
// 	case num > 100:
// 		console.log('Mnogo');
// 		break;
// 	case num > 80:
// 		console.log('vse mnogo');
// 		break;
// 	case  50 :
// 		console.log ('verno');
// 		break;
// 	default:
// 		console.log('ne tak');
// 		break;
// }



// if (0) {
// 	console.log('Verno');
// } 
// else {
// 	console.log('Ne verno');
// }


//Урок 1
// let money = prompt ("Ваш бюджет на месяц ?", "");
// console.log(money);

// let time = prompt ("Введите дату в формате YYYY-MM-DD","");
// console.log(time);

// let appData = {
// 	money: money,
// 	timeDate:time,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData:time,
// 	savings: false,
// };

// let quash_1 =  prompt ("Введите обязательную статью расходов в этом месяце");
// let quash_2 =  prompt ("Во сколько обойдётся ?");

// appData.expenses.first = quash_1;
// appData.expenses.second = quash_2;
// console.log(appData.expenses);

// alert("Бюджет 1 дня составялет: "+ money/30);



//Урок 3 - Циклы

// let num = 50;

// while (num < 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while(num < 55);

// for(let i = 1;i<8;i++){
// 	if(i==6){
// 		continue;
// 	}
// 	console.log(i);
// }


let money = +prompt ("Ваш бюджет на месяц ?", "");
console.log(money);

let time = +prompt ("Введите дату в формате YYYY-MM-DD","");
console.log(time);

let appData = {
	budjet: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData:time,
	savings: false,
};

for (let i=0;i<2;i++){
	let a =  prompt ("Введите обязательную статью расходов в этом месяце"),
   		b =  prompt ("Во сколько обойдётся ?");

   	if (typeof(a) === 'string' && typeof(a)!= null && typeof(b)!= null
   		&& a != '' && b != ''&& a.length < 10) {
   		console.log('done');
   		appData.expenses[a] = b;
   	} else {
   		break;
   	}

};

appData.moneyPerDay = appData.budjet/30;
alert ('Eжедневный бюджет: ' + appData.moneyPerDay );

if (appData.moneyPerDay<100){
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000 ) {
	console.log ('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}