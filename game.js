var answer = Math.floor(Math.random() * 101);
var answerField = document.querySelector('.field__answer');
var possibleAnswer = document.querySelector('.field__guess');
var range = document.querySelector('.field__range');
var min = 0;
var max = 100;
range.textContent = 'от ' + min + ' до ' + max;
var guesses = document.querySelector('.field__text_guess');
guesses.textContent = 10;

var button = document.querySelector('.field__button');
var gameplay = function() {
	if (Number((possibleAnswer.value), 10) === answer) {
		answerField.textContent = answer;
		possibleAnswer.value = '';
	} else if (Number((possibleAnswer.value), 10) > answer) {
		answerField.textContent = 'Меньше';
		max = Number((possibleAnswer.value), 10)
		possibleAnswer.value = '';
		guesses.textContent--;
	} else {
		answerField.textContent = 'Больше';
		min = Number((possibleAnswer.value), 10)
		possibleAnswer.value = '';
		guesses.textContent--;
	}	
	range.textContent = 'от ' + min + ' до ' + max;
};
addEventListener('keyup', function(e) {
	if (e.keyCode == 13) {
		gameplay();
	}
});
button.addEventListener('click', gameplay);

