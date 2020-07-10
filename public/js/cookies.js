const $toggleThemeSwitch = $('#toggleState');
const $toggleThemeLabel = $('.toggle-label');
const $toggleTitle = $('#toggle-title');
const $cookieConsent = $('#cookie-consent');
const $cookieOkayBtn = $('.cookie-okay');

$cookieOkayBtn.on('click', () => {
  $cookieConsent.css('display', 'none');
  document.cookie = 'consent=yes';
});

$toggleThemeSwitch.click(() => {
  $('.main').toggleClass('light-mode');
  if ($('.main').hasClass('light-mode')) {
    $toggleThemeSwitch.prop('checked', true);
    $toggleThemeLabel.attr('title', 'Toggle to dark mode');
    $toggleTitle.text('Toggle to dark mode');
    document.cookie = `theme=light`;
  } else {
    $toggleThemeSwitch.prop('checked', false);
    $toggleThemeLabel.attr('title', 'Toggle to light mode');
    $toggleTitle.text('Toggle to light mode');
    document.cookie = `theme=dark`;
  }
});

let getCookieValue = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

$(document).ready(function() {
  $('.collapse-button').on('click', () => {
    $('.animated-icon').toggleClass('open');
  });

  if (!getCookieValue('consent')) {
    $cookieConsent.css('display', 'block');
  }

  if (getCookieValue('theme')) {
    let themeValue = getCookieValue('theme');
    if (themeValue != 'dark') {
      $('.main').addClass('light-mode');
      $toggleThemeSwitch.prop('checked', true);
      $toggleThemeLabel.attr('title', 'Toggle to dark mode');
      $toggleTitle.text('Toggle to dark mode');
    } else {
      $toggleThemeSwitch.prop('checked', false);
      $toggleThemeLabel.attr('title', 'Toggle to light mode');
      $toggleTitle.text('Toggle to light mode');
    }
  } else {
    if ($('.main').hasClass('light-mode')) {
      $toggleThemeSwitch.prop('checked', true);
      $toggleThemeLabel.attr('title', 'Toggle to dark mode');
      $toggleTitle.text('Toggle to dark mode');
      document.cookie = `theme=light`;
    } else {
      $toggleThemeSwitch.prop('checked', false);
      $toggleThemeLabel.attr('title', 'Toggle to light mode');
      $toggleTitle.text('Toggle to light mode');
      document.cookie = `theme=dark`;
    }
  }
});
