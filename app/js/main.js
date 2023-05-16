$(function () {
  $('.header__btn').on('click', function () {
    $(".rightside__menu").removeClass("rightside__menu--close");
  });  
  $('.rightside__menu-close').on('click', function () {
    $(".rightside__menu").addClass("rightside__menu--close");
  })
})