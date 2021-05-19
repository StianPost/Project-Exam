//Make a proper module, not the garbage thing you made before

// const allImages = document.querySelectorAll('img');
// const modal = document.querySelector('.modal');
// const modalInner = document.querySelector('.modal-content');

// allImages.forEach((element) => {
//   element.onclick = () => {
//     console.log(element.src);
//     modal.style.display = 'block';
//     modalInner.style.backgroundImage = `url('${element.src}')`;
//   };
// });

// const closeModal = () => {
//   modal.style.display = 'none';
// };

// document.querySelector('.close').onclick = () => {
//   closeModal();
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     console.log('I ran');
//     closeModal();
//   }
// };

// The Old One

const imgModal = document.querySelectorAll('.modalImg');
const imgModalBig = document.querySelector('.modalImgBig');
const modalOverlay = document.querySelector('.modal');

imgModal.forEach((element) => {
  element.onclick = () => {
    modalOverlay.classList.remove('hide');
  };
});

window.onclick = function (event) {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add('hide');
    console.log('hello I am hiding');
  }
};
