const gameAPI =
  'https://noroffcors.herokuapp.com/http://postal.one/wp-json/wc/store/products';
const loading = document.querySelector('.loading');
const FGames = document.querySelector('.featuredGames');

async function getGameAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    loading.innerHTML = '';

    FGames.innerHTML = `
      <div class="gameCard cardMain">
        <a href="game-page.html?id=${result[0].id}">
          <img class="gameCardImg" src="${result[0].images[0].src}" alt="Image of ${result[0].name}"/>
        </a>
      </div>
      <div class="gameCards">
      </div>
      `;
    for (let i = 1; i < 7; i++) {
      console.log([i]);
      document.querySelector('.gameCards').innerHTML += `
      <div class="gameCard Card${[i]}">
        <a href="game-page.html?id=${result[i].id}">
          <img class="gameCardImg" src="${
            result[i].images[0].src
          }" alt="Image of ${result[i].name}"/>
        </a>
      </div>
      `;
    }
    for (let i = 4; i < 8; i++) {
      console.log([i]);
      document.querySelector('.recommended').innerHTML += `
      <div class="recommendedCard">
        <a class="recommendedIMG" href="game-page.html?id=${result[i].id}">
          <img class="recommendedIMG" src="${result[i].images[0].src}" alt="Image of ${result[i].name}"/>
        </a>
      </div>
      `;
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
