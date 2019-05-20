let button = document.getElementById('button'),
	field = document.getElementById('field'),
	alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
	recСoorX = [],
	recСoorY = [],
	coordX,
	coordY;

button.addEventListener("click", calculation );

function calculation() {
	let coord = field.value;
		coordX =  parseInt( coord[0], 18 ) - 9;
		coordY = coord[1],
		strForAlert = "Возможные варианты хода: \r\n";
		//Поиск координат
		for (let i = 0; i < 4; i++) {
			findCoord( (i * 2), true, 1, 2);
		}
		//Проверка, выходит ли позиция за поле
		for (let i = 0; i < 8; i++) {
			if( recСoorX[i] <= 0 || recСoorX[i] >= 9 || recСoorY[i] <= 0 || recСoorY[i] >= 9 ){
						recСoorX.splice( i, 1 );
						recСoorY.splice( i, 1 );
						i -= 1;
					}
		}
		//Вывод сообщения
		for (let i = 0; i < recСoorX.length; i++) {
			let index = recСoorX[i] - 1;
			strForAlert += alphabet[index] + recСoorY[i] + " ";
		}
		alert( strForAlert );
}

function findCoord ( numIt, firstStep, firstNum, secondNum ) {
	if(numIt < 4){
		recСoorX[numIt] = parseInt( coordX ) - firstNum;
		if(numIt < 2){
			recСoorY[numIt] = parseInt( coordY ) - secondNum;
			if(firstStep) findCoord( numIt + 1, false, 2, 1 );
			return 0;
		}
		recСoorY[numIt] = parseInt( coordY ) + secondNum;
		if(firstStep) findCoord( numIt + 1, false, 2, 1 );
	}
	else{
		recСoorX[numIt] = parseInt( coordX ) + firstNum ;
		if(numIt < 6){
			recСoorY[numIt] = parseInt( coordY ) - secondNum;
			if(firstStep) findCoord( numIt + 1, false, 2, 1 );
			return 0;
		}
		recСoorY[numIt] = parseInt( coordY ) + secondNum;
		if(firstStep) findCoord( numIt + 1, false, 2, 1 );
	}
}
