"use strict";

(async function () {
  let container = document.querySelector(`.show-container`);
  let search = document.querySelector(`.search`);
  let results = document.querySelector(`.search-container`);
  let details = document.querySelector(`.show-details`);
  let logo = document.querySelector(`.logo`);
  let h1 = document.querySelector(`h1`);

  async function top50() {
    let request = await fetch(`https://api.tvmaze.com/shows`);
    let unpack = await request.json();
    let top = unpack.sort((a, b) => a.rating.average < b.rating.average);
    top.length = 51;
    return unpack;
  }

  let top = top50();

  // console.log(await top);

  async function getByID(id) {
    let request = await fetch(`https://api.tvmaze.com/shows/${id}`);
    let unpack = await request.json();

    return unpack;
  }

  async function getSearch(query) {
    let request = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    let unpack = await request.json();

    return unpack;
  }

  async function card(item) {
    return `
<article class="col-4 p-1" id="${item.id}">
  <img
  class="w-100"
  src="${item.image?.medium}"
  alt="${item.name}"
  />
  <a href="" class="m-1"
  >${item.name}</a
  >
</article>
  `;
  }

  async function populate(json) {
    container.innerHTML = ``;
    let arr = Array.from(json);
    // console.log(arr);

    arr.forEach(async (el) => {
      // console.log(el);
      let temp = await card(el);
      container.innerHTML += temp;
    });
  }

  async function showDetails(id) {
    let item = await getByID(id);
    let seasons = await getByID(`${id}/seasons`);
    let cast = await getByID(`${id}/cast`);

    // console.log(cast);
    // console.log(seasons);

    let seasonList = seasons
      .map((el) => {
        return `
      <li>${el.premiereDate} - ${el.endDate}</li>
      `;
      })
      .join(`\n`);

    let castList = cast
      .map((el) => {
        return `
    <li>${el.person.name}</li>
    `;
      })
      .join(`\n`);

    // console.log(item);

    details.innerHTML = `
    <h2 class="m-4 ml-auto mr-auto justify-content-center">${item.name}</h2>
    <div class="d-flex flex-row">
      <img
        class="col-lg-5 offset-lg-2 col-md-7"
        src="${item.image.original}"
        alt="${item.name}"
      />
      <div>
        <h3 class="m-2">Seasons (${seasons.length})</h3>
        <ul class="m-2">
          ${seasonList}
        </ul>
        <h3 class="m-2">Cast</h3>
        <ul class="m-2">
          ${castList}
        </ul>
      </div>
    </div>
    <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12 mt-2 mb-2">
      <h3>Show Description</h3>
      <div class="mt-2 mb-2">
        ${item.summary}
      </div>
    </div>
    `;

    container.classList.add(`hidden`);
    details.classList.remove(`hidden`);
    results.innerHTML = ``;
  }

  populate(await top);

  container.addEventListener(`click`, (e) => {
    let id = e.target.closest(`article`).id;
    showDetails(id);
  });

  logo.addEventListener(`click`, async (e) => {
    h1.innerHTML = `Popular Shows`;
    populate(await top);
    container.classList.remove(`hidden`);
    details.classList.add(`hidden`);
  });

  search.addEventListener(`input`, async (e) => {
    let inp = e.target.value;
    let searchResults = await getSearch(inp);

    // let output = await searchResults.map(async (el) => {
    //   let name = await el.show.name;
    //   return `
    //   <div class="search-result ml-1 mr-1 pt-1 pb-1">
    //     ${await name}
    //   </div>
    //   `;
    // });

    let output = searchResults
      .map((el) => {
        return `
      <div class="search-result bg-light ml-1 mr-1 pt-1 pb-1" data-show-id="${el.show.id}">${el.show.name}</div>
      `;
      })
      .join(`\n`);

    let resultMap = searchResults.map((el) => el.show);

    populate(resultMap);

    results.innerHTML = output;

    h1.innerHTML = `Results:`;

    // let flat;
    // (flat = output.join(`\n`)).then(() => {
    //   results.innerHTML = flat;
    // });
  });

  results.addEventListener(`click`, async (e) => {
    let id = e.target.dataset.showId;

    showDetails(id);
    search.value = ``;
  });
})();
