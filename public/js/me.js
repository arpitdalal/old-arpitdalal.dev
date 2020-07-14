const $navLinks = $('.nav-link');

$(document).ready(function() {
  $($navLinks).on('click', function() {
    window.location.href = `/${$(this).attr('id')}`;
  });
});
