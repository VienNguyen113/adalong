$(document).ready(function() {
	$('#carouselVideo ol li').click(function () {
		if(!$('#carouselVideo ol li').hasClass('onActive')) {
			$('#carouselVideo ol li').addClass('onActive');

			var curr  = $('#carouselVideo ol li.active').attr("data-slide-to");
			var index = $(this).attr("data-slide-to");

			$('#carouselVideo ol li.active').removeClass('active');
			$('#carouselVideo ol li[data-slide-to='+index+']').addClass('active');

			$('#carouselVideo .carousel-item[slide-id='+curr+']').animate({
			    opacity: 0,
			    zIndex: 1,
		    }, 1000);

		    $('#carouselVideo .carousel-item[slide-id='+index+']').animate({
			    opacity: 1,
			    zIndex: 2,
		    }, 1000, function() {
		        $('#carouselVideo ol li').removeClass('onActive');
		    });
		}
	})

})