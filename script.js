const imageResult = document.getElementById('imageResult');
const button = document.getElementById('button');

button.addEventListener('click', getRandomDog)


// **create async function to await Promise, convert data to json
async function getRandomDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    .then(data => {
        imageResult.innerHTML = `<img id="image" img src="${data.message}"/>`
    })
    // console.log(data)
    return data
}


// // ***using data outside the function***
// getData().then(data => (data.message))
//     .catch(err => console.log('errors: ' + err.message));
    
   


