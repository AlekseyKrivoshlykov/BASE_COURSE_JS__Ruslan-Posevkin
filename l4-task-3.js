// * Подумать над глобальными сущностями. 
// К примеру, сущность «Продукт» в интернет-магазине 
// актуальна не только для корзины, но и для каталога. 
// Стремиться нужно к тому, чтобы объект «Продукт» имел 
// единую структуру для различных модулей сайта, но в 
// разных местах давал возможность вызывать разные методы.

'use sctrict';

	function Item (name, id, price, color, quantity) {
	this.name = name;
	this.id = id;
	this.price = price;
	this.color = color;
	this.quantity = quantity;
}

	const item1 = new Item('удочка', '55512A', 1500, 'grey', 1);
	const item2 = new Item('груз', '13512L', 70, 'black', 2);

	Item.prototype.getCoupon = function (sumCoupon) {
	this.price -= sumCoupon;
}

	Item.prototype.getColor = function (color) {
	this.color = color;
}

	Item.prototype.getQuantity = function (quantity) {
	this.quantity = quantity;
}

	item1.getCoupon(150);
	console.log(item1);

	item2.getColor('green');
	console.log(item2);

	item2.getQuantity(5);
	console.log(item2);