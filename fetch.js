document.addEventListener("DOMContentLoaded", () => {

  let button = document.querySelector("button");
  let body = document.querySelector("body");
  let image = document.createElement("img");
  // let src = image.getAttribute("src")


  image.src = "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_13256.jpg";

  let dogObj;
  let response;
  let res;


  body.appendChild(image);



  function getRandomImage () {
    fetch("https://dog.ceo/api/breeds/image/random").then(response => {
      return response.json();
    }).then(res => {
      image.src = res.message

    })

    // image.src = dogObj.message;

  }


  button.addEventListener("click", getRandomImage)
      // getRandomImage()



})
