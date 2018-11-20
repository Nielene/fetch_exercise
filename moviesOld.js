
document.addEventListener("DOMContentLoaded", () => {
  // let $ = document;
  let filmList;
  let ul;
  let li;
  let display = document.createElement("div");
  display.classList.add("display");

  let title = document.querySelector("#title");
  let director = document.querySelector("#director");
  let description = document.querySelector("#description");
  let rt_score = document.querySelector("#rt_score");
  let release_date = document.querySelector("#release_date");
  let content = document.querySelectorAll(".content")

  createAndAppendSelect();
  fetchAndMakeFilmList();


  function showInfo() {
    document.addEventListener("change", event => {

      let select = document.querySelector('select');
      let movies = filmList[select.value]
      console.log(select.value, movies.title)
      let body = document.querySelector("body");

      ul = document.createElement("ul");

      let keys = ["title", "director", "description", "rt_score", "release_date"]

        while(ul.firstChild) {
          ul.removeChild(ul.firstChild)
}

      keys.forEach(property => {
debugger
        content.innerText = property.toUpperCase() + ": " + movies[property];

        })

      display.appendChild(content);
      body.appendChild(display);

    });
  }

  fetch("https://ghibliapi.herokuapp.com/films/")
    .then(response => {
      // console.log(response)
      return response.json();
    })
    .then(res => {
      showInfo();
    });


function createAndAppendSelect () {
  let body = document.querySelector("body");
  let form = document.createElement("form");
  let select = document.createElement("select");
  let firstOption = document.createElement("option");

  firstOption.innerText = "Movies";
  select.id = "movies";
  select.appendChild(firstOption);
  form.appendChild(select);
  body.appendChild(form)
};


function createAndAppendOptions (movie){
  let select = document.querySelector("select");

  for (let i = 0; i < movie.length; i++) {
    // console.log(movie[i]);
    // console.log(movie[i].title);
    let option = document.createElement("option");
    option.value = i;
    option.innerText = movie[i].title;
    select.appendChild(option);
  }
};


function fetchAndMakeFilmList() {
  fetch("https://ghibliapi.herokuapp.com/films/")
    .then(response => {
      return response.json();
    })
    .then(res => {
      filmList = res;
      console.log(filmList);

      createAndAppendOptions(res);
    });
  // console.log(res);
  // console.log(option.innerText = res.title);
}

});
