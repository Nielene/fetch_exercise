// let $ = document;
let filmList;
let ul;
let li;
let display = document.createElement("div");
display.classList.add("display");
let title = document.querySelector(".title");
let director = document.querySelector(".director");
let description = document.querySelector(".description");
let rt_score = document.querySelector(".rt_score");
let release_date = document.querySelector(".release_date");

document.addEventListener("DOMContentLoaded", () => {
  createAndAppendSelect();
  fetchAndMakeFilmList();


  function showInfo() {
    document.addEventListener("change", event => {
      // console.log(filmList);
      let select = document.querySelector('select');
      let movies = filmList[select.value]
      console.log(select.value, movies.title)
      let body = document.querySelector("body");
      // body.removeChild(display);
      // let display = document.createElement("div");
      // display.classList.add("display");

      ul = document.createElement("ul");

      let keys = ["title", "director", "description", "rt_score", "release_date"]
      // let placeKeys;
      // let li;

        // // debugger
        // ul.removeChild(li);
        // // debugger
        // ul.appendChild(li)
      // if(display.firstChild){}
        // let placeKeys =
while(ul.firstChild) {
  // console.log(ul.firstChild);
  ul.removeChild(ul.firstChild)
}

      keys.forEach(property => {
           //if(ul.firsChild)
          // if (ul.innerHTML) {


        title.innerText = property.toUpperCase() + ": " + movies[property];

            // li = document.createElement("li");
            // li.innerText = property.toUpperCase() + ": " + movies[property]
            // // console.log(property);
            //
            //
            // // ul.removeChild(li)
            // ul.appendChild(li);



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


const createAndAppendOptions = movie => {
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
