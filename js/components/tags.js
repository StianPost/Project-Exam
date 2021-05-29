function getTags(element) {
  let category = document.querySelector(`.blogListCard__tags${element.id}`);

  element.categories.forEach((value) => {
    if (value === 31) {
      category.innerHTML += `<div class="blogListCard__tags--tag">Fitness</div>`;
    }
    if (value === 40) {
      category.innerHTML += `<div class="blogListCard__tags--tag">Weightloss</div>`;
    }
    if (value === 38) {
      category.innerHTML += `<div class="blogListCard__tags--tag">Food</div>`;
    }
    if (value === 39) {
      category.innerHTML += `<div class="blogListCard__tags--tag">Yoga</div>`;
    }
  });
}

function getTagsIndex(element) {
  let category = document.querySelector(`.tags${element.id}`);

  element.categories.forEach((value) => {
    if (value === 31) {
      category.innerHTML += `<div class="featuredCard__tags--tag">Fitness</div>`;
    }
    if (value === 40) {
      category.innerHTML += `<div class="featuredCard__tags--tag">Weightloss</div>`;
    }
    if (value === 38) {
      category.innerHTML += `<div class="featuredCard__tags--tag">Food</div>`;
    }
    if (value === 39) {
      category.innerHTML += `<div class="featuredCard__tags--tag>Yoga</div>`;
    }
  });
}
