// =============THE TASK 3===============

// Объявить две целочисленные переменные a и b 
// и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает 
// по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; 
// ноль можно считать положительным числом.

'use sctrict';

let a = 12;
let b = 5;

function getMathOperation(a, b) {
	if (a > 0 && b > 0) {
		let sub = a - b;
		alert(sub);
	}
	else if (a < 0 && b < 0) {
		let mul = a * b;
		alert(mul);
	}
	else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
		let addition = a + b;
		alert(addition);
	}
}

getMathOperation(a, b);
getMathOperation(-4, -14);
getMathOperation(7, -10);