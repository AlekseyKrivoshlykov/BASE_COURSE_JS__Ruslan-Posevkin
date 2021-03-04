// С помощью цикла while вывести 
// все простые числа в промежутке от 0 до 100.

'use sctrict';

let simpleNumbers = [];

for(let i = 2; i < 100; i++) {
	let isSimple = true;
	for(let j = 2; (j <= i / 2) && (isSimple == true); j++) {
		if(i % j === 0) {
			isSimple = false;
		} 
	}
		if(isSimple == true) {
			simpleNumbers.push(i);
	}
}

console.log(simpleNumbers);

