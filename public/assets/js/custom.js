/**	
	* Template Name: Apex App
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. FULL OVERLAY MENU
	2. MENU SMOOTH SCROLLING
	3. VIDEO POPUP
	4. APPS SCREENSHOT SLIDEER ( SLICK SLIDER )
	5. BOOTSTRAP ACCORDION  
	
	
**/



(function( $ ){


	/* ----------------------------------------------------------- */
	/*  1. FULL OVERLYAY MENU
	/* ----------------------------------------------------------- */

	function openMenuOverlay() {
		$('.mu-menu-full-overlay').addClass('mu-menu-full-overlay-show');
	}

	function closeMenuOverlay() {
		$('.mu-menu-full-overlay').removeClass('mu-menu-full-overlay-show');
	}

	$(document).on('click', '.mu-menu-btn', function (event) {
		event.preventDefault();
		openMenuOverlay();
	});

	$(document).on('click', '.mu-menu-close-btn', function (event) {
		event.preventDefault();
		closeMenuOverlay();
	});

	$(document).on('click', '.mu-menu-full-overlay', function () {
		closeMenuOverlay();
	});

	$(document).on('click', '.mu-menu-full-overlay-inner', function (event) {
		event.stopPropagation();
	});

	$(document).on('keyup', function (event) {
		if (event.key === 'Escape') {
			closeMenuOverlay();
		}
	});

    /* ----------------------------------------------------------- */
	/*  2. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	$(document).on('click', '.mu-menu a', function (event) {
		var hash = this.hash;
		var $target;
		var dest = 0;

		event.preventDefault();
		closeMenuOverlay();

		if (!hash) {
			return;
		}

		$target = $(hash);

		if (!$target.length) {
			return;
		}

		if ($target.offset().top > $(document).height() - $(window).height()) {
			dest = $(document).height() - $(window).height();
		} else {
			dest = $target.offset().top;
		}

		$('html,body').stop(true).animate({ scrollTop: dest }, 1000, 'swing');
	});
	    

		
	/* ----------------------------------------------------------- */
	/*  3. VIDEO POPUP
	/* ----------------------------------------------------------- */

   $('.mu-video-play-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.mu-video-iframe-area').addClass('mu-video-iframe-display');
       
    });
   
    // when click the close btn

    // disappear iframe window
    
    $('.mu-video-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
		
    });

    // stop iframe if it is play while close the iframe window

    $('.mu-video-close-btn').click(function(){

        $('.mu-video-iframe').attr('src', $('.mu-video-iframe').attr('src'));

    });

    // when click overlay area

     $('.mu-video-iframe-area').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
		
    });

	$('.mu-video-iframe-area, .mu-video-iframe').on('click', function(e){
	    e.stopPropagation();
	});

		
	/* ----------------------------------------------------------- */
	/*  4. APPS SCREENSHOT SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

		function initScreenshotSlider() {
			var $screenshotSlider = $('.mu-apps-screenshot-slider');

			if (!$screenshotSlider.length || typeof $.fn.slick !== 'function') {
				return;
			}

			if ($screenshotSlider.hasClass('slick-initialized')) {
				$screenshotSlider.slick('setPosition');
				return;
			}

			$screenshotSlider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2500,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							arrows: true,
							slidesToShow: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							arrows: true,
							slidesToShow: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: true,
							slidesToShow: 1
						}
					}
				]
			});
		}

		(function waitForSlick(triesLeft) {
			if (typeof $.fn.slick === 'function') {
				initScreenshotSlider();
				return;
			}

			if (triesLeft <= 0) {
				return;
			}

			setTimeout(function () {
				waitForSlick(triesLeft - 1);
			}, 100);
		})(40);

		$(window).on('resize', function () {
			var $screenshotSlider = $('.mu-apps-screenshot-slider');
			if ($screenshotSlider.hasClass('slick-initialized')) {
				$screenshotSlider.slick('setPosition');
			}
		});



	/* ----------------------------------------------------------- */
	/*  5. BOOTSTRAP ACCORDION 
	/* ----------------------------------------------------------- */ 

		/* Start for accordion #1*/
		$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-plus").addClass("fa-minus");
		});
		
		//The reverse of the above on hidden event:
		
		$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-minus").addClass("fa-plus");
		});



	
	
})( jQuery );



  
	
