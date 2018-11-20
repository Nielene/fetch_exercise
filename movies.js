document.addEventListener("DOMContentLoaded", () => {

  let body = document.querySelector("body");
  // let option = document.querySelector("option");
  let form = document.querySelector("form");
  let select = document.createElement("select");
  let firstOption = document.createElement('option');
  let div = document.createElement("div");


  firstOption.innerText = ''
  select.appendChild(firstOption)
  form.appendChild(select);
  body.appendChild(div);
  div.classList.add("display");

  // ul.appendChild(li);

  select.title = "Movies";


  function getMovie () {
    fetch("https://ghibliapi.herokuapp.com/films/").then(response => {
      console.log(response)
      return response.json();
    }).then(res => {

      for (let i = 0; i < res.length; i++) {
        // console.log(res[i]);
        // console.log(res[i].title);
        let option = document.createElement("option")
        option.innerText = res[i].title;
        select.appendChild(option);
      }
      // console.log(res);
      // console.log(option.innerText = res.title);
    })
  }
  getMovie()


  function showInfo() {
    fetch("https://ghibliapi.herokuapp.com/films/").then(response => {
      // console.log(response)
      return response.json();
    }).then(res => {

      let ul = document.createElement("ul");
      let li = document.createElement("li")

      for (let i = 0; i < res.length; i++) {
        li.innerText = res[i].title

        ul.appendChild(li);
        body.appendChild(ul);

    }
    console.log(ul);


    })
  }


  document.addEventListener("click", (event) => {
    showInfo()

  })




})
