$(function () {
  
   $('.usernav-header__more').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close')
   });
   $('.rightside-menu__close').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close')
   });
   $('.header__btn-menu').on('click', function(){
      $('.menu').toggleClass('menu--open');
     });

     $('.usernav-header__search').on('click', function(){
      $('.search-menu').removeClass('search-menu--close')
     });
     $('.search-menu__close').on('click', function(){
      $('.search-menu').addClass('search-menu--close')
     });
     $('.header__btn-menu').on('click', function(){
        $('.menu').toggleClass('menu--open');
       });

   $('.top-slider__inner').slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      });
   var containerEl1 = document.querySelector('[data-ref="week__inner"]');
   var containerEl2 = document.querySelector('[data-ref="new-design__inner"]');

   var config = {
      controls: {
         scope: 'local'
      }
   };
   var mixer1 = mixitup(containerEl1, config);
   var mixer1 = mixitup(containerEl2, config);
});
