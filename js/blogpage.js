const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const blogContentTop = document.querySelector('.blogFillerTop');
const blogContentBot = document.querySelector('.blogFillerBot');
const loading = document.querySelector('.loading');

async function getBlog(blogID) {
  try {
    const response = await fetch(
      'https://noroffcors.herokuapp.com/https://postal.one/wp-json/wp/v2/posts/' +
        blogID
    );
    const result = await response.json();
    getCard(result);
  } catch (error) {
    console.log(error);
    document.querySelector('.alert').innerHTML = showAlertTouser(
      `Couldn't find blog`,
      'danger'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}
getBlog(id);

function getCard(result) {
  let title = result.title.rendered;
  document.title = title + ` - Postal Fitness`;

  document
    .querySelector('meta[name="description"]')
    .setAttribute(
      'content',
      `This blogpage on postalfitness is about ${title}`
    );

  blogContentTop.innerHTML = `
  <div class="blogContent__header">
      <h1>${result.title.rendered}</h1>
      <div>Date | Author | Comments (0)</div>
  </div>
      <div class="blogContent__upper">
        ${result.content.rendered}
      </div>
  </div>
  `;

  blogContentBot.innerHTML = `
  <h2 class="blogContent__bottom--header">2nd tittel</h2>
  <div class="blogContent__bottom--text">${result.excerpt.rendered}</div>
  `;

  document.querySelector(
    '.heroBlog'
  ).style.backgroundImage = `url(${result.better_featured_image.source_url})`;
  document.querySelector(
    '.blogImg'
  ).style.backgroundImage = `url(${result.better_featured_image.source_url})`;
  document.querySelector(
    '.modalImgBig'
  ).innerHTML = `<img class="modalImgImg" src="${result.better_featured_image.source_url}" alt=""></img>`;
}
