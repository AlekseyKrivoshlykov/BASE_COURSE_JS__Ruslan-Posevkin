// =============THE TASK 8===============

// *С помощью рекурсии организовать функцию 
// возведения числа в степень. 
// Формат: function power(val, pow), 
// где val – заданное число, pow – степень.

'use strict';

function power(val, pow) {
	if (pow == 1) {
		return val;
	}
	else {
		return val * power(val, pow - 1);
	}
}

let val = power(4, 5);
alert(val);
