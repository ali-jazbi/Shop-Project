(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });
})(jQuery);


let pop=document.getElementById("popup1");
let pop2=document.getElementById("popup2");
          function show1() {
            pop.style.display="flex";
            // document.body.style.overflow="hidden";
           }
         function hide1() {
          pop.style.display="none";
          // document.body.style.overflow="auto";
         }
         function show2() {
            pop2.style.display="flex";
            // document.body.style.overflow="hidden";
           }
         function hide2() {
          pop2.style.display="none";
          // document.body.style.overflow="auto";
         }