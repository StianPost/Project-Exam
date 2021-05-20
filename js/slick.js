function slickCarusell() {
  $('.blogs').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
}

async function getBlogAPI() {
  try {
    const response = await fetch(
      'https://noroffcors.herokuapp.com/https://postal.one/wp-json/wp/v2/posts/'
    );
    const results = await response.json();
    for (let i = 0; i < results.length; i++) {
      if (
        results[i].better_featured_image.media_details.sizes.thumbnail
          .source_url
      ) {
        document.querySelector('#carusell').innerHTML += `
            <div class="carouselCard">
                <a class="carouselLink" href="/blog_page.html?id=${results[i].id}">
                    <div class="carouselImg carouselImg${results[i].id}"></div>
                    <div class="content">
                        <h3 class="carouselHead">${results[i].title.rendered}</h3>
                    </div>
                </a>
            </div>
            `;
        document.querySelector(
          `.carouselImg${results[i].id}`
        ).style.backgroundImage = `url("${results[i].better_featured_image.source_url}")`;
      } else {
        document.querySelector('#carusell').innerHTML += `
            <div class="carouselCard">
              <a class="carouselLink" href="/blog_page.html?id=${results[i].id}">
                  <div class="content">
                      <h3>${results[i].title.rendered}</h3>
                  </div>
                </a>
            </div>
            `;
      }
      if (i === 6) {
        break;
      }
    }
    slickCarusell();
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      `Sorry, couldn't find blog posts`,
      'danger'
    );
  } finally {
    document.querySelector('.loading').innerHTML = ``;
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = ``;
    }, 3000);
  }
}

getBlogAPI();
