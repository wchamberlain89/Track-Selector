$(function(){
	questionIndex = 1; 
	
	$('.btn-info').click(function(){
		questionIndex++; 
		$(".current-question").removeClass("current-question");
		$("#q" + questionIndex).addClass("current-question");
	});

	$('.btn-default').click(function(){
		questionIndex--;
		$(".current-question").removeClass("current-question");
		$("#q" + questionIndex).addClass("current-question");
	});

});