
        /*==================================
* Author        : "-------"
* Template Name :  "-------" | One Page Personal Portfolio HTML Template
* Version       : 1.0
==================================== */


        /*=========== TABLE OF CONTENTS ===========
		## Portfolio isotope
		## Scroll To Top
		## Smooth Scroll
		## owl 
		## wow Animate
		## rev slider
		## smoke effect
		## magnificPopup
		## preloader
======================================*/

		

(function($){
	"use strict";
	
	
	/*--------------------------------
	 	04. Preloader
	---------------------------------*/
	
    $(window).on('load',function() {
		$("#spinningSquaresG1").delay(1000).fadeOut(500);
		$(".inTurnBlurringTextG").on('click',function() {
			$("#spinningSquaresG1").fadeOut(500);
		});
	});

	
	// =====Portfolio isotope=====	
	
	$(window).on('load', function(){
		if($('.home7-gal-container').length){
			var $container = $('.home7-gal-container').isotope({
			    itemSelector: '.home7-gal-item',
			    masonry: {
			        columnWidth: '.home7-sizer'
			    }
			});

		}
	});
	

	// =====Scroll To Top=====
	
    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    $('.return-to-top').on('click',function(){
            $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
	
	
	// =====Smooth Scroll=====

    $('a.data-scroll').on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
         $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1200);
    });

	// =====owl About area=====
	
	// for home 1 About		
	
		$("#h2-about").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:true,
			smartSpeed: 1000,
			responsiveClass:true,
			navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			
		});	
		
	// =====owl Team area=====
	
	// for home 1 Team
		$("#tm1").owlCarousel({
			autoplay: false,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:false,
			smartSpeed: 1000,
			responsiveClass:true,
			responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
			// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});	
		
	
	// for home 2 Team		
	
		$("#tm2").owlCarousel({
			autoplay: false,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:true,
			smartSpeed: 1000,
			responsiveClass:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
			
		});	
	
		
	// =====owl Testimonial area=====
	
		// for home 1 Testimonial
		$("#h1-ttmnl").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			dots:true,
			mouseDrag:true,
			nav:false,
			smartSpeed:1000,
			transitionStyle:"fade",
			animateIn: 'fadeIn',
			animateOut: 'fadeOutLeft'
			// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		
		// for home 2 Testimonial
		
		$("#h2-ttmn1").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			dots:true,
			mouseDrag:true,
			nav:false,
			smartSpeed:1000,
			transitionStyle:"fade",
			animateIn: 'fadeIn',
			animateOut: 'fadeOutLeft'
			// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});	
		
		// for home 3 Testimonial
		
		$("#h3-ttmn1").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			dots:true,
			mouseDrag:true,
			nav:false,
			smartSpeed:1000,
		});
		

		// for home 3 Blog
		$("#h3-blog").owlCarousel({
			autoplay: false,
			loop: true,
			dots:true,
			mouseDrag:true,
			nav:false,
			smartSpeed: 1000,
			responsiveClass:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
			
		});
		
		
		// for home 7 Blog
		$("#h7-event").owlCarousel({
			autoplay: true,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:true,
			smartSpeed: 1000,
			responsiveClass:true,
			navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
			
		});			
		
		
		// for home 7 branding
		$("#h7-branging").owlCarousel({
			items: 3,
			autoplay: false,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:false,
			smartSpeed: 1000,
			responsiveClass:true,
			navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			responsive : {
			0 : {
				items: 2,
			},
			640 : {
				items: 3,
			},
			992 : {
				items: 4,
			}
		}
			
		});	

		// for home 7 album
		$("#h7-album").owlCarousel({
			items: 3,
			autoplay: false,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:true,
			smartSpeed: 1000,
			responsiveClass:true,
			navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
			
		});			
	
	// =====wow Animate=====		
		new WOW().init();
					

	//for counter up
		$(window).on('load', function(){	
			$('.counter').counterUp({
				delay: 10,
				time: 5500
			});	
		});	
				

	//rev slider home 1
				
		var home1=jQuery;
		
		var revapi1078;
			if(home1("#rev_slider_1078_1").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_1078_1");
			}else{
				revapi1078 = home1("#rev_slider_1078_1").show().revolution({
					sliderType:"standard",
					jsFileLocation:"revolution/js/",
					sliderLayout:"fullscreen",
					dottedOverlay:"none",
					delay:6000,
					navigation: {
						keyboardNavigation:"on",
						keyboard_direction: "horizontal",
						mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
						onHoverStop:"off",
						touch:{
							touchenabled:"on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							swipe_direction: "horizontal",
							drag_block_vertical: false
						}
						,
						arrows: {
							style:"zeus",
							enable:true,
							hide_onmobile:true,
							hide_under:600,
							hide_onleave:true,
							hide_delay:200,
							hide_delay_mobile:1200,
							tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
							left: {
								h_align:"left",
								v_align:"center",
								h_offset:30,
								v_offset:0
							},
							right: {
								h_align:"right",
								v_align:"center",
								h_offset:30,
								v_offset:0
							}
						}
						,
					},
					viewPort: {
						enable:true,
						outof:"pause",
						visible_area:"80%",
						presize:false
					},
					responsiveLevels:[1240,1024,778,480],
					visibilityLevels:[1240,1024,778,480],
					gridwidth:[1240,1024,778,480],
					gridheight:[600,600,500,400],
					lazyType:"none",
					parallax: {
						origo:"slidercenter",
						speed:8000,
						levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
						type:"mouse",
					},
					shadow:0,
					spinner:"off",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					fullScreenAutoWidth: "on",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			}		

		//rev slider home 2
		
		var home2=jQuery;
		
		var revapi1078;
			if(home2("#rev_slider_1078_2").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_1078_2");
			}else{
				revapi1078 = home2("#rev_slider_1078_2").show().revolution({
					sliderType:"standard",
					jsFileLocation:"revolution/js/",
					sliderLayout:"fullscreen",
					dottedOverlay:"none",
					delay:6000,
					navigation: {
						keyboardNavigation:"off",
						keyboard_direction: "horizontal",
						mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
						onHoverStop:"off",
						touch:{
							touchenabled:"on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							swipe_direction: "horizontal",
							drag_block_vertical: false
						}
						,
						arrows: {
							style:"zeus",
							enable:true,
							hide_onmobile:true,
							hide_under:600,
							hide_onleave:true,
							hide_delay:200,
							hide_delay_mobile:1200,
							tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
							left: {
								h_align:"left",
								v_align:"center",
								h_offset:30,
								v_offset:0
							},
							right: {
								h_align:"right",
								v_align:"center",
								h_offset:30,
								v_offset:0
							}
						}
						,
					},
					viewPort: {
						enable:true,
						outof:"pause",
						visible_area:"80%",
						presize:false
					},
					responsiveLevels:[1240,1024,778,480],
					visibilityLevels:[1240,1024,778,480],
					gridwidth:[1600,1024,778,480],
					gridheight:[900,600,500,400],
					lazyType:"none",
					parallax: {
						origo:"slidercenter",
						speed:800,
						levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
						type:"mouse",
					},
					shadow:0,
					spinner:"off",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			}
			
			
		//rev slider home 5	
		var home5=jQuery;
			var revapi1079;
			if(home5("#rev_slider_1079_1_gallery").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_1079_1_gallery");
			}else{
				revapi1079 = home5("#rev_slider_1079_1_gallery").show().revolution({
					sliderType:"standard",
					jsFileLocation:"revolution/js/",
					sliderLayout:"fullscreen",
					dottedOverlay:"none",
					delay:4000,
					responsiveLevels:[1240,1024,778,480],
					visibilityLevels:[1240,1024,778,480],
					gridwidth:[1600,1024,778,480],
					gridheight:[900,600,500,400],
					lazyType:"none",
					shadow:0,
					spinner:"off",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			}	
			
			
		//rev slider home 7

		var home7=jQuery;
			var revapi1079;
			if(home7("#rev_slider_1079_1_corporate").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_1079_1_corporate");
			}else{
				revapi1079 = home7("#rev_slider_1079_1_corporate").show().revolution({
					sliderType:"standard",
					jsFileLocation:"revolution/js/",
					sliderLayout:"fullscreen",
					dottedOverlay:"none",
					delay:4000,
					responsiveLevels:[1240,1024,778,480],
					visibilityLevels:[1240,1024,778,480],
					gridwidth:[1600,1024,778,480],
					gridheight:[900,600,500,400],
					lazyType:"none",
					shadow:0,
					spinner:"off",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			}	
			
					
		
	
	// smoke effect

	$(function() {
	  "use strict";
	  var a = 0;
	  $('#tv').hide();
	  for (; a < 25; a += 1) {
		setTimeout(function b() {
		  var a = Math.random() * 1e3 + 5e3,
			c = $("<div />", {
			  "class": "smoke",
			  css: {
				left: Math.random() * 800,
				backgroundSize: "contain",
				width: Math.random() * 800,
				height: Math.random() * 600
			  }
			});
		  $(c).addClass("animated");
		  $(c).addClass("zoomIn");
		  $(c).addClass("rollOut");
		  $(c).appendTo("#viewport");
		  $.when($(c).animate({}, {
			  duration: a / 4,
			  easing: "linear",
			  queue: false,
			  complete: function() {
				$(c).animate({}, {
				  duration: a / 3,
				  easing: "linear",
				  queue: false
				})
			  }
			}),
			$(c).animate({
			  bottom: $("#viewport").height()
			}, {
			  duration: a,
			  easing: "linear",
			  queue: false
			})).then(
			function() {
			  $(c).remove();
			  b()
			})
		}, Math.random() * 3e3)
	  }
	  $("body").keypress(function() {
		$('body').addClass("fadeOut");
		setTimeout(function() {
		  $('#tv').show();
		}, 1000);

		console.log("Handler for .keypress() called.");
	  });
	}())
	var tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/player_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var tv,
	  playerDefaults = {
		autoplay: 0,
		autohide: 1,
		modestbranding: 0,
		rel: 0,
		showinfo: 0,
		controls: 0,
		disablekb: 1,
		enablejsapi: 0,
		iv_load_policy: 3
	  };
	var vid = [{
		'videoId': '2b5QNj-BVhs',
		'startSeconds': 515,
		'endSeconds': 690,
		'suggestedQuality': 'hd720'
	  }, {
		'videoId': '9ge5PzHSS0Y',
		'startSeconds': 465,
		'endSeconds': 657,
		'suggestedQuality': 'hd720'
	  }, {
		'videoId': 'OWsCt7B-KWs',
		'startSeconds': 0,
		'endSeconds': 240,
		'suggestedQuality': 'hd720'
	  }, {
		'videoId': 'qMR-mPlyduE',
		'startSeconds': 19,
		'endSeconds': 241,
		'suggestedQuality': 'hd720'
	  }],
	  randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

	function onYouTubePlayerAPIReady() {
	  tv = new YT.Player('tv', {
		events: {
		  'onReady': onPlayerReady,
		  'onStateChange': onPlayerStateChange
		},
		playerVars: playerDefaults
	  });
	}

	function onPlayerReady() {
	  tv.loadVideoById(vid[randomvid]);
	  tv.mute();
	}

	function onPlayerStateChange(e) {
	  if (e.data === 1) {
		$('#tv').addClass('active');
	  } else if (e.data === 0) {
		tv.seekTo(vid[randomvid].startSeconds)
	  }
	}

	function vidRescale() {

	  var w = $(window).width() + 200,
		h = $(window).height() + 200;

	  if (w / h > 16 / 9) {
		tv.setSize(w, w / 16 * 9);
		$('.tv .screen').css({
		  'left': '0px'
		});
	  } else {
		tv.setSize(h / 9 * 16, h);
		$('.tv .screen').css({
		  'left': -($('.tv .screen').outerWidth() - w) / 2
		});
	  }
	}		

	// magnificPopup
	
	$('.meg-pop').magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
			type: 'image',
			gallery: {
					enabled: true
			}
	});		
	
	$('.video-all a').magnificPopup({
			disableOn: 0,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: true,
			fixedContentPos: false
		});	
		
	$('.home3-video-play-btn a').magnificPopup({
			disableOn: 0,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: true,
			fixedContentPos: false
		});	
		
	$('.home7-video-all a').magnificPopup({
			disableOn: 0,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: true,
			fixedContentPos: false
		});	
	

	// preloader
	
	$(window).on('load',function() {
		$(".preloader").delay(1000).fadeOut(500);
	});
	
	
})(jQuery);