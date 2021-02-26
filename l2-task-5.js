// =============THE TASK 5===============

// Реализовать основные 4 арифметические операции 
// в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

'use sctrict';

function calcSum(x, y) {
	let sum = x + y;
	return sum;
}

function calcSubtraction(x, y) {
	let sub = x - y;
	return sub;
}

function calcMultiplication(x, y) {
	let mul = x * y;
	return mul;
}

function calcDivision(x, y) {
	let div = x / y;
	return div;
}

let sumValue = calcSum(5, 5);
let subValue = calcSubtraction(7, 8);
let mulValue = calcMultiplication(4, 8);
let divValue = calcDivision(15, 3);

console.log(sumValue, subValue, mulValue, divValue);
