// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину 
// на базе массивов. Какими объектами можно заменить 
// их элементы?
// Реализуйте такие объекты.

// Перенести функционал подсчета корзины на 
// объектно-ориентированную базу.

'use strict';

	function BasketProduct(name, size, quantity, price) {
	   this.name = name;
	   this.size = size;
	   this.quantity = quantity;
	   this.price = price;
	}

	const products = [
        new BasketProduct('Рубашка', 'XL', '2', 1350), 
        new BasketProduct('Штаны', 'L', '1', 2599),
        new BasketProduct('Балохон', 'L', '2', 4900),
        new BasketProduct('Кепка', 'M', '1', 1500),
        new BasketProduct('Шорты', 'S', '1', 2250)
	];

    function basketAllSum (arr) {
     	let sum = 0;
     	products.forEach(product => {
     		sum += (product.price * product.quantity);
     	});
     	return sum;
   	}

     let sumBasket = BasketAllSum(products);
     console.log(sumBasket);









