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

	//Scroll
	$('.linkScroll').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $(this).attr("data-target");
		// document.querySelector("#"+scrollTarget).scrollIntoView();
		$('html, body').animate({
		    scrollTop: $("#"+scrollTarget).offset().top
		}, 500);
	})

    showHeaderAndAsideFixed();
    specifySection();

	$(window).scroll(function(){
        showHeaderAndAsideFixed();
        specifySection();
    });

})

function showHeaderAndAsideFixed() {
    var window_top = $(window).scrollTop();
    var about_top = $('#sectionAbout').offset().top;
    if (window_top >= about_top) {
        $('#headerFixed').show();
        $('aside').show();
    } else {
        $('#headerFixed').hide();
        $('aside').hide();
    }
}

function specifySection() {
    var window_top = $(window).scrollTop();
    var about_top = $('#sectionAbout').offset().top;
    var howItWork_top = $('#sectionHowItWork').offset().top;
    var team_top = $('#sectionTeam').offset().top;
    var getInTouch_top = $('#getInTouchForm').offset().top;

    $('aside a').removeClass('active');

    if (window_top >= about_top && window_top < howItWork_top) {
    	$('aside a[data-target="sectionAbout"]').addClass('active');
    } else if (window_top >= howItWork_top && window_top < team_top) {
    	$('aside a[data-target="sectionHowItWork"]').addClass('active');
    } else if (window_top >= team_top && window_top < getInTouch_top) {
    	$('aside a[data-target="sectionTeam"]').addClass('active');
    }
}