var answer = Math.floor(Math.random() * 101);
console.log(answer);
var answerField = document.querySelector('.field__answer');
// answerField.textContent = answer;
var possibleAnswer = document.querySelector('.field__guess');
var button = document.querySelector('.field__button');
button.onclick = function() {
	var gameplay = function(event) {
		if (Number((possibleAnswer.value), 10) === answer) {
			answerField.textContent = answer;
			possibleAnswer.value = '';
		} else if (Number((possibleAnswer.value), 10) > answer) {
			answerField.textContent = 'Меньше';
			possibleAnswer.value = '';
		} else {
			answerField.textContent = 'Больше';
			possibleAnswer.value = '';
		}
		if (event.keyCode == 13) alert('Привет');
		addEventListener("keydown", gameplay);

	};
	gameplay();


}
