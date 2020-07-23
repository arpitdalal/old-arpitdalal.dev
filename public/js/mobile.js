const $navLinksMb = $('.nav-link-mb');
const $stickyNavbar = $('.fixed-top');

let oldScrollPosition = 0;
let isScrollingUp = false;
let isHeaderVisible = true;

window.addEventListener('scroll', () => {
  isScrollingUp = oldScrollPosition > window.scrollY;
  oldScrollPosition = window.scrollY;

  if (!isScrollingUp && window.scrollY > 50 && isHeaderVisible) {
    $stickyNavbar.addClass('invisible');
    isHeaderVisible = false;
  }

  if (isScrollingUp && !isHeaderVisible) {
    $stickyNavbar.removeClass('invisible');
    isHeaderVisible = true;
  }
});

$(document).ready(function() {
  $($navLinksMb).on('click', function() {
    window.location.href = `/${$(this).attr('id')}`;
  });
});
