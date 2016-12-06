$(document).ready(function () {
	
	$('.slide-control').click(function () {
		var currentImage = $(this).parent();
		currentImage.removeClass('active');
		if($(this).hasClass('slide-left')) { 
			if(currentImage.prev().hasClass('image-slide')) {
				currentImage.prev().addClass('active');
			}
			else {
				$('.image-slide').last().addClass('active');
			}
		}
		else if($(this).hasClass('slide-right')) {
			if(currentImage.next().hasClass('image-slide')) {
				currentImage.next().addClass('active');
			}
			else {
				$('.image-slide').first().addClass('active');
			}
		}
	});
	
});