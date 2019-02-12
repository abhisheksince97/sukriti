$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayTimeout: 2000,
  nav:true,
  navText:["<img class='owl-arrows owl-left' src='assets/home/oval-4-copy-4.svg'>","<img class='owl-arrows owl-right' src='assets/home/oval-4.svg'>"],
  
  autoplayHoverPause: true,
  loop: true,
  margin: 20,
  responsiveClass: true,
  loop: true,
  responsive: {
    320: {
      items: 1,
      autoWidth:true
    },
    568: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    },
	1300: {
		items:5
	}
  }
  
})
