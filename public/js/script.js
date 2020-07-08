const $navLinks = $('.nav-link');
const $me = $('#me');
const $projects = $('#projects');
const $contact = $('#contact');
const $resume = $('#resume');
const $iframe = $('#iframe');
const $toggleThemeSwitch = $('.toggle-theme-switch');
const $cookieConsent = $('#cookie-consent');
const $cookieOkayBtn = $('.cookie-okay');

let tl = gsap.timeline({ duration: 0.5 });
tl
  .from('.left-div', { x: -50, opacity: 0 })
  .from('.right-div', { x: 50, opacity: 0 }, '-=0.5')
  .from('.toggle-theme', { scale: 0, opacity: 0 })
  .from('.anim', { y: -20, opacity: 0, stagger: 0.2 });

$cookieOkayBtn.on('click', () => {
  $cookieConsent.hide();
  document.cookie = 'consent=yes';
});

$toggleThemeSwitch.click(() => {
  $('.main').toggleClass('light-mode');
  if ($('.main').hasClass('light-mode')) {
    document.cookie = `theme=light`;
  } else {
    document.cookie = `theme=dark`;
  }
});

let getCookieValue = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

$(document).ready(function() {
  if (!getCookieValue('consent')) {
    $cookieConsent.css('visibility', 'visible');
  }

  if (getCookieValue('theme')) {
    let themeValue = getCookieValue('theme');
    if (themeValue != 'dark') {
      $('.main').addClass('light-mode');
      $toggleThemeSwitch.prop('checked', true);
    } else {
      $toggleThemeSwitch.prop('checked', false);
    }
  } else {
    if ($('.main').hasClass('light-mode')) {
      document.cookie = `theme=light`;
    } else {
      document.cookie = `theme=dark`;
    }
  }

  $($navLinks).on('click', function() {
    $('.nav-link.active').removeClass('active');
    $(this).addClass('active');
    $iframe.attr('src', `${$(this).attr('id')}`);
  });
});
