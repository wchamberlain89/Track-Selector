function changeQuestion(questionIndex) {
	$(".current-question").removeClass("current-question");
	$("#q" + questionIndex).addClass("current-question");
}

function displayResult(answersArray) {
	var resultOne = 0;
	var resultTwo = 0;
	var resultThree = 0;
	var finalResult = "";
	
	answersArray.forEach(function(answer){
		if(answer === 1) {
			resultOne++;
		} else if (answer === 2) {
			resultTwo++
		} else {
			resultThree++
		}
	});

	if (resultOne > resultTwo && resultOne > resultThree) {
		finalResult = "Front-end / React";
	} else if (resultTwo > resultThree && resultTwo > resultThree) {
		finalResult = "PhP / Drupal";
	} else {
		finalResult = "Java / Android";
	}

	return finalResult;
}



$(function(){
	questionIndex = 1; 
	
	$('.btn-info').click(function(){
		questionIndex++;
		changeQuestion(questionIndex); 
	});

	$('.btn-default').click(function(){
		questionIndex--;
		changeQuestion(questionIndex);
	});

	$('.reset').click(function(){
		$(".results-container").hide();
		questionIndex = 1;
		$('.question').each(function(){
			$(this).find('input').first().prop('checked', true);
		});
		changeQuestion(questionIndex);
	});

	$('.submit').click(function(){
		var answers = [];
		$(".question-container").each(function() {
			answers.push(parseInt($(this).find("input:checked").val()));
		});
		$(".results-container h1").text(displayResult(answers));
		$(".current-question").removeClass("current-question");
		$(".results-container").show();
	});

});