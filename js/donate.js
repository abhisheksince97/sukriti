$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
$(window).resize(function() {
    var w = $(window).width();
    var h = $(window).height();
    if ((w < 983) ) {
        
        $('div#main').removeClass('mainpd');
    }
    else if ((w > 983) ) {
        $('div#main').addClass('mainpd');
    }
});
$(function(){
  
  $('div.form-group button').click(function(){ 
   $('div.form-group button').removeClass('active');
  $(this).addClass('active');
  });

});
$(function(){
  var w = $(window).width();
    var h = $(window).height();
  if ((w < 983) ) {
        
        $('div#main').removeClass('mainpd');
    }
    else if ((w > 983) ) {
        $('div#main').addClass('mainpd');
    }
});