const imageResult = document.getElementById("imageResult");
const button = document.getElementById("button");

const imageResult1 = document.getElementById("imageResult1");
const button1 = document.getElementById("button1");

const imageResult2 = document.getElementById("imageResult2");
const button2 = document.getElementById("button2");

button.addEventListener("click", getRandomDog);
button1.addEventListener("click", getRandomFox);
button2.addEventListener("click", getRandomCat);

// **create async function to await Promise, convert data to json
async function getRandomDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json().then((data) => {
    console.log(data);
    imageResult.innerHTML = `<img id="image" img src="${data.message}"/>`;
  });

  return data;
}

async function getRandomFox() {
  const response = await fetch("https://randomfox.ca/?i=120");
  const data = await response.json().then((data) => {
    console.log(data);
    imageResult1.innerHTML = `<img id="image1" img src="${data.link}"/>`;
  });

  return data;
}

async function getRandomCat() {
  const response = await fetch("https://aws.random.cat/meow");
  const data = await response.json().then((data) => {
    console.log(data);
    imageResult2.innerHTML = `<img id="image2" img src="${data.file}"/>`;
  });

  return data;
}
