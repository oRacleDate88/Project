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

//Урок по циклам 

// let money = +prompt ("Ваш бюджет на месяц ?", "");
// console.log(money);

// let time = +prompt ("Введите дату в формате YYYY-MM-DD","");
// console.log(time);

// let appData = {
// 	budjet: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData:time,
// 	savings: false,
// };

// for (let i=0;i<2;i++){
// 	let a =  prompt ("Введите обязательную статью расходов в этом месяце"),
//    		b =  prompt ("Во сколько обойдётся ?");

//    	if (typeof(a) === 'string' && typeof(a)!= null && typeof(b)!= null
//    		&& a != '' && b != ''&& a.length < 10) {
//    		console.log('done');
//    		appData.expenses[a] = b;
//    	} else {
//    		i=i-1;
//    	}

// };

// appData.moneyPerDay = appData.budjet/30;
// alert ('Eжедневный бюджет: ' + appData.moneyPerDay );

// if (appData.moneyPerDay<100){
// 	console.log('Минимальный уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
// 	console.log('Средний уровень достатка');
// } else if (appData.moneyPerDay > 2000 ) {
// 	console.log ('Высокий уровень достатка');
// } else {
// 	console.log('Произошла ошибка');
// }

// Урок по функциям 

// let num = 10;

// function showFirstMessage(text) { //Название-глагол с обозначением
// 	alert (text);
// 	console.log(num);
// }

// //Замыкание функции - функция сначала ищет переменную внутри себя ,а потом во внешней 
// //то есть замыкание - функция со всеми внешними переменными ей достпуными

// showFirstMessage("Hello");
// console.log(num);

// function calc (a,b) {
// 	return (a+b);
// }
//!!!!!!!!!!!!!!!функции деклорации - задаются до начала кода. До объявления
//функции  экспрешен 
// let calc = function (a,b) {
// 	return (a+b);
// }
// для ES6 , стрелочная функция

// let calc = (a,b) => {a+b}


// console.log(calc(3,4));
// console.log(calc(8,4));

// function retVar (){
// 	let num = 50;
// 	return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

//методы - вспомогательные функции
// свойства - вспомогательные значения
//     -свойство length

// let str = 'test';
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = '12.2';
// // console.log (Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// дз 4 
// let money,time;

// function start() {
// 	money = +prompt ("Ваш бюджет на месяц ?", ""),
// 	time = prompt ("Введите дату в формате YYYY-MM-DD","");

// 	while(isNan(money) || money =='' || money==null) {  //isNan - проверка,что что-то ввели
// 		//null - чтобы П не смог нажать Отмена
// 		money = +prompt ("Ваш бюджет на месяц ?", "");
// 	}
// }
// start();

// let appData = {
// 	budjet: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData:time,
// 	savings: true,
// };

// function chooseExpenses() {
// 	for (let i=0;i<2;i++){
// 	let a =  prompt ("Введите обязательную статью расходов в этом месяце"),
//    		b =  prompt ("Во сколько обойдётся ?");

//    	if (typeof(a) === 'string' && typeof(a)!= null && typeof(b)!= null
//    		&& a != '' && b != ''&& a.length < 10) {
//    		console.log('done');
//    		appData.expenses[a] = b;
//    	} else {
//    		i=i-1;
//    	} 
//    }
// }

// chooseExpenses();

// appData.moneyPerDay = (appData.budjet/30).toFixed();
// // если в свойстве поменять цифру,то обнулит до этой цифры после запятой

// alert ('Eжедневный бюджет: ' + appData.moneyPerDay );

// if (appData.moneyPerDay<100){
// 	console.log('Минимальный уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
// 	console.log('Средний уровень достатка');
// } else if (appData.moneyPerDay > 2000 ) {
// 	console.log ('Высокий уровень достатка');
// } else {
// 	console.log('Произошла ошибка');
// }

// function checkSavings (){
// 	if (appData.savings == true) {
// 		let save = +prompt('Какова сумма накоплений?'),
// 			procent = +prompt ('Под какой процент?');
// 		appData.monthIncome = save/100/12*procent ; 
// 		alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
// 	}
// }

// checkSavings();

// Урок 13. Call-back функции 
// Call-back функция это функция,которая должна быть выполнения после того,как
// другая функция завершила своё выполнение.

// function first() {
// 	setTimeout(function(){
// 		console.log(1);
// 	},500);
// }

// function second() {
// 	console.log(2);
// }

// first();
// second();

// function lernJS(lang,callback) {
// 	console.log('Я учу '+lang);
// 	callback();
// }

// lernJS('JavaScript', function(){
// 	console.log('Я прошёл 3 урок'); 
// })

// 14 - Объекты.
// ключ-значение. банан:фрукт
// let options = {
// 	width:1024,
// 	height:1024,
// 	name:'test'
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
// 	border:'black',
// 	background:'red'
// };

// delete options.bool;

// console.log(options);

// for(let key in options) {
// 	console.log('Свойство '+  key + ' имеет значение '+options[key]);
// }
// console.log(Object.keys(options).length);

// 15 - Массивы
// let arr = [1='first' ,2,3,'four',5];
// let[] = 99;
// arr.pop(); // Удаление последнего элемента массива
// arr.push('5'); //Добавление последнего элемента массива
// arr.shift(); // Удаление первого элемента массива
// arr.unshift('1')// добавление первого элемента массива
// for (let i = 0; 1<arr.length; i++){
// 	console.log(arr[i]);
// }
// arr.forEach(function(item,i,mass){
// 	console.log(i + ': ' + item+' (массив: '+ mass + ')'); 
// });
// console.log(arr);

// let mass = [1,3,4,6,7];
// for (let key of mass) {  //for of - выводит значения массива,а for on клчючи
// 	console.log(key);
// }

let ans = prompt('',''),
	arr = [];
arr = ans.split(' ');
console.log(arr);