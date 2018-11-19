document.addEventListener("DOMContentLoaded", () => {

  let button = document.querySelector("button");
  let body = document.querySelector("body");
  let image = document.createElement("img");
  let src = image.getAttribute("src")

  image.setAttribute("src", "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_13256.jpg");

  let dogObj;
  let response;
  let parsedRes;
  console.log(src);

  body.appendChild(image);



  function getRandomImage () {
    fetch("https://dog.ceo/api/breeds/image/random").then(response => {
      return response.json();
      debugger;
    }).then(parsedRes => {
      // if (parsedRes) {
        // body.appendChild(image);
      // } else
      if (parsedRes) {
        // body.appendChild(image);
        // document.querySelector(image).replaceChild(image.src, image)
        document.querySelector(image).replaceChild(image.src, parsedRes.message)

      }
      console.log(parsedRes.message);
      // console.log(response);
    })

    // image.src = dogObj.message;

  }


  button.addEventListener("click", getRandomImage)
      // getRandomImage()



})
