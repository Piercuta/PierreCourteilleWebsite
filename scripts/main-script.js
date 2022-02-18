$("#services").one("mouseenter", function() {
  $(".fade-in-down").show();
  $(".fade-in-down").addClass( "fade-in-down-start" );
  $(".fade-in-up").show();
  $(".fade-in-up").addClass( "fade-in-up-start" );
});

$("#about-me").one("mouseenter", function() {
  $(".fade-in-left").show();
  $(".fade-in-left").addClass( "fade-in-left-start" );
  $(".fade-in-right").show();
  $(".fade-in-right").addClass( "fade-in-right-start" );
 
});

$("#international-experiences").one("mouseenter", function() {
  $(".fade-in-up-gmaps").show();
  $(".fade-in-up-gmaps").addClass( "fade-in-up-start" );
});

$("#skills").one("mouseenter", function() {
  $(".fade-in-left-skills").show();
  $(".fade-in-left-skills").addClass( "fade-in-left-start" );
  $(".fade-in-right-skills").show();
  $(".fade-in-right-skills").addClass( "fade-in-right-start" );

  jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});

  jQuery('.Count').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
      duration: 6000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });

});

$("#lastest-work").one("mouseenter", function() {

});

$("#contact-me").one("mouseenter", function() {
  $(".fade-in-down-env").show();
  $(".fade-in-down-env").addClass( "fade-in-down-start" );
  $(".fade-in-up-msg").show();
  $(".fade-in-up-msg").addClass( "fade-in-up-start" );
  $(".fade-in-right-contact-form").show();
  $(".fade-in-right-contact-form").addClass( "fade-in-right-start" );
});

$('.flip').hover(function(){
  $(this).find('.card').toggleClass('flipped');
});