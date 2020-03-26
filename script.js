'use strict';
//Урок 2

let num = 50;
if (num<49){
	console.log('neverno')
}else if (num >100){
	console.log('mnogo')
} else {
	console.log('verno')
}

(num == 50) ? console.log('Verno') : console.log('Neverno');

switch (num) {
	case num <49:
		console.log('neverno');
		break;
	case num > 100:
		console.log('Mnogo');
		break;
	case num > 80:
		console.log('vse mnogo');
		break;
	case  50 :
		console.log ('verno');
		break;
	default:
		console.log('ne tak');
		break;
}



// if (0) {
// 	console.log('Verno');
// } 
// else {
// 	console.log('Ne verno');
// }


//Урок 1
// let money = prompt ("Ваш бюджет на месяц ?", "");
// console.log(money);

// let time = prompt ("Введите дату в формате YYYY-MM-DD");
// console.log(time);

// let appData = {
// 	money: money,
// 	timeDate:time,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	savings: false,
// };

// let quash_1 =  prompt ("Введите обязательную статью расходов в этом месяце");
// let quash_2 =  prompt ("Во сколько обойдётся ?");

// appData.expenses.first = quash_1;
// appData.expenses.second = quash_2;
// console.log(appData.expenses);

// alert("Бюджет 1 дня составялет: "+ money/30);