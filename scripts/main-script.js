$('.flip').hover(function(){
  $(this).find('.card').toggleClass('flipped');
});



const observer1 = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log("services visible")
      $(".fade-in-down").show();
      $(".fade-in-down").addClass( "fade-in-down-start" );
      $(".fade-in-up").show();
      $(".fade-in-up").addClass( "fade-in-up-start" );
    }
  })
}); 

observer1.observe(document.querySelector('#services'));


const observer2 = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log("about me visible")
      $(".fade-in-left").show();
      $(".fade-in-left").addClass( "fade-in-left-start" );
      $(".fade-in-right").show();
      $(".fade-in-right").addClass( "fade-in-right-start" );
    }
  })
}); 

observer2.observe(document.querySelector('#about-me'));

const observer3 = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log("international visible")
      $(".fade-in-up-gmaps").show();
      $(".fade-in-up-gmaps").addClass( "fade-in-up-start" );
    }  
  })
}); 

observer3.observe(document.querySelector('#international-experiences'));

const observer4 = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log("skill visible")
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
    }  
  })
}); 

observer4.observe(document.querySelector('#skills'));

const observer5 = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log("lastestwork visible")
      $(".fade-in-up-porto").show();
      $(".fade-in-up-porto").addClass( "fade-in-up-start" );  
    }  
  })
}); 

observer5.observe(document.querySelector('#lastest-work'));

const observer6 = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log("contact-me visible")
      $(".fade-in-down-env").show();
      $(".fade-in-down-env").addClass( "fade-in-down-start" );
      $(".fade-in-up-msg").show();
      $(".fade-in-up-msg").addClass( "fade-in-up-start" );
      $(".fade-in-right-contact-form").show();
      $(".fade-in-right-contact-form").addClass( "fade-in-right-start" );
    }  
  })
}); 

observer6.observe(document.querySelector('#contact-me'));

