let id_map = [];

function reinitSlickBlogs() {
  $('.blogs').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
}

async function getPosts() {
  try {
    const response = await fetch('http://postal.one/wp-json/wp/v2/posts/');
    const results = await response.json();
    let i = 0;
    results.forEach(function (value) {
      id_map[i++] = value.id;
      console.log(value.id);
      if (
        value.better_featured_image.media_details.sizes.thumbnail.source_url
      ) {
        document.querySelector('#blogs').innerHTML += `
            <div class="slide">
                <a href="/blog_page.html${results.id}"
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
                    <h2>${value.title.rendered}</h2>
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

$(document).on('ready', function () {
  $('.regular').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $('.center').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 3,
  });
  $('.lazy').slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
  });
  // On before slide change, whenever slider is moved redraw current post selected
  $('.blogs').on('afterChange', function (event, slick, currentSlide) {});
});
