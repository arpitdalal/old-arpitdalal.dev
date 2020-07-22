const $navLinks = $('.nav-link-mb');

$(document).ready(function() {
  $($navLinks).on('click', function() {
    window.location.href = `/${$(this).attr('id')}`;
  });
});
