$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.test, .nav-link, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top -90
    }, 600);
});
