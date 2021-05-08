// // get the query string
// const queryString = document.location.search;
// // create an object that will allows us to access all the query string parameters
// const params = new URLSearchParams(queryString);
// // get the id parameter from the query string
// const id = params.get('id');
// const animeDiv = document.querySelector('.animeDiv');

// const loading = document.querySelector('.loading');

// async function getAnime(animeID) {
//   try {
//     const response = await fetch('https://kitsu.io/api/edge/anime/' + animeID);
//     const result = await response.json();
//     const anime = result.data;
//     let title = anime.attributes.titles.en;
//     let nsfw = 'SFW?';
//     let isNSFW = anime.attributes.nsfw;
//     loading.innerHTML = '';
//     console.log(anime);

//     if (!title) {
//       title = anime.attributes.titles.en_jp;
//     }
//     if (isNSFW) {
//       nsfw = 'NSFW!';
//     }
//     document.title = title;

//     animeDiv.innerHTML = `
//       <h1>${title}</h1>
//       <div class="animeUpperCard">
//         <div>
//           <img class="animeImg" src="${anime.attributes.posterImage.original}" alt="${anime.attributes.titles.en} Cover image" />
//         </div>
//         <div class="animeInfo">
//           <p><span>Rating: </span>${anime.attributes.averageRating}/100</p>
//           <p><span>Episodes: </span>${anime.attributes.episodeCount}</p>
//           <p><span>Type: </span>${anime.attributes.subtype}</p>
//           <p><span>Age Rating: </span>${anime.attributes.ageRating}</p>
//           <p>${anime.attributes.ageRatingGuide}</p>
//           <p>${nsfw}</p>
//           <p><span>Started: </span>${anime.attributes.startDate}</p>
//           <p><span>Ended: </span>${anime.attributes.endDate}</p>
//           <p><span>Status: </span>${anime.attributes.status}</p>
//         </div>
//       </div>
//       <h2> Synopsis </h2>
//       <p class="synopsis">${anime.attributes.synopsis} </p>
//     `;
//   } catch (error) {
//     console.log(error);
//     document.querySelector('.alert').innerHTML = showAlertTouser(
//       'An error occured',
//       'danger'
//     );
//   } finally {
//     setTimeout(function () {
//       document.querySelector('.alert').innerHTML = '';
//     }, 3000);
//   }
// }
// getAnime(id);

// Refract this code to fit blog format
