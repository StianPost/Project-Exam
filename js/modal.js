const imgModal = document.querySelectorAll('.modalImg');
const imgModalBig = document.querySelector('.modalImgBig');
const modalOverlay = document.querySelector('.modal');

imgModal.forEach((element) => {
  element.onclick = () => {
    modalOverlay.classList.remove('hide');
  };
});

window.onclick = function (event) {
  if (event.target === modalOverlay || event.target === imgModalBig) {
    modalOverlay.classList.add('hide');
  }
};
