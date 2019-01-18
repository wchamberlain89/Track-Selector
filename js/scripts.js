
function nextQuestion(questionIndex) {
	$(".current-question").addClass("bounceOutLeft animated");

	setTimeout(function(){
		$(".current-question").removeClass("current-question bounceOutLeft animated");
		$("#q" + questionIndex).addClass("current-question bounceInRight animated");
			setTimeout(function(){
				$(".current-question").removeClass("bounceInRight animated");
			},750);
	},750);

	
}

function previousQuestion(questionIndex) {
	$(".current-question").addClass("bounceOutRight animated");

	setTimeout(function(){
		$(".current-question").removeClass("current-question bounceInRight bounceOutRight animated");
		$("#q" + questionIndex).addClass("current-question bounceInLeft animated");
			setTimeout(function(){
				$(".current-question").removeClass("bounceInLeft animated");
			},750);
	},750);
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
		nextQuestion(questionIndex); 
	});

	$('.btn-secondary').click(function(){
		questionIndex--;
		previousQuestion(questionIndex);
	});

	$('.reset').click(function(){
		$(".results-container").addClass('animated bounceOutLeft');
		setTimeout(function(){
			$(".results-container").removeClass('animated bounceOutLeft bounceInRight').hide();
		},750);
		questionIndex = 1;
		$('.question').each(function(){
			$(this).find('input').first().prop('checked', true);
		});
		nextQuestion(questionIndex);
	});

	$('.submit').click(function(){
		var answers = [];

		$(".question-container").each(function() {
			answers.push(parseInt($(this).find("input:checked").val()));
		});

		var userResult = getResult(answers)

		$(".results-container h1").text(userResult);
		$(".logo-container img").attr("src", "imgs/" + getImage(userResult));
		$(".results-container").removeClass('animated bounceOutLeft')
		$(".current-question").addClass("animated bounceOutLeft");

		setTimeout(function(){
			$(".current-question").removeClass("current-question animated bounceOutLeft");
			$(".results-container").addClass('animated bounceInRight').show();
		}, 750);

	});

});