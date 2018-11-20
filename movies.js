let $ = document;
$.addEventListener("DOMContentLoaded", () => {

  createAndAppendSelect()

  getMovie()




  function showInfo() {
    $.addEventListener("change", (event) => {
      div; display; ul; li;

      // debugger
      body.appendChild(div);
      // debugger
      div.appendChild(ul);
      // display.appendChild(ul);
      // debugger
      li.innerText = res.title;
      li.innerText = res.director;
      li.innerText = res.description;
      li.innerText = res.rt_score;
      li.innerText = res.release_date;
      // debugger
      ul.appendChild(li);


    })
  }




  fetch("https://ghibliapi.herokuapp.com/films/").then(response => {
    // console.log(response)
    return response.json();
  }).then(res => {
    showInfo()

  })

})

const createAndAppendSelect=()=>{
  let body = $.querySelector("body");
  let form = $.querySelector("form");
  let select = $.createElement("select");
  let firstOption = $.createElement('option');

  firstOption.innerText = 'Movies'
  select.id = "movies";
  select.appendChild(firstOption)
  form.appendChild(select);
}

const showMovieInfoVariables = () => {
  let div = $.createElement("div");
  div.classList.add("display");
  let display = $.querySelector(".display");
  let ul =$.createElement("ul");
  let li =$.createElement("li");
}


function getMovie () {
  fetch("https://ghibliapi.herokuapp.com/films/")
  .then(response => {
    console.log(response)
    return response.json();
  }).then(res => {
    createAndAppendOptions(res);
  })
    // console.log(res);
    // console.log(option.innerText = res.title);
  }


const createAndAppendOptions = movie => {
  showMovieInfoVariables();
  let select = $.querySelector('select');
  for (let i = 0; i < movie.length; i++) {
    console.log(movie[i]);
    // console.log(movie[i].title);
    let option = $.createElement("option")
    option.innerText = movie[i].title;
    select.appendChild(option);
  }
}
