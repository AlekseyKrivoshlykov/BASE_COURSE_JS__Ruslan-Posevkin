 // Создать функцию, генерирующую шахматную 
 // доску. Можно использовать любые html-теги. 
 // Доска должна быть верно разлинована на 
 // черные и белые ячейки. Строки должны 
 // нумероваться числами от 1 до 8, столбцы — 
 // латинскими буквами A, B, C, D, E, F, G, H.

'use strict';

	let tableEl = document.querySelector('table');
	let chessArray = [
		['-', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
		['8', '', 'bl', '', 'bl', '', 'bl', '', 'bl'],
		['7', 'bl', '', 'bl', '', 'bl', '', 'bl', ''],
		['6', '', 'bl', '', 'bl', '', 'bl', '', 'bl'],
		['5', 'bl', '', 'bl', '', 'bl', '', 'bl', ''],
		['4', '', 'bl', '', 'bl', '', 'bl', '', 'bl'],
		['3', 'bl', '', 'bl', '', 'bl', '', 'bl', ''],
		['2', '', 'bl', '', 'bl', '', 'bl', '', 'bl'],
		['1', 'bl', '', 'bl', '', 'bl', '', 'bl', '']
	];

	function getChessArray(arr) {

		for(let i = 0; i < chessArray.length; i++) {

			let tableLine = document.createElement('tr');

			for(let j = 0; j < chessArray[i].length; j++) {
				
				let tableCell = document.createElement('td');
				tableCell.innerText = chessArray[i][j];
				if(chessArray[i][j] === 'bl') {
					tableCell.classList.add('blackColorCell');
				}

				tableLine.appendChild(tableCell);

			};

			tableEl.appendChild(tableLine);
		};
	}

	getChessArray(chessArray);











