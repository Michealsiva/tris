jQuery(function($) {'use strict',

    $(window).scroll(function() {
		  if ($(this).scrollTop() > 1){  
		    $('.navbar').addClass("navbar-fixed-top");
		  }
		  else{
		    $('.navbar').removeClass("navbar-fixed-top");
		  }
	});
	
	//stat animation count 

	$(document).scroll(function() {
		var countClass = $('.stats-circle');
		if (countClass.length) {
	      var divPos =  countClass.offset().top;
	      var topOfWindow = $(document).scrollTop();
	       if( divPos < topOfWindow+500) {
		        $(document).unbind('scroll');
		        $('.stats-nos').each(function () {
		          var $this = $(this);
		          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
		            duration: 3000,
		            easing: 'swing',
		            step: function () {
		              $this.text(Math.ceil(this.Counter));
		            }
		          });
		        });        
		    }
		}
	});

	// all Parallax Section
	$(window).load(function(){'use strict',
		$("#cta").parallax("50%", 0.3); 
		$("#clients").parallax("50%", 0.1);

	});
	$(".temp-switch .default").on("click", function() {
		$('head').append('<link rel="stylesheet" type="text/css" href="css/default.css">');
	});
	$(".temp-switch .blue").on("click", function() {
		$('head').append('<link rel="stylesheet" type="text/css" href="css/blue.css">');
	});
	$(".temp-switch .green").on("click", function() {
		$('head').append('<link rel="stylesheet" type="text/css" href="css/green.css">');
	});
	$(".temp-switch .orange").on("click", function() {
		$('head').append('<link rel="stylesheet" type="text/css" href="css/orange.css">');
	});
	
	$("#icon-label").click(function(){
        $("#color-switcher").toggleClass("switcher-open");
    });
	// portfolio filter
	$(window).load(function(){'use strict',
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.col-sm-4',
				layoutMode : 'masonry'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});
	//Pretty Photo
	 $("a[data-gallery^='prettyPhoto']").prettyPhoto({
	  social_tools: false
	 });


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});


	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
		return false;
	});

});

// Preloder script
jQuery(window).load(function(){'use strict';
	$(".preloader").delay(1600).fadeOut("slow").remove();
});

//Preloder script
jQuery(window).load(function(){'use strict';

	// Slider Height
	var slideHeight = $(window).height();
	$('#home .carousel-inner .item, #home .video-container').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home .carousel-inner .item, #home .video-container').css('height',slideHeight);
	});

});


jQuery(document).ready(function(){

	//Check to see if the window is top if not then display button
	jQuery(window).scroll(function(){ 
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scroll-to-top').fadeIn();
		} else {
			jQuery('.scroll-to-top').fadeOut();  
		}
	});

	//Click event to scroll to top
	jQuery('.scroll-to-top').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});
	// Change Scroll To top Icon
	
	$('.scroll-to-top').find($(".fa")).removeClass('fa-chevron-up').addClass('fa-chevron-up');

});

// User define function
function Scroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navbar-collapse').find('.scroll a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top);
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop ){
			$('.navbar-collapse li.scroll')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})

};



