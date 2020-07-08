const $navLinks = $('.nav-link');
const $load = $('#load');

if (gsap) {
  let tl = gsap.timeline({ duration: 0.5 });
  tl
    .from('.left-div', { x: -50, opacity: 0 })
    .from('.right-div', { x: 50, opacity: 0 }, '-=0.5')
    .from('.toggle-theme', { scale: 0, opacity: 0 })
    .from('.anim', { y: -20, opacity: 0, stagger: 0.2 });
}

$(document).ready(function() {
  $load.load('/me #me');
  $($navLinks).on('click', function() {
    $('.nav-link.active').removeClass('active');
    $(this).addClass('active');
    if ($(this).attr('id') === 'resume') {
      console.log('eee');
      $load.empty();
      return $load.append('<iframe width="100%" height="100%" style="border: none;" src="/resume"></iframe>');
    }
    return $load.load(`/${$(this).attr('id')} #${$(this).attr('id')}`);
  });
});
