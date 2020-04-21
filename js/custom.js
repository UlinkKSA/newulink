(function($) { "use strict";


	//Preloader

	Royal_Preloader.config({
        mode:        'scale_text',
        text:        'Linking you tight',
        text_colour: '#f8f8f8',
		background:  '#212121'
	});
	
	
	//Navigation	

	$('ul.slimmenu').on('click',function(){
			var width = $(window).width(); 
			if ((width <= 1200)){ 
			$(this).slideToggle(); 
		}	
	});				
	$('ul.slimmenu').slimmenu(
			{
			resizeWidth: '1200',
			collapserTitle: '',
			easingEffect:'easeInOutQuint',
			animSpeed:'medium',
			indentChildren: true,
			childrenIndenter: '&raquo;'
	});

	
	/* Scroll animation */
	
      window.scrollReveal = new scrollReveal();
	
	
	//Home text fade on scroll	
	
	$(window).scroll(function () { 
        var $Fade = $('.fade-elements');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 400)
        });
    });	
	
	/* Scroll Too */
	
			$(window).load(function(){"use strict";
				
				/* Page Scroll to id fn call */
				$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
					highlightSelector:"ul.slimmenu li a",
					offset: 78,
					scrollSpeed:800,
					scrollEasing: "easeInOutCubic"
				});
				
				/* demo functions */
				$("a[rel='next']").click(function(e){
					e.preventDefault();
					var to=$(this).parent().parent("section").next().attr("id");
					$.mPageScroll2id("scrollTo",to);
				});
				
			});	
			
			
	/* Icons Animation */

	var options = {
	  duration: 200, 
	  type: 'oneByOne',
	  animTimingFunction: Vivus.EASE
	};

	var vivus = new Vivus('svg-icon-1',	options, onComplete);
				new Vivus('svg-icon-2',	options, onComplete);
				new Vivus('svg-icon-3',	options, onComplete);

	function onComplete() {}	

	
	$(document).ready(function() {

		//Tooltip

		$(".tipped").tipper();
	
		/* Separate Carousels */
	 
		$("#owl-sep-1").owlCarousel({
			navigation: false,
			pagination : true,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 5000
		});

		/* Logos Carousel */		
		
		$("#owl-logos").owlCarousel({
			items : 5,
			itemsDesktop : [1000,4], 
			itemsDesktopSmall : [900,3],
			itemsTablet: [600,2], 
			itemsMobile : false, 
			navigation: false,
			pagination : true,
			autoPlay : 3000,
			slideSpeed : 300
		});
	
		//Parallax
		
		$('.parallax-1').parallax("50%", 0.2); 
		$('.parallax-2').parallax("50%", 0.1); 
		$('.parallax-3').parallax("50%", 0.1);

		
		//Facts Counter 
	
        $('.counter-numb').counterUp({
            delay: 100,
            time: 2000
        });

		
	//Set your google maps parameters

		var latitude = 44.8013716,
			longitude = 20.4631372,
			map_zoom = 15;

		//google map custom marker icon - .png fallback for IE11
		var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var marker_url = ( is_internetExplorer11 ) ? 'images/cd-icon-location.png' : 'images/cd-icon-location.svg';
			
		//define the basic color of your map, plus a value for saturation and brightness
		var	main_color = '#e67e22',
			saturation_value= -50,
			brightness_value= 14;

		//we define here the style of the map
		var style= [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];
			
		//set google map options
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style,
		}
		//inizialize the map
		var map = new google.maps.Map(document.getElementById('google-container'), map_options);
		//add a custom marker to the map				
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			visible: true,
			icon: marker_url,
		});

		//add custom buttons for the zoom-in/zoom-out on the map
		function CustomZoomControl(controlDiv, map) {
			//grap the zoom elements from the DOM and insert them in the map 
			var controlUIzoomIn= document.getElementById('cd-zoom-in'),
				controlUIzoomOut= document.getElementById('cd-zoom-out');
			controlDiv.appendChild(controlUIzoomIn);
			controlDiv.appendChild(controlUIzoomOut);

			// Setup the click event listeners and zoom-in or out according to the clicked element
			google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
				map.setZoom(map.getZoom()+1)
			});
			google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
				map.setZoom(map.getZoom()-1)
			});
		}

		var zoomControlDiv = document.createElement('div');
		var zoomControl = new CustomZoomControl(zoomControlDiv, map);

		//insert the zoom div on the top left of the map
		map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);


	/* Portfolio Sorting */

		(function ($) { 
		
		
			var container = $('#projects-grid');
			
			
			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;
				
				
				if (winWidth > 1500) {
					columnNumb = 4;
				} else if (winWidth > 1200) {
					columnNumb = 3;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 2;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				
				return columnNumb;
			}
			
			
			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}
			
			$('#portfolio-filter #filter a').click(function () { 
				var selector = $(this).attr('data-filter');
				
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				
				container.isotope( { 
					filter : selector 
				});
				
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);
				
				
				return false;
			});
			
			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}
			
			
			container.imagesLoaded(function () { 
				setColumnWidth();
				
				
				container.isotope( { 
					itemSelector : '.portfolio-box-1', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );
			
			
		
			
		
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();
				
			} );
			
		
		} )(jQuery);

});	
	
 
 
	/* DebouncedResize Function */
		(function ($) { 
			var $event = $.event, 
				$special, 
				resizeTimeout;
			
			
			$special = $event.special.debouncedresize = { 
				setup : function () { 
					$(this).on('resize', $special.handler);
				}, 
				teardown : function () { 
					$(this).off('resize', $special.handler);
				}, 
				handler : function (event, execAsap) { 
					var context = this, 
						args = arguments, 
						dispatch = function () { 
							event.type = 'debouncedresize';
							
							$event.dispatch.apply(context, args);
						};
					
					
					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}
					
					
					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
				}, 
				threshold : 150 
			};
		} )(jQuery);






	
	
	 // Portfolio Ajax
	 
			$(window).load(function() {
			'use strict';		  
			  var loader = $('.expander-wrap');
			if(typeof loader.html() == 'undefined'){
				$('<div class="expander-wrap"><div id="expander-wrap" class="container clearfix relative"><p class="cls-btn"><a class="close">X</a></p><div/></div></div>').css({opacity:0}).hide().insertAfter('.portfolio');
				loader = $('.expander-wrap');
			}
			$('.expander').on('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				var url = $(this).attr('href');



				loader.slideUp(function(){
					$.get(url, function(data){
						var portfolioContainer = $('.portfolio');
						var topPosition = portfolioContainer.offset().top;
						var bottomPosition = topPosition + portfolioContainer.height();
						$('html,body').delay(600).animate({ scrollTop: bottomPosition - 70}, 800);
						var container = $('#expander-wrap>div', loader);
						
						container.html(data);
						
						$("#owl-portfolio-slider").owlCarousel({
							  
							pagination:true,
							slideSpeed : 300,
							autoPlay : 5000,
							singleItem:true							
						 
						});
						
						$(".container").fitVids();
						
						$('.vimeo a,.youtube a').click(function (e) {
							e.preventDefault();
							var videoLink = $(this).attr('href');
							var classeV = $(this).parent();
							var PlaceV = $(this).parent();
							if ($(this).parent().hasClass('youtube')) {
								$(this).parent().wrapAll('<div class="video-wrapper">');
								$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
							} else {
								$(this).parent().wrapAll('<div class="video-wrapper">');
								$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=cfa144" width="500" height="281" frameborder="0"></iframe>');
							}
						});	
						
						loader.slideDown(function(){
							if(typeof keepVideoRatio == 'function'){
								keepVideoRatio('.container > iframe');
							}
						}).delay(1000).animate({opacity:1}, 200);
					});
				});
			});
			
			$('.close', loader).on('click', function(){
				loader.delay(300).slideUp(function(){
					var container = $('#expander-wrap>div', loader);
					container.html('');
					$(this).css({opacity:0});
					
				});
				var portfolioContainer = $('.portfolio');
					var topPosition = portfolioContainer.offset().top;
					$('html,body').delay(0).animate({ scrollTop: topPosition - 70}, 500);
			});
			
	});		
	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	