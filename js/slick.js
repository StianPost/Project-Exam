function slickCarusell() {
  $('.blogs').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 3,
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
      'https://noroffcors.herokuapp.com/http://postal.one/wp-json/wp/v2/posts/'
    );
    const results = await response.json();
    document.querySelector('.loading').innerHTML = ``;
    for (let i = 0; i < results.length; i++) {
      if (
        results[i].better_featured_image.media_details.sizes.thumbnail
          .source_url
      ) {
        document.querySelector('#carusell').innerHTML += `
            <div class="carouselCard">
                <a class="carouselLink" href="/blog_page.html/${results[i].id}">
                    <img src="${results[i].better_featured_image.media_details.sizes.thumbnail.source_url}">
                    <div class="content">
                        <h3 class="carouselHead">${results[i].title.rendered}</h3>
                    </div>
                </a>
            </div>
            `;
      } else {
        document.querySelector('#carusell').innerHTML += `
            <div class="carouselCard">
                <div class="content">
                    <h3>${results[i].title.rendered}</h3>
                </div>
            </div>
            `;
      }
      if (i === 6) {
        break;
      }
    }
    // Initialize blogpost section with the latest(0) entry
    slickCarusell();
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      `Couldn't find blogs`,
      'danger'
    );
  } finally {
  }
}

getBlogAPI();
