// $(document).ready(function() {
//       $(window).scroll( function(){
//           $('.fade-in-down').each( function(i){
//               var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//               var bottom_of_window = $(window).scrollTop() + $(window).height();
//               if( bottom_of_window > bottom_of_element ){
//                   $(this).animate('FadeInDown');
//               }
//           });
//       });
//   });

  $(document).ready(function() {
    $(window).scroll( function(){
        $('.fade-in-down').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
              $(this).show();
              $(this).addClass( "fade-in-down-start" );
            }
        });

        $('.fade-in-up').each( function(i){
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_element ){
            $(this).show();
            $(this).addClass( "fade-in-up-start" );
          }
      });
    });
});


  