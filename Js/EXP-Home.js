// Cuando el DOM o HTML se ha cargado, pero sin imagenes
$(document).ready(function () {
    $('#mainBanners').slick({
      "autoplay": true,
      dots: true,
      infinite: true,
      speed: 1500,
      fade: true,
      cssEase: 'linear'
    });
  })
  
  // Cuando la pagina ya se ha cargado totalmente
  $(window).load(function() {
    categoriesCarousel()
    $(window).resize(function() {
      categoriesCarousel()
    });
  });
  
  
  function categoriesCarousel() {
    if ($(window).width() < 1000 && $(window).width() > 700 ) {
        $('.contenedor-submenu.slick-initialized').slick('unslick');
        $('.contenedor-submenu').slick({
          dots: true,
          slidesToShow: 3,
          arrows: false,
          infinite: false
        });
      
    } else if ($(window).width() < 701) {
        $('.contenedor-submenu.slick-initialized').slick('unslick');
        $('.contenedor-submenu').slick({
          dots: true,
          slidesToShow: 1,
          arrows: false,
          infinite: false
        });
      
    } else {
      $('.contenedor-submenu.slick-initialized').slick('unslick');
    }
  }