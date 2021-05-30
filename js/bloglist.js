const blogApi =
  'https://noroffcors.herokuapp.com/https://postal.one/wp-json/wp/v2/posts';
const fullApi =
  'https://noroffcors.herokuapp.com/https://postal.one/wp-json/wp/v2/posts?per_page=20';
const loading = document.querySelector('.loading');
const blogList = document.querySelector('.blogListContainer');
const readMoreBtn = document.querySelector('#readMoreBtn');
const readPage1Btn = document.querySelector('#backBtn');
const searchBar = document.querySelector('#blogSearch');
let blogListTags = '';
let fullBlogs = [];

async function getBlogAPI(url) {
  try {
    const response = await fetch(url);
    result = await response.json();
    getBlogCards(result);

    const fullResponse = await fetch(fullApi);
    fullBlogs = await fullResponse.json();
  } catch (error) {
    console.log(error);
    document.querySelector('.alert').innerHTML = showAlertTouser(
      "We couldn't find the blogs",
      'danger'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}
getBlogAPI(blogApi);

searchBar.onkeyup = (e) => {
  search = e.target.value.trim().toLowerCase();
  const sResultBlogs = fullBlogs.filter((blog) => {
    return blog.title.rendered.toLowerCase().includes(search);
  });
  getBlogCards(sResultBlogs);
};

function getBlogCards(result) {
  loading.innerHTML = ``;
  blogList.innerHTML = ``;
  result.forEach((element) => {
    blogList.innerHTML += `
        <div class="blogListCard">
          <div class="blogListCard__img blogListCard__img${element.id}"></div>
        <div class="blogListCard__text">
          <h3 class="blogListCard__text--header">${element.title.rendered}</h3>
          ${element.excerpt.rendered}
          <div class="blogListCard__text--bottom readMore">
            <p><a href="/blog_page.html?id=${element.id}">Read More...</a></p>
            <p>Author</p>
          </div>
          <div class="blogListCard__tags blogListCard__tags${element.id}">
          </div>
        </div>
      </div>
        `;
    document.querySelector(
      `.blogListCard__img${element.id}`
    ).style.backgroundImage = `url(${element.better_featured_image.source_url})`;

    getTags(element);
  });
}

readMoreBtn.onclick = function () {
  getBlogAPI(blogApi + `?page=2`);
  setTimeout(function () {
    readMoreBtn.classList.add('hide');
    readPage1Btn.classList.remove('hide');
  }, 1000);
};

readPage1Btn.onclick = function () {
  getBlogAPI(blogApi + `?page=1`);
  setTimeout(function () {
    readPage1Btn.classList.add('hide');
    readMoreBtn.classList.remove('hide');
  }, 1000);
};

const tagsArray = (value) => {
  value.tags.forEach(() => {
    console.log('hello');
  });
};
