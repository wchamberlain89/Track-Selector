function changeQuestion(questionIndex) {
	$(".current-question").removeClass("current-question");
	$("#q" + questionIndex).addClass("current-question");
}

function mostVotes(num1,num2,num3) {
	return num1 > num2 && num1 > num3;
}

function getResult(answersArray) {
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

	if (mostVotes(resultOne,resultTwo,resultThree)) {
		finalResult = "Front-end / React";
	} else if (mostVotes(resultTwo,resultOne,resultThree)) {
		finalResult = "PhP / Drupal";
	} else {
		finalResult = "Java / Android";
	}


	return finalResult;
}

function getImage(course) {
	if(course === "Front-end / React") {
		return "react.png"
	} else if(course === "Java / Android") {
		return "java.png"
	} else {
		return "php.png"
	}
}



$(function(){
	questionIndex = 1; 
	
	$('.btn-info').click(function(){
		questionIndex++;
		changeQuestion(questionIndex); 
	});

	$('.btn-secondary').click(function(){
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

		var userResult = getResult(answers)

		$(".results-container h1").text(userResult);
		$(".logo-container img").attr("src", "imgs/" + getImage(userResult));

		$(".current-question").removeClass("current-question");
		$(".results-container").show();
	});

});