function abc()
{
var myvar=setInterval(function(){
	$(function(){
    // $("#v1").css({'display':'none'});
		$("#v1").fadeOut("slow");
	});
		
},8500);
control.log(myvar);
clearInterval(myvar);

}
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
        window.location = "homepage copy.html";
    }
    else if ((w > 983) ) {
        window.location = "index.html";
    }
});

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top-40
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})
$(function(){
  $("div#model p").css({'opacity':'0','transition':'0.5s'});
  $("div#model span").hover(function(){  
    var x="p#"+$(this).attr("id");
    
    $(x).css({'opacity':'1','transition':'0.5s'});
      $(x).hover(function(){  
      $(x).css({'opacity':'1','transition':'0.5s'});
    });
    $(x).mouseout(function(){
      $(x).css({'opacity':'0','transition':'0.5s'});
       
  });
  });
  $("div#model span").mouseout(function(){
    var x="p#"+$(this).attr("id");
      $(x).css({'opacity':'0','transition':'0.5s'});
       $(this).css({'display':'inline'});
  });
});
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 550) {
      $(this).addClass("slide");
    }
  });
});
$(window).scroll(function() {
  $(".slideanim1").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 650) {
      $(this).addClass("slide1");
    }
  });
});
$(window).scroll(function() {
  $(".slideanim2").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 650) {
      $(this).addClass("slide2");
    }
  });
});
$(window).scroll(function() {
  $(".slideanim5").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 550) {
      $(this).addClass("slide5");
    }
  });
});
$(window).scroll(function() {
  $(".slideanim3").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 450) {
      $(this).addClass("slide3");}
    else
      $(this).removeClass("slide3");
    
  });
});
$(window).scroll(function() {
  $(".slideanim4").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 150) {
      $(this).addClass("slide4");}
    else
      $(this).removeClass("slide4");
    
  });
});
$(function(){
  
  $("div#problem div img").mouseover(function(){  
    var x="p#"+$(this).attr("id");
  $(x).css({'opacity':'1'});
  $(this).css({'box-shadow':'5px 0px 10px rgba(0,0,0, .7)','-webkit-filter':'grayscale(0%)'});
  });

});

$(function(){
  $(window).scroll(function(){
  var x=$(window).scrollTop();
  console.log(x);
  if (x>0&&x<1400) 
    {
      $("#back1").css({'opacity':'1'});
      $("#back2").css({'opacity':'1'});
      $("#back3").css({'opacity':'1'});
    }
  else if (x>1400&&x<3600)
    {
      $("#back1").css({'opacity':'1'});
      $("#back2").css({'opacity':'1'});
      $("#back3").css({'opacity':'0'});
    }
  else if (x>3600) 
    {
      $("#back1").css({'opacity':'1'});
      $("#back2").css({'opacity':'0'});
      $("#back3").css({'opacity':'0'});
    }

  });

});
$(document).ready(function() {
    var panels = $('.vote-results');
    var panelsButton = $('.dropdown-results');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('Hide Results');
            }
            else
            {
                currentButton.html('View Results');
            }
        })
    });
});

$(function() {
  function fixDiv() {
    var $cache = $('.stof');
    if ($(window).scrollTop() > $('#aboutus').offset().top+70)
      { $cache.removeClass("abs");
        $cache.addClass("fix");}
        $cache.css({'top':''});
    if($(window).scrollTop() < $('#aboutus').offset().top+70)
      {$cache.removeClass("fix");}
    if($(window).scrollTop() > $('#model').offset().top-$('.stof').outerHeight(true)-130) 
      {$cache.removeClass("fix");
       $cache.addClass('abs');
       $cache.css({'top':$('#model').offset().top-$('.stof').outerHeight(true)-835});
      }
  }
  $(window).scroll(fixDiv);
  fixDiv();
});
