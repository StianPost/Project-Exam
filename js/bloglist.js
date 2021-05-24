const blogApi =
  'https://noroffcors.herokuapp.com/http://postal.one/wp-json/wp/v2/posts';
const loading = document.querySelector('.loading');
const blogList = document.querySelector('.blogListContainer');

async function getBlogAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    getBlogCards(result);
  } catch (error) {
    console.log(error);
    document.querySelector('.alert').innerHTML = showAlertTouser(
      error,
      'danger'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}
getBlogAPI(blogApi);

function getBlogCards(result) {
  loading.innerHTML = ``;
  result.forEach((element) => {
    blogList.innerHTML += `
        <div class="blogListCard">
        <div class="blogListCard__img blogListCard__img${element.id}"></div>
        <div class="blogListCard__text">
          <h3 class="blogListCard__text--header">${element.title.rendered}</h3>
          ${element.excerpt.rendered}
          <div class="blogListCard__text--bottom">
            <p><a href="/blog_page.html?id=${element.id}">Read More...</a></p>
            <p>Author</p>
          </div>
          <div class="blogListCard__tags">
            <div class="blogListCard__tags--tag">Fitness</div>
            <div class="blogListCard__tags--tag">Food</div>
            <div class="blogListCard__tags--tag">Yoga</div>
            <div class="blogListCard__tags--tag">Weightloss</div>
          </div>
        </div>
      </div>
        `;
    document.querySelector(
      `.blogListCard__img${element.id}`
    ).style.backgroundImage = `url(${element.better_featured_image.source_url})`;
  });
}

const readMoreBtn = document.querySelector('#readMoreBtn');

readMoreBtn.onclick = function () {
  getBlogAPI(blogApi + `?page=2`);
  readMoreBtn.innerHTML = `<img src="/img/Blocks-1.5s-200px.gif" alt="loading gif" />`;
  setTimeout(function () {
    readMoreBtn.innerHTML = ``;
  }, 1000);
};
