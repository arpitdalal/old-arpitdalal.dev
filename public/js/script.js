const $navLinks = $('.nav-link');
const $me = $('#me');
const $projects = $('#projects');
const $contact = $('#contact');
const $resume = $('#resume');
const $iframe = $('#iframe');
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
	} else {
		document.cookie = `theme=dark`;
	}
});

// function to get cookie value
let getCookieValue = (name) => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
};

$(document).ready(function() {
	if (!getCookieValue('consent')) {
		// if there is a cookie named "consent" then make consent box visible
		$cookieConsent.css('visibility', 'visible');
	}

	if (getCookieValue('theme')) {
		// will set the theme on basis of the value in the cookie "theme"
		let themeValue = getCookieValue('theme');
		if (themeValue != 'dark') {
			$('.main').addClass('light-mode');
			$toggleThemeSwitch.prop('checked', true);
		} else {
			$toggleThemeSwitch.prop('checked', false);
		}
	} else {
		// if there is no cookie name "theme", will set one up on basis of the current theme user has
		if ($('.main').hasClass('light-mode')) {
			document.cookie = `theme=light`;
		} else {
			document.cookie = `theme=dark`;
		}
	}

	// changing the background color of the nav links on click
	$($navLinks).on('click', function() {
		$('.nav-link.active').removeClass('active');
		$(this).addClass('active');
		// setting the src of the iframe to the id of the nav-link clicked
		$iframe.attr('src', `${$(this).attr('id')}`);
	});
});
