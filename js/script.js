const gameAPI =
  'https://noroffcors.herokuapp.com/http://postal.one/wp-json/wp/v2/posts/';
const loading = document.querySelector('.loading');
const FBlogs = document.querySelector('.feauturedContainer');

async function getGameAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    loading.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
      FBlogs.innerHTML += `
        <div class="featuredCard">
            <div class="imgBackground">
                <div class="featuredCard__tags">
                    <div class="featuredCard__tags--tag">Fitness</div>
                    <div class="featuredCard__tags--tag">Food</div>
                    <div class="featuredCard__tags--tag">Yoga</div>
                    <div class="featuredCard__tags--tag">Weightloss</div>
                </div>
            </div>
            <div class="featuredCard__text">
                <h3 class="featuredCard__text--tittel">Tittel</h3>
                <p>text</p>
                <p><a href="/blog_page.html?id=${result[i].id}">Read More...</a></p>
            </div>
        </div>
          `;
      if (i === 4) {
        break;
      }
    }
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
getGameAPI(gameAPI);

//Refractor and turn into code for page
