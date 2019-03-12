var answer = Math.floor(Math.random() * 101);
var answerField = document.querySelector('.field__answer');
var possibleAnswer = document.querySelector('.field__guess');
var range = document.querySelector('.field__range');
var min = 0;
var max = 100;
range.textContent = 'от ' + min + ' до ' + max;

var button = document.querySelector('.field__button');
button.onclick = function() {
	var gameplay = function(event) {
		if (Number((possibleAnswer.value), 10) === answer) {
			answerField.textContent = answer;
			possibleAnswer.value = '';

		} else if (Number((possibleAnswer.value), 10) > answer) {
			answerField.textContent = 'Меньше';
			max = Number((possibleAnswer.value), 10)
			possibleAnswer.value = '';
		} else {
			answerField.textContent = 'Больше';
			min = Number((possibleAnswer.value), 10)
			possibleAnswer.value = '';
		}	
	};

	gameplay();
	range.textContent = 'от ' + min + ' до ' + max;


}
