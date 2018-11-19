document.addEventListener("DOMContentLoaded", () => {

  let button = document.querySelector("button");
  let body = document.querySelector("body");
  let image = document.createElement("img");

  image.src = "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_13256.jpg";

  body.appendChild(image);


  function getRandomImage () {
    fetch("https://dog.ceo/api/breeds/image/random").then(response => {
      return response.json();
    }).then(res => {
      image.src = res.message
    })
  }

  button.addEventListener("click", getRandomImage)
      // getRandomImage()

})
