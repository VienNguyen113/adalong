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
		
		$('html, body').animate({
			scrollTop: $("#"+scrollTarget).offset().top + 2
		}, 500);
	})
	//Page Down
	$('#pageDown').on('click', function(e) {
		e.preventDefault();

		var section_index = $(this).attr("data-section");
		if (section_index < 5) {
			var next_section = parseInt(section_index) + 1;
			$(this).attr("data-section", next_section);

			$('html, body').animate({
				scrollTop: $("div[section="+next_section+"]").offset().top + 5
			}, 500);
		} else {
			$(this).attr("data-section", 1);

			$('html, body').animate({
				scrollTop: 0
			}, 500);
		};
	})

	setHeightOfVideo()
	showHeaderAndAsideFixed();
	specifySection();

	$(window).scroll(function(){
		setHeightOfVideo()
		showHeaderAndAsideFixed();
		specifySection();
		if($("#pageDown").attr("data-section") == 5) {
			$("#pageDown").addClass("pageUp");
		} else $("#pageDown").removeClass("pageUp");
	});

	$(window).resize(function() {
		setHeightOfVideo()
	})
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
	$('body').removeClass("bg-color-blue bg-color-gray bg-color-pink")

	if (window_top < about_top) {
		$('#pageDown').attr("data-section", 1);
	} else if (window_top >= about_top && window_top < howItWork_top) {
		$('aside a[data-target="sectionAbout"]').addClass('active');
		$('#pageDown').attr("data-section", 2);
		$('body').addClass("bg-color-blue");
	} else if (window_top >= howItWork_top && window_top < team_top) {
		$('aside a[data-target="sectionHowItWork"]').addClass('active');
		$('#pageDown').attr("data-section", 3);
		$('body').addClass("bg-color-gray");
	} else if (window_top >= team_top && window_top < getInTouch_top) {
		$('aside a[data-target="sectionTeam"]').addClass('active');
		$('#pageDown').attr("data-section", 4);
		$('body').addClass("bg-color-pink");
	} else {
		$('#pageDown').attr("data-section", 5);
	}
}

function setHeightOfVideo() {
	var rate = 9/16;
	var window_width = $(window).width();
	$('#carouselVideo').css("height", window_width*rate);
}