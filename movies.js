document.addEventListener("DOMContentLoaded", () => {

  let body = document.querySelector("body");
  // let option = document.querySelector("option");
  let form = document.querySelector("form");
  let select = document.createElement("select");
  let ul = document.createElement("ul")

  // select.innerHTML = "option"
  let firstOption = document.createElement('option')
  firstOption.innerText = ''
  select.appendChild(firstOption)
  form.appendChild(select);
  body.appendChild(ul);

  select.title = "Movies";

  console.log(select);


  function getMovie () {
    fetch("https://ghibliapi.herokuapp.com/films/").then(response => {
      console.log(response)
      return response.json();
    }).then(res => {

      for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
        console.log(res[i].title);
        let option = document.createElement("option")
        option.innerText = res[i].title;
        select.appendChild(option);
      }
      // console.log(res);
      // console.log(option.innerText = res.title);
    })
  }
  getMovie()




})
