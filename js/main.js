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
      $('.detalis__related-slider').slick({
         slidesToShow: 4,
         arrows: true,
         infinity: false,
         nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt="#"></button>',
         prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt="#"></button>'
      });
      

   $('.detalis__tab-link').on('click', function (e) {
      e.preventDefault()
      $('.detalis__tab-link').removeClass('detalis__tab-link--active')
      $(this).addClass('detalis__tab-link--active')

      $('.detalis__content-item').removeClass('detalis__content-item--active')
      $($(this).attr('href')).addClass('detalis__content-item--active')
   })
   $('.detalis__form-input').styler();

   $('.detalis__top-big').slick({
      asNavFor: '.detalis__top-thimb',
      fade: true,
      arrows: false,
   })
   $('.detalis__top-thimb').slick({
      vertical: true,
      slidesToShow: 3,
      asNavFor: '.detalis__top-big',
      focusOnSelect: true,
   });

   $(".content-star").rateYo({
      starWidth: "20px",
      normalFill: '#D6D6D6',
      ratedFill: '#FFCC00',
      spacing: '10px',
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>'
   })





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