console.log("Let's get started!");

$(document).ready(function(){
      $('.parallax').parallax();
      $('ul.tabs').tabs('select_tab', 'tab_id');
    });



$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});
