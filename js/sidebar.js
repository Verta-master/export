//Mobile filter in sidebar
$('.sidebar__filter-btn').click(function() {
  $('.sidebar__filter').slideToggle();
});

$('.sidebar__menu-btn').click(function() {
  $('.sidebar__list').slideToggle();
  $(this).toggleClass('sidebar__menu-btn--opened');
});

$('.sidebar__title').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('.sidebar__title--opened');
});
