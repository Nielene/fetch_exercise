document.addEventListener("DOMContentLoaded", () => {

let bigArrOfMovies;
let select = document.querySelector(".select");



fetch("https://ghibliapi.herokuapp.com/films/")
.then(response => {
  return response.json();
})
.then(response => {
  populateMovies(response);
  showMovieInformation(response)


  bigArrOfMovies = response;
})

//select.value - key into option directly.

function populateMovies(movie) {
  for (let i = 0; i < movie.length; i++) {
    // debugger;
    let option = document.createElement("option");
    option.innerText = movie[i].title;
    option.setAttribute("value",i);

    select.appendChild(option);
    // debugger
  }
}

  function showMovieInformation () {

    document.addEventListener("change", event => {

      let select = document.querySelector('select');
      let movies = bigArrOfMovies[select.value];

      // console.log(select.value, movies.title);

      let display = document.querySelector(".display");
      let content = document.querySelector(".content");

      // console.log("movies",movies);


      let titleHead = document.querySelector("#titleHead");
      let title = document.querySelector("#title");
      let directorHead = document.querySelector("#directorHead");
      let director = document.querySelector("#director");
      let descriptionHead = document.querySelector("#descriptionHead");
      let description = document.querySelector("#description");
      let rt_scoreHead = document.querySelector("#rt_scoreHead");
      let rt_score = document.querySelector("#rt_score");
      let release_dateHead = document.querySelector("#release_dateHead");
      let release_date = document.querySelector("#release_date");

      titleHead.innerText = "Title"
      title.innerText = movies.title;

      directorHead.innerText = "Director"
      director.innerText = movies.director;

      descriptionHead.innerText = "Description"
      description.innerText = movies.description;

      rt_scoreHead.innerText = "Rotten Tomatoes Score"
      rt_score.innerText = movies.rt_score;

      release_dateHead.innerText = "Release Date"
      release_date.innerText = movies.release_date;

    })

  }


// fetch("https://ghibliapi.herokuapp.com/films/")
//to get indiv movie . form the id value in selct. so on changing the select, (get new id?)

//-----

      // let keys = ["title", "director", "description", "rt_score", "release_date"]

      // movies.forEach(property => {
      //   content.innerText = movies[property];
      // })

      // for (let i = 0; i < movies.length; i++) {
      //   console.log("hello", movies.title);
      // }
//-------




})
