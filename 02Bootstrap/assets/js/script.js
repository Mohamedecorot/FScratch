console.log("coucou")
$(document).ready(function(){

    $('.navbar').hide();

    $(function () {
      $(window).scroll(function () {

        if ($(this).scrollTop() > 720) {
          $('.navbar').fadeIn();
        } else {
          $('.navbar').fadeOut();
        }
      });
    });
  });