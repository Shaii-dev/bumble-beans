
/* Start of Navbar Animation */
/* Navbar will change color on scroll */
$(document).ready(function(){

  /* Everytime the window is scrolled */
	$(window).on("scroll",function(){

    var wn = $(window).scrollTop();
    
    /* when you scrolled a distance of more than 150 from the top... */
    if(wn > 150){

      /* navbar background will change its color */
      $(".navbar").css("background","rgba(0,0,0,0.7)");

      /* navbar toggler icon will also change its color */
      $(".navbar-toggler-icon").css("filter","invert(100%)"); 

      /* navbar toggler icon will also change its color */
      $(".navbar-toggler-icon").css("-webkit-filter","invert(100%)");

      /* Menu Bar Text will also change to this color */
      $(".nav-link").css("color","rgba(255,255,255,1)")
    }
    else{

      /* default color at start */
      $(".navbar").css("background","rgba(0,0,0,0"); 

      /* default font color at start */
      $(".nav-link").css("color","rgba(0,0,0,.7)")  

      /* default toggler color at start */
      $(".navbar-toggler-icon").css("filter","invert(0%)"); 

      /* default toggler color at start */
      $(".navbar-toggler-icon").css("-webkit-filter","invert(0%)"); 
    }
  });
});
/* End of Navbar Animation */



/* smooth scroll on every button that uses href */
$('a[href^="#"]').click(function () {
  $('html, body').animate({
    scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 800);
  return false;
});
/* end */



/* Go to top Button fade in on scroll */
/* this will make the go to top button to fade in when scrolled down and fade out when scrolled up */
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  /* when you scroll a distance of more than 20 from the top.... */
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    /* the display will change from none to block thus making it visible */
    document.getElementById("myBtn").style.display = "block"; 
  } else {
    /* default display value of the go to top button when not scrolled */
    document.getElementById("myBtn").style.display = "none"; 
  }
}
/* end */



/* Main Animation for the banner */
$(document).ready(function () {
  
  /* this will animate the banner to fade in for 300ms after a 100ms delay */
  $(".hide").hide(0).delay(100).fadeIn(300) 

  /* this will fade in 300px from the right */
  $(".hide2").animate({ opacity: '1', right: '300px'}) 

  /* after a 200ms delay this will also fade in 300px from the right */
  $(".hide3").delay(200).animate({ opacity: '1', right: '300px'}) 
});
/* end */



/* on Scroll Fade In */
$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hideme').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var top_of_window = $(window).scrollTop() + 100

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        /* element will fade in for 1500ms */
        $(this).animate({ 'opacity': '1' }, 1500); 
      }
    });
  });
});
/* end */


/* from left to right animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeleft-right1').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* if the object is completely visible between 2000 and 2600... */
      if ((bottom_of_window > 2000) &&(bottom_of_window < 2600)) {

        /* fade it in 500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '1', left: '500px' }, 1000); 
      } else {

        /* if not fade it out -500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '0', left: '-500px' }, 1000); 
      }

    });

  });

});
/* end */



/* from right to left animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeright-left1').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 2000 & 2600... */
      if ((bottom_of_window > 2000) &&(bottom_of_window < 2600)) {

        /* fade it in -500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '1', left: '-500px' }, 1000);
      } else {

        /* if not fade it out 500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '0', left: '500px' }, 1000);
      }

    });

  });

});
/* end */



/* from right to left animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeright-left2').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 2600 & 3200... */
      if ((bottom_of_window > 2600) &&(bottom_of_window < 3200)) {

        /* fade it in -500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '1', left: '-500px' }, 1000);
      } else {

        /* if not fade it out 500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '0', left: '500px' }, 1000);
      }

    });

  });

});
/* end */




/* from left to right animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeleft-right2').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 2600 & 3200... */
      if ((bottom_of_window > 2600) &&(bottom_of_window < 3200)) {

        /* fade it in 500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '1', left: '500px' }, 1000);
      } else {

        /* fade it out -500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '0', left: '-500px' }, 1000);
      }

    });

  });

});
/* end */




/* from right to left animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeright-left3').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 3200 & 3800... */
      if ((bottom_of_window > 3200) &&(bottom_of_window < 3800)) {

        /* fade it in -500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '1', left: '-500px' }, 1000);
      } else {

        /* if not fade it out 500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '0', left: '500px' }, 1000);
      }

    });

  });

});
/* end */




/* from left to right animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeleft-right3').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 3200 & 3800... */
      if ((bottom_of_window > 3200) &&(bottom_of_window < 3800)) {

        /* fade it in 500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '1', left: '500px' }, 1000);
      } else {

        /* fade it out -500px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '0', left: '-500px' }, 1000);
      }

    });

  });

});
/* end */




/* Fade in Animation for the Divider Element Between Our Product and About Us */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fademe-in2').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 3400 & 4000... */
      if ((bottom_of_window > 3400) &&(bottom_of_window < 4000)) {

        /* fade it in for 1000ms */
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {

        /* if not fade it out for 1000ms */
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});
/* end */





/* Fade in Animation for the divider element between Banner and About Us */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fademein-1').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 1200 & 2000... */
      if ((bottom_of_window > 1200) &&(bottom_of_window < 2000)) {

        /* fade it in 50px from the top for 1000ms */
        $(this).stop().animate({ 'opacity': '1', top: '50px' }, 1000);
      } else {

        /* if not fade it out -50px from the top for 1000ms */
        $(this).stop().animate({ 'opacity': '0', top: '-50px' }, 1000);
      }

    });

  });

});
/* end */




/* Fade in Animation For About Us Header */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fademein-3').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 1500 & 2300... */
      if ((bottom_of_window > 1500) &&(bottom_of_window < 2300)) {

        /* fade it in for 1000ms */
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {

        /* if not fade it out for 1000ms */
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});
/* end */




/* Fade in Animation for Our Products Header */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fademein-4').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 3500 & 4200... */
      if ((bottom_of_window > 3500) &&(bottom_of_window < 4200)) {

        /* fade it in for 1000ms */
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {

        /* if not fade it out for 1000ms */
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});
/* end */





/* Animation for product 1 */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.right-left1').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 4300 & 5200... */
      if ((bottom_of_window > 4300) &&(bottom_of_window < 5200)) {

        /* fade in the "right-left1" 500px from the right for 1000ms */
        $(this).stop().animate({ 'opacity': '1', right: '500px'}, 1000);

        /* fade in also the "productimg1" 890px from the right for 1000ms */
        $('#productimg1').stop().animate({ 'opacity': '1', right: '890px'}, 1000);

        /* fade in as well the "productimg2" 400px from the right for 1000ms */
        $('#productimg2').stop().animate({ 'opacity': '1', right: '400px'}, 1000);
      } else {

        /* if not fade out the "right-left1" -500px from the right for 1000ms */
        $(this).stop().animate({ 'opacity': '0', right: '-500px'}, 1000);

        /* fade out also the "productimg1" 700px from the right for 1000ms */
        $('#productimg1').stop().animate({ 'opacity': '0', right: '700'}, 1000);

        /* fade out as well the "productimg2" 0px from the right for 1000ms */
        $('#productimg2').stop().animate({ 'opacity': '0', right: '0'}, 1000);
      }

    });

  });

});
/* end */





/* Animation for Product 2 */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.right-left2').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible betweem 5200 & 6000... */
      if ((bottom_of_window > 5200) &&(bottom_of_window < 6000)) {

        /* fade in the "right-left2" 900px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '1', left: '900px'}, 1000);

        /* fade in also the "productimg3" -450px from the right for 1000ms */
        $('#productimg3').stop().animate({ 'opacity': '1', right: '-450px'}, 1000);

        /* fade in as well the "productimg4" 480px from the right for 1000ms */
        $('#productimg4').stop().animate({ 'opacity': '1', right: '480px'}, 1000);
      } else {

        /* if not fade out the "right-left2" '_' from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '0', left: ''}, 1000);

        /* fade out also the "productimg3" '_' from the right for 1000ms */
        $('#productimg3').stop().animate({ 'opacity': '0', right: ''}, 1000);

        /* fade out as well the "productimg4" 750px from the right for 1000ms */
        $('#productimg4').stop().animate({ 'opacity': '0', right: '705px'}, 1000);
      }

    });

  });

});
/* end */






/* Animation for Product 3 */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.right-left3').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 6000 & 6800... */
      if ((bottom_of_window > 6000) &&(bottom_of_window < 6800)) {

        /* fade in the "right-left3" 500px from the right for 1000ms */
        $(this).stop().animate({ 'opacity': '1', right: '500px'}, 1000);

        /* fade in also the "productimg5" 620px from the right for 1000ms */
        $('#productimg5').stop().animate({ 'opacity': '1', right: '620px'}, 1000);

        /* fade in as well the "productimg6" -150px from the right for 1000ms */
        $('#productimg6').stop().animate({ 'opacity': '1', right: '-150px'}, 1000);
      } else {

        /* if not fade out the "right-left3" -500px from the right for 1000ms */
        $(this).stop().animate({ 'opacity': '0', right: '-500px'}, 1000);

        /* fade out also the "productimg5" 415px from the right for 1000ms */
        $('#productimg5').stop().animate({ 'opacity': '0', right: '415px'}, 1000);

        /* fade out as well the "productimg6" -555px from the right for 1000ms */
        $('#productimg6').stop().animate({ 'opacity': '0', right: '-555px'}, 1000);
      }

    });

  });

});
/* end */




/* Animation for Product 4 */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.right-left4').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible between 6800 & 7500... */
      if ((bottom_of_window > 6800) &&(bottom_of_window < 7500)) {

        /* fade in the "right-left4" 900px from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '1', left: '900px'}, 1000);

        /* fade in also the "productimg7" 480px from the right for 1000ms */
        $('#productimg7').stop().animate({ 'opacity': '1', right: '480px'}, 1000);

        /* fade in as well the "productimg8" 450px from the left for 1000ms */
        $('#productimg8').stop().animate({ 'opacity': '1', left: '450px'}, 1000);
      } else {

        /* if not fade out the "right-left4" '_' from the left for 1000ms */
        $(this).stop().animate({ 'opacity': '0', left: ''}, 1000);

        /* fade out also the "productimg7" 705px from the right for 1000ms */
        $('#productimg7').stop().animate({ 'opacity': '0', right: '705px'}, 1000);

        /* fade out as well the "productimg8" 0px from the left for 1000ms */
        $('#productimg8').stop().animate({ 'opacity': '0', left: '0'}, 1000);
      }

    });

  });

});
/* end */






/* Animation for Retailer Hedaer */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hideme-retailer').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window... */
      if (bottom_of_window > bottom_of_object) {

        /* fade it in for 1000ms */
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {

        /* if not fade it out for 1000ms */
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});
/* end */





/* Animation for Logo */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('#retailerBG').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window... */
      if (bottom_of_window > bottom_of_object) {

        /* fade in all the logo '_' from the top for 1000ms */
        $('#retailerlogo1').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo2').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo3').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo4').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo5').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo6').stop().animate({ 'opacity': '1', top: ''}, 1000);
      } else {

        /* if not fade out all the logo -200px from the top for 1000ms */
        $('#retailerlogo1').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo2').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo3').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo4').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo5').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo6').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
      }

    });

  });

});
/* end */





/* Animtion for Our Products on screen size 768px */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.ourproduct-768').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window... */
      if (bottom_of_window > bottom_of_object) {

        /* fade it in for 1000ms */
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {

        /* if not fade it out for 1000ms */
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});
/* end */