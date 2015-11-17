var imageObject = {
	clickSwap : function(obj) {
		obj.click(function() {
			var activeImage = $(this).children('img.active');
			activeImage.removeClass('active');
			if (activeImage.next().length > 0) {
				activeImage.next().addClass('active');
			} else {
				$(this).children('img:first-child').addClass('active');
			}
			return false;
		});
	}
};
$(function() {
	imageObject.clickSwap($('#imageContainer'));
});