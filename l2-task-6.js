// =============THE TASK 6===============

// Реализовать функцию с тремя параметрами: 
// function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – 
// строка с названием операции. В зависимости от 
// переданного значения операции выполнить одну из 
// арифметических операций (использовать функции из 
// задания 5) и вернуть полученное значение 
// (использовать switch).

'use sctrict';

let a = 18;
let b = 9;

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

function mathOperation(arg1, arg2, operation) {
	let valueMathOperation = operation(arg1, arg2);
	switch (operation) {
		case calcSum:
		alert(`Сумма чисел ${a} и ${b} = ${valueMathOperation}.`);
		return valueMathOperation;
		case calcSubtraction:
		alert(`Разность чисел ${a} и ${b} = ${valueMathOperation}.`);
		return valueMathOperation;
		case calcMultiplication:
		alert(`${a} умножить на ${b} = ${valueMathOperation}.`);
		return valueMathOperation;
		case calcDivision:
		alert(`${a} поделить на ${b} = ${valueMathOperation}.`);
		return valueMathOperation;
		default:
		alert('Error');
	}
}

let calcSumValue = mathOperation(a, b, calcSum);
let calcSubValue = mathOperation(a, b, calcSubtraction);
let calcMulValue = mathOperation(a, b, calcMultiplication);
let calcDivValue = mathOperation(a, b, calcDivision);



