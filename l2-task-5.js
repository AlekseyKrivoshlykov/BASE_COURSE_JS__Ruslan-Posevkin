// =============THE TASK 5===============

// Реализовать основные 4 арифметические операции 
// в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

'use sctrict';

function calcSum(x, y) {
	return x + y;
}

function calcSubtraction(x, y) {
	return x - y;
}

function calcMultiplication(x, y) {
	return x * y;
}

function calcDivision(x, y) {
	return x / y;
}

let sumValue = calcSum(5, 5);
let subValue = calcSubtraction(7, 8);
let mulValue = calcMultiplication(4, 8);
let divValue = calcDivision(15, 3);

console.log(sumValue, subValue, mulValue, divValue);
