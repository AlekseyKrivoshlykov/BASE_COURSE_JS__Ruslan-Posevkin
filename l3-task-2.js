// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости 
// корзины в зависимости от находящихся в ней товаров. 
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения 
// товаров в корзине;
// b) Организовать функцию countBasketPrice, которая 
// будет считать стоимость корзины.

'use strict';

let basketItems = [
	['Рубашка', 'XL', '1', 1350],
	['Штаны', 'L', '2', 2599],
	['Балохон', 'L', '1', 4900],
	['Кепка', 'M', '1', 1500],
	['Шорты', 'S', '1', 2250]
]

function countBasketPrice(array) {
	let basketSum = 0;
	for (let i = 0; i < basketItems.length; i++) {
		let j = basketItems[i].length - 1;
		basketSum += basketItems[i][j];
	}
		return basketSum;
}

let valueSumBasket = countBasketPrice(basketItems);
alert(`Общая сумма товаров: ${valueSumBasket}.`);


