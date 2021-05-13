// get the query string
const queryString = document.location.search;
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
// get the id parameter from the query string
const id = params.get('id');

const blogContent = document.querySelector('.blogFiller');

const loading = document.querySelector('.loading');

async function getBlog(blogID) {
  try {
    const response = await fetch(
      'https://noroffcors.herokuapp.com/https://postal.one/wp-json/wp/v2/posts/' +
        blogID
    );
    const result = await response.json();

    let title = result.title.rendered;
    document.title = title + ` - Postal Fitness`;

    blogContent.innerHTML = `
    <div class="blogContent__header">
        <h1>${result.title.rendered}</h1>
        <div>Date | Author | Comments (0)</div>
    </div>
        <div class="blogContent__upper">
        ${result.content.rendered}
        </div>
    </div>
    <div class="blogImgBig hide">
    <i class="far fa-window-close" id="popupClose"></i>
  </div>
    <div class="blogContent__bottom">
        <div class="blogImg" id="popupOpen">
        </div>
        <div>
            <h2 class="blogContent__bottom--header">2nd tittel</h2>
            <div class="blogContent__bottom--text">${result.excerpt.rendered}</div>
        </div>
    </div>
    `;
    document.querySelector(
      '.heroBlog'
    ).style.backgroundImage = `url(${result.better_featured_image.source_url})`;
    document.querySelector(
      '.blogImg'
    ).style.backgroundImage = `url(${result.better_featured_image.source_url})`;
    document.querySelector(
      '.blogImgBig'
    ).style.backgroundImage = `url(${result.better_featured_image.source_url})`;

    document.querySelector('#popupOpen').onclick = function () {
      document.querySelector('.blogImgBig').classList.remove('hide');
    };
    document.querySelector('#popupClose').onclick = function () {
      document.querySelector('.blogImgBig').classList.add('hide');
    };
  } catch (error) {
    console.log(error);
    document.querySelector('.alert').innerHTML = showAlertTouser(
      `Couldn't find blog`,
      'danger'
    );
  } finally {
    setTimeout(function () {
      // document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}
getBlog(id);
