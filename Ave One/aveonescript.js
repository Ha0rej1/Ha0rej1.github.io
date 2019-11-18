var gotop = $('#gotop');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    gotop.addClass('gotop-show');
  } else {
    gotop.removeClass('gotop-show');
  }
});