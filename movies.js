let $ = document;
let filmList;

$.addEventListener("DOMContentLoaded", () => {
  createAndAppendSelect();
  getMovie();

  function showInfo() {
    $.addEventListener("change", event => {
      // console.log(filmList);
      let s = $.querySelector('select');
      let m = filmList[s.value]
      console.log(s.value, m.title)
      let body = $.querySelector("body");

      let display = $.createElement("div");
      display.classList.add("display");

      let ul = $.createElement("ul");

      let props = ["title", "director", "description", "rt_score", "release_date"]
      props.forEach(prop => {
        let li = $.createElement("li");
        li.innerText = m[prop]
        ul.appendChild(li);

      })

      display.appendChild(ul);
      body.appendChild(display);
      // debugger
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
});

const createAndAppendSelect = () => {
  // let body = $.querySelector("body");
  let form = $.querySelector("form");
  let select = $.createElement("select");
  let firstOption = $.createElement("option");

  firstOption.innerText = "Movies";
  select.id = "movies";
  select.appendChild(firstOption);
  form.appendChild(select);
};

const showMovieInfoVariables = () => {

};

function getMovie() {
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

const createAndAppendOptions = movie => {
  showMovieInfoVariables();
  let select = $.querySelector("select");
  for (let i = 0; i < movie.length; i++) {
    // console.log(movie[i]);
    // console.log(movie[i].title);
    let option = $.createElement("option");
    option.value = i;
    option.innerText = movie[i].title;
    select.appendChild(option);
  }
};
