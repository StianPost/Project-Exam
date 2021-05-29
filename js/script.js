const gameAPI =
  'https://noroffcors.herokuapp.com/https://postal.one/wp-json/wp/v2/posts/';
const loading = document.querySelector('.loading');
const FBlogs = document.querySelector('.feauturedContainer');

async function getBlogAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    loading.innerHTML = '';

    getBlogCards(result);
  } catch (error) {
    console.log(error);
    document.querySelector('.alert').innerHTML = showAlertTouser(
      "Can't find blogs",
      'danger'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}
getBlogAPI(gameAPI);

function getBlogCards(result) {
  for (let i = 0; i < result.length; i++) {
    FBlogs.innerHTML += `
      <div class="featuredCard">
          <div class="imgBackground imgBackground${[i]}">
              <div class="featuredCard__tags tags${result[i].id}">
              </div>
          </div>
          <div class="featuredCard__text">
              <h3 class="featuredCard__text--tittel">${
                result[i].title.rendered
              }</h3>
              <p>${result[i].excerpt.rendered}</p>
              <p><a href="/blog_page.html?id=${
                result[i].id
              }">Read More...</a></p>
          </div>
      </div>
        `;
    document.querySelector(
      `.imgBackground${[i]}`
    ).style.backgroundImage = `url(${result[i].better_featured_image.source_url})`;
    getTagsIndex(result[i]);
    if (i === 3) {
      break;
    }
  }
}
