$(document).ready(function(){
	/* Owlcarousel start */
	$('.cities').owlCarousel({
		items: 3,
		smartSpeed: 2000,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		margin: 0,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			},
			1200: {
				items:3
			}
		}
	});


	$('.gallery-slider').owlCarousel({
		items: 3,
		smartSpeed: 2000,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		margin: 20,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			},
			1200: {
				items:3
			}
		}
	});

	


	
	/* -- magnific-popup js --*/
	$('.play-btn').magnificPopup({
		type:'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>',

			patterns: {
				youtube: {
					index: 'youtube.com/',

					id: 'v=',

					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			},
			srcAction: 'iframe_src',
		}
	});






});