//Menu sublinks
$('.menu__sublink--more').click(function() {
  $(this).next().slideToggle();
})

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__wrap').slideToggle();
})

if (window.innerWidth < 1182) {
  $('.menu__subbtn').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('menu__subbtn--down');
  });
  $('.menu__item--more').click(function(e) {
    e.preventDefault();
    $('.menu__sublist--more').slideToggle();
  })
}

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
