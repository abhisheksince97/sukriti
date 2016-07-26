$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
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
});

$(window).resize(function() {
    var w = $(window).width();
    var h = $(window).height();
    if ((w < 983) ) {
        window.location = "model copy.html";
    }
    else if ((w > 983) ) {
        window.location = "model.html";
    }
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
$(function(){
  $("div#toilet div.row div[id]").mouseenter(function(){
    var x="img#"+$(this).attr("id");
    var y="div#"+$(this).attr("id");
  $(x).addClass("hover");
  // $(y).addClass("hover1");
  });
  $("div#toilet div.row div[id]").mouseleave(function(){
    var x="img#"+$(this).attr("id");
    var y="div#"+$(this).attr("id");
  $(x).removeClass("hover");
  // $(y).removeClass("hover1");
  });
});
$(function() {
  function fixDiv() {
    var $cache = $('.stof');
    if ($(window).scrollTop() > $('#toilet').offset().top-30)
      { $cache.removeClass("abs");
        $cache.css({'top':''});
        $cache.addClass("fix");}
    if($(window).scrollTop() < $('#toilet').offset().top-30)
      {$cache.removeClass("fix");
        
      }
    if($(window).scrollTop() > $('#contact').offset().top-$('.stof').outerHeight(true)-130) 
      {$cache.removeClass("fix");
       $cache.addClass('abs');
       $cache.css({'top':$('#contact').offset().top-$('.stof').outerHeight(true)-3500});
      }
  }
  $(window).scroll(fixDiv);
  fixDiv();
});
$(function() {
  function fixDiv() {
    var $cache1 = $('.stof1');
    if ($(window).scrollTop() > $('#toilet').offset().top-100)
      { $cache1.removeClass("abs1");
        $cache1.addClass("fix1");
      }
    if($(window).scrollTop() < $('#toilet').offset().top-100)
      {$cache1.removeClass("fix1");}
    if($(window).scrollTop() > $('#contact').offset().top-$('.stof1').outerHeight(true)-130) 
      {$cache1.removeClass("fix1");
        $cache1.addClass("abs1");
      }
  }
  $(window).scroll(fixDiv);
  fixDiv();
});

$(function(){
  $(window).scroll(function(){
  var x=$(window).scrollTop();
  console.log(x);
  if (x>0&&x<3350) 
    {
      $("#custom1").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom2").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom3").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom4").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom5").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom6").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom7").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom8").css({'color':'gray','transition':'0.5s','transform':'scale(1)','opacity':'1'});
    }
  else if (x>3350&&x<3680)
    {
      $("#custom1").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom2").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom3").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom4").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom5").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom6").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom7").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom8").css({'color':'red','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
    }
  else if (x>3680&&x<4390) 
    {
      $("#custom1").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'0.1'});
      $("#custom2").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom3").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom4").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom5").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom6").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom7").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom8").css({'color':'gray','transition':'0.5s','transform':'scale(1)','opacity':'0.1'});
    }

    else if (x>4390&&x<4980) 
    {
      $("#custom1").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'0.1'});
      $("#custom2").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom3").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom4").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom5").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom6").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom7").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'0.1'});
      $("#custom8").css({'color':'red','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
    }
    else if (x>4980&&x<5360) 
    {
      $("#custom1").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'0.1'});
      $("#custom2").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom3").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom4").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'0.1'});
      $("#custom5").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom6").css({'-webkit-filter':'grayscale(0%)','transition':'0.5s','transform':'scale(1.35)','opacity':'1'});
      $("#custom7").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'0.1'});
      $("#custom8").css({'color':'gray','transition':'0.5s','transform':'scale(1)','opacity':'0.1'});
    }
     else if (x>5360) 
    {
      $("#custom1").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom2").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom3").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom4").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom5").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom6").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom7").css({'-webkit-filter':'grayscale(100%)','transition':'0.5s','transform':'scale(1)','opacity':'1'});
      $("#custom8").css({'color':'gray','transition':'0.5s','transform':'scale(1)','opacity':'1'});
    }
  });

});

// $(function () { // wait for document ready
//     // init
//     var controller = new ScrollMagic.Controller();

//     // define movement of panels
//     var wipeAnimation = new TimelineMax()
//       // animate to second panel
//       .to("#slideContainer", 0.5, {z: -150})    // move back in 3D space
//       .to("#slideContainer", 1,   {x: "-25%"})  // move in to first panel
//       .to("#slideContainer", 0.5, {z: 0})       // move back to origin in 3D space
//       // animate to third panel
//       .to("#slideContainer", 0.5, {z: -150, delay: 1})
//       .to("#slideContainer", 1,   {x: "-50%"})
//       .to("#slideContainer", 0.5, {z: 0})
//       // animate to forth panel
//       .to("#slideContainer", 0.5, {z: -150, delay: 1})
//       .to("#slideContainer", 1,   {x: "-75%"})
//       .to("#slideContainer", 0.5, {z: 0});

//     // create scene to pin and link animation
//     new ScrollMagic.Scene({
//         triggerElement: "#pinContainer",
//         triggerHook: "onLeave",
//         duration: "500%"
//       })
//       .setPin("#pinContainer")
//       .setTween(wipeAnimation)
//       .addIndicators() // add indicators (requires plugin)
//       .addTo(controller);
//   });