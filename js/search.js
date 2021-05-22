let finalSpaceArr = [];

const getData = async () => {
  try {
    const response = await fetch(
      'https://finalspaceapi.com/api/v0/character?limit=100'
    );
    const res = await response.json();
    finalSpaceArr = res;
    plotCards(finalSpaceArr);
  } catch (error) {
    console.log(error);
  }
};

getData();

document.querySelector('#search').onkeyup = (e) => {
  e.preventDefault();
  let filtered = finalSpaceArr.filter(({ name }) => {
    return (
      name
        .toLowerCase()
        .indexOf(document.getElementById('search').value.toLowerCase()) !== -1
    );
  });
  console.log(filtered);
  plotCards(filtered);
};

const plotCards = (charArray) => {
  const mainElm = document.querySelector('main');
  mainElm.innerHTML = ``;
  charArray.map(({ abilities, alias, hair = 'Blonde', id, img_url, name }) => {
    mainElm.innerHTML += `
                <div>
                    <h2>${name}</h2>
                    <img src="${img_url}" alt="${name}" />
                    <p>Hair color: ${hair}</p>
                    <div>
                        ${abilities
                          .map((value) => {
                            return `<span>${value}</span>`;
                          })
                          .join(' ')}
                    </div>
                    <div>
                    <h3>Aliases</h3>
                    ${alias
                      .map((value) => {
                        return `<span>${value}</span>`;
                      })
                      .join(' ')}
                    </div>
                    <a href="details.html?id=${id}">Read More</a>
                </div>
            `;
  });
};
