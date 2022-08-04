
// **create async function to await Promise, convert data to json
async function getData() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    // console.log(data)
    return data
    document.getElementById('image').textContent = image;
}


// ***using data outside the function***
getData().then(data => console.log(data.message))
    .catch(err => console.log('errors: ' + err.message));
    
   
