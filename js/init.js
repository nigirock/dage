(function($){
  $(function(){


    $('.button-collapse').sideNav();
    $('.slider').slider();
    $('.collapsible').collapsible();

    $("[data-fancybox]").fancybox({
      // Options will go here
    });
/*    $('.bw').hover(function () {
        $(this).addClass("animated pulse");
    },function () {
        $(this).removeClass("animated pulse");
    })*/



  }); // end of document ready
})(jQuery); // end of jQuery name space
