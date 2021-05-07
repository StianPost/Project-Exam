let id_map = [];

function reinitSlickBlogs() {
  $('.blogs').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });
}

async function getPosts() {
  try {
    const response = await fetch(
      'https://noroffcors.herokuapp.com/http://postal.one/wp-json/wp/v2/posts/'
    );
    const results = await response.json();
    let i = 0;
    document.querySelector('.loading').innerHTML = ``;
    results.forEach(function (value) {
      id_map[i++] = value.id;
      console.log(value.id);
      if (
        value.better_featured_image.media_details.sizes.thumbnail.source_url
      ) {
        document.querySelector('#blogs').innerHTML += `
            <div class="slide">
                <a href="/blog_page.html">
                    <img src="${value.better_featured_image.media_details.sizes.thumbnail.source_url}">
                    <div class="content">
                        <h3>${value.title.rendered}</h3>
                    </div>
                </a>
            </div>
            `;
      } else {
        document.querySelector('#blogs').innerHTML += `
            <div class="slide">
                <div class="content">
                    <h3>${value.title.rendered}</h3>
                </div>
            </div>
            `;
      }
    });
    // Initialize blogpost section with the latest(0) entry
    reinitSlickBlogs();
  } catch (error) {
    //document.querySelector('.alert').innerHTML += showAlertTouser(
    //    'An error occured',
    //    'danger'
    //);
  } finally {
    //document.querySelector('.section.loading').classList.add('hide');
  }
}
// Get blog posts for slider
getPosts();
