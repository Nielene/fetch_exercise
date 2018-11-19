document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random").then(response => {
    return response.json();
  }).then(parsedRes) => {

  }


  let button = document.querySelector("button");
  let xhr = new XMLHttpRequest();
  let body = document.querySelector("body");
  let image = document.createElement("img");
  let dogObj;
  image.setAttribute("src", "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_13256.jpg");
  let src = image.getAttribute("src")
  console.log(src);

  body.appendChild(image);


  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status === 200) {
  //       dogObj = JSON.parse(xhr.response);
  //
  //       image.src = dogObj.message;
  //       if (xhr.status === 0) {
  //         body.appendChild(image);
  //       } else if (xhr.status > 0) {
  //         document.querySelector(image).replaceChild(image.src, image)
  //       }
  //     }
  //   }
  // }


  function getRandomImage () {
    // xhr.open("get", "https://dog.ceo/api/breeds/image/random", true)
    // xhr.send()

    // fetch("https://dog.ceo/api/breeds/image/random").then(response => {
    //   debugger;
    // })
  }


  button.addEventListener("click", (event) => {
      getRandomImage()
  })

})
