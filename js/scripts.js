function changeQuestion(questionIndex) {
	$(".current-question").removeClass("current-question");
	$("#q" + questionIndex).addClass("current-question");
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
		changeQuestion(questionIndex);
	});

	$('.submit').click(function(){
		$(".current-question").removeClass("current-question");
		$(".results-container").show();
	});

});