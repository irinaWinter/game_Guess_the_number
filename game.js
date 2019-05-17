var answer = Math.floor(Math.random() * 101);
var answerField = document.querySelector('.field__answer');
var possibleAnswer = document.querySelector('.field__guess');
var range = document.querySelector('.nameOfTheGame');
var min = 0;
var max = 100;
range.textContent = 'Угадай число от ' + min + ' до ' + max;
var guesses = document.querySelector('.field__text_guess');
guesses.textContent = 10;

var button = document.querySelector('.field__button');
var gameplay = function() {
	if (possibleAnswer.value == ''
		|| guesses.textContent == 0
		|| possibleAnswer.value > max
		|| possibleAnswer.value < min) {
		return false
	} else {
		if (Number((possibleAnswer.value), 10) === answer) {
			answerField.textContent = answer;
			possibleAnswer.value = answer;
			guesses.textContent--;
		} else if (Number((possibleAnswer.value), 10) > answer) {
			max = Number((possibleAnswer.value), 10);
			possibleAnswer.value = '';
			guesses.textContent--;
		} else if (Number((possibleAnswer.value), 10) < answer) {
			min = Number((possibleAnswer.value), 10);
			possibleAnswer.value = '';
			guesses.textContent--;
		}	
		range.textContent = 'Угадай число от ' + min + ' до ' + max;		
	}
};
addEventListener('keyup', function(e) {
	if (e.keyCode == 13) {
		gameplay();
	}
});
button.addEventListener('click', gameplay);

// Проверка на ввод текста и превышение длины символов
var validity = function (event) {
	if (possibleAnswer.value.length < String(max).length) {
		if (event.charCode < 48 || event.charCode > 57) return false;
	} else {
		return false;
	}
}

possibleAnswer.onkeypress = validity;
