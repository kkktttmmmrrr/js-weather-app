'use strict';
const getUserAgent = () => {
  const head = document.querySelector('head');
  const ua = navigator.userAgent;
  console.log({ ua });
  console.log(ua.includes('iPhone'));
  console.log(ua.includes('Android'));

  if (
    ua.includes('iPhone') ||
    ua.includes('iPad') ||
    ua.includes('Android') ||
    ua.includes('Mobile')
  ) {
    console.log('mobile.cssが追加される');
    head.insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="css/mobile.css">'
    );
  }
};

getUserAgent();
