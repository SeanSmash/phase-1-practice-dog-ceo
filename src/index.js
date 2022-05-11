var filterLetter;

function fetchDogImages(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(data => renderImages(data.message))
}
fetchDogImages()

function renderImages(array){
    array.forEach(dog =>{
    const image = document.createElement('img')
    image.src = dog
    image.width = 200
    image.height = 200
    document.getElementById('dog-image-container').append(image)
    })
}

function fetchDogBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => addDogBreeds(data.message))
}

fetchDogBreeds()

function addDogBreeds(dogBreeds){
    for(const dog in dogBreeds){
        const breedList = document.querySelector('#dog-breeds')
        const breed = document.createElement('li')
        breed.innerText = dog
        breed.id = 'dog-breed'
        breedList.append(breed)
        breed.addEventListener('click', function(){
            breed.style = "color: blue"
        })
    }
}

const breedDropDown = document.querySelector("#breed-dropdown")
breedDropDown.addEventListener('input', e =>{
    filterLetter = e.target.value
    removeList()
    fetchForFilterDogBreeds()
})

function removeList(){
    let breed = document.querySelector("#dog-breeds")
    while (breed.firstChild){
    breed.removeChild(breed.firstChild)
    }

}

function fetchForFilterDogBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => addFilteredDogBreeds(data.message))
}

function addFilteredDogBreeds(dogBreedsForFilter){
    for(const dog in dogBreedsForFilter){
        const newDog = dog.toString()
        if (newDog.charAt(0) === filterLetter){
        const breedList = document.querySelector('#dog-breeds')
        const breed = document.createElement('li')
        breed.innerText = dog
        breed.id = 'dog-breed'
        breedList.append(breed)
        breed.addEventListener('click', function(){
            breed.style = "color: blue"
        })
    }
    }
}