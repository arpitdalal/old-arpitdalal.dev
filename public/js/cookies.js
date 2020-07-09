const $toggleThemeSwitch = $('.toggle-theme-switch');
const $cookieConsent = $('#cookie-consent');
const $cookieOkayBtn = $('.cookie-okay');

$cookieOkayBtn.on('click', () => {
  $cookieConsent.hide();
  document.cookie = 'consent=yes';
});

$toggleThemeSwitch.click(() => {
  $('.main').toggleClass('light-mode');
  if ($('.main').hasClass('light-mode')) {
    document.cookie = `theme=light`;
    $load.attr('src', $load.attr('src'));
  } else {
    document.cookie = `theme=dark`;
    $load.attr('src', $load.attr('src'));
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
});
