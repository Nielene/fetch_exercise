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
      titleHead.innerHTML = "Title"
      title.innerHTML = movie[i].title;
      directorHead.innerHTML = "Director"
      director.innerHTML = movie[i].director;
      descriptionHead.innerHTML = "Description"
      description.innerHTML = movie[i].description;
      rt_scoreHead.innerHTML = "Rotten Tomatoes Score"
      rt_score.innerHTML = movie[i].rt_score;
      release_dateHead.innerHTML = "Release Date"
      release_date.innerHTML = movie[i].release_date;



      // debugger

      // for (let i = 0; i < movie.length; i++) {
      //
      // }

    })

  }


fetch("https://ghibliapi.herokuapp.com/films/")
//to get indiv movie . form the id value in selct. so on changing the select, (get new id?)





})
