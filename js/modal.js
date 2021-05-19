const imgModal = document.querySelectorAll('.modalImg');
const modalOverlay = document.querySelector('.modal');

imgModal.forEach((element) => {
  element.onclick = () => {
    modalOverlay.classList.remove('hide');
  };
});

window.onclick = function (event) {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add('hide');
  }
};
