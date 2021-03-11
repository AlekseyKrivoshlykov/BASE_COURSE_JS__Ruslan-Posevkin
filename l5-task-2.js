// Сделать генерацию корзины динамической: 
// верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только div, в который будет вставляться 
// корзина, сгенерированная на базе JS:
// Пустая корзина должна выводить строку «Корзина пуста»;
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

'use strict';

	function BasketProduct(name, size, quantity, price) {
	   this.name = name;
	   this.size = size;
	   this.quantity = quantity;
	   this.price = price;
	}

	let basket = {
		items: [],

	pushItem(item) {
		this.items.push(item);
	},

	basketAllSum(items) {
		let sum = 0;
     	this.items.forEach(item => {
     		sum += (item.price * item.quantity);
     	});
     	return sum;
	},

	getItems() {
		return this.items;
	}
	}

	basket.pushItem(new BasketProduct('Рубашка', 'XL', '2', 1350));
	basket.pushItem(new BasketProduct('Штаны', 'L', '1', 2599));

	let basketItems = basket.getItems();
	let quantityItems = basketItems.length;
	let basketSum = basket.basketAllSum();

	function getMessage () {
		let basketEl = document.querySelector('div');
		let basketMessageEl = document.createElement('p');
		if(quantityItems > 0) {
			basketMessageEl.innerText = `В корзине: ${quantityItems} товаров на сумму ${basketSum} рублей.`;
		}
		else {
			basketMessageEl.innerText = `Корзина пуста.`;
		}
		basketEl.insertAdjacentElement("afterbegin", basketMessageEl);
	}

	getMessage();

	








