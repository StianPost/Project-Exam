const hamburgerOpen = document.querySelector('#hamburgerOpenBtn');
const hamburgerClose = document.querySelector('#hamburgerCloseBtn');
const overlay = document.querySelector('#overlay');

hamburgerOpen.onclick = function () {
  overlay.classList.remove('hide');
  hamburgerOpen.classList.add('hide');
};
hamburgerClose.onclick = function () {
  overlay.classList.add('hide');
  hamburgerOpen.classList.remove('hide');
};
