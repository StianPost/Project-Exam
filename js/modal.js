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

// document.querySelector(
//   '.blogImgBig'
// ).style.backgroundImage = `url(${result.better_featured_image.source_url})`;

// document.querySelector('#popupOpen').onclick = function () {
//   document.querySelector('.blogImgBig').classList.remove('hide');
// };
// document.querySelector('#popupClose').onclick = function () {
//   document.querySelector('.blogImgBig').classList.add('hide');
// };

const imgModal = document.querySelectorAll('.modalImg');

imgModal.forEach((element) => {
  element.onclick = () => {
    console.log('hello');
  };
});
