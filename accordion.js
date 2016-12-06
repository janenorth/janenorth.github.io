$(document).ready(function () {
	$(".accordian-btn").click(function(){
		var buttonClick = $(this); // The button that was clicked
		$('.accordian-item').slideUp();
		
		if(buttonClick.next().hasClass('accordion-open')) {
			buttonClick.next().removeClass('accordion-open');
			buttonClick.next().slideUp();
		}
		else {
			buttonClick.next().addClass('accordion-open');
			buttonClick.next().slideDown();
		}
	});
});



