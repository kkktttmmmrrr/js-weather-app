'use strict';
const getUserAgent = () => {
  const head = document.querySelector('head');
  const ua = navigator.userAgent;

  if (
    ua.includes('iPhone') ||
    ua.includes('iPad') ||
    ua.includes('Android') ||
    ua.includes('Mobile')
  ) {
    head.insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="css/mobile.css">'
    );
  }
};

getUserAgent();
