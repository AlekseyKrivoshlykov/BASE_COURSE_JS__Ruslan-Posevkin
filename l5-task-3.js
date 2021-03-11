/** Сделать так, чтобы товары в каталоге 
выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива 
генерировать вывод из него. HTML-код должен 
содержать только div id=”catalog” без 
вложенного кода. Весь вид каталога генерируется JS.*/

'use strict';

	class Product {
		constructor({name, id, price, color, quantity, image}) {
			this.name = name;
			this.id = id;
			this.price = price;
			this.color = color;
			this.quantity = quantity;
			this.image = image;
		}

		getCoupon(sumCoupon) {
			this.price -= sumCoupon;
		};

		getColor(color) {
			this.color = color;
		};

		getQuantity(quantity) {
			this.quantity = quantity;
		};

	};

	let productsObject = {

		products: [],

		pushProducts(product) {
		this.products.push(product);
		},

		getProducts() {
			return this.products;
		}

	}

	const item1 = new Product({
		name: 'воблер', 
		id: '55512A', 
		price: 100, 
		color: 'violet', 
		quantity: 1,
		image: 'https://contents.mediadecathlon.com/p1840486/k17e97ee10da97444537261a5917d6f46/1840486_default.jpg?format=auto&quality=60&f=800x0'
	});

	const item2 = new Product({
		name: 'груз маркерный', 
		id: '13512L', 
		price: 300, 
		color: 'black', 
		quantity: 2,
		image: 'https://piranya-ltd.ru/thumb/327x202xin/upload/iblock/a49/a4987f3e86a6bf890e3cfb418b6b3bb1.jpg'
	});

	productsObject.pushProducts(item1);
	productsObject.pushProducts(item2);

	let arrayProduct = productsObject.getProducts();
	let catalogEl = document.getElementById('catalog');

	function getProductFromArrayProduct (array) {
		arrayProduct.forEach((item) => {
		let catalogDivEl = document.createElement('div');

		let catalogProductTitleEl = document.createElement('h3');
		catalogProductTitleEl.innerHTML = item.name;

		let catalogProductImageEl = document.createElement('img');
		catalogProductImageEl.src = item.image;

		let catalogProductPriceEl = document.createElement('span');
		catalogProductPriceEl.innerHTML = item.price;

		catalogDivEl.appendChild(catalogProductTitleEl);
		catalogDivEl.appendChild(catalogProductImageEl);
		catalogDivEl.appendChild(catalogProductPriceEl);

		catalogEl.insertAdjacentElement("afterbegin", catalogDivEl);

	});
	}

	getProductFromArrayProduct(arrayProduct);




