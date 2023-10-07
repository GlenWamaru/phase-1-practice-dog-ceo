// Define the URL for fetching dog breeds
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// Define the URL for fetching dog images
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

// Function to fetch and display dog breeds on page load
function fetchAndDisplayDogBreeds() {
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breedList = document.getElementById('dog-breeds');

      // Iterate through the object with breed names
      for (const breed in data.message) {
        const listItem = document.createElement('li');
        listItem.textContent = breed;
        breedList.appendChild(listItem);
      }
    })
    .catch((error) => console.error('Error fetching dog breeds:', error));
}

// Function to fetch and display dog images on page load
function fetchAndDisplayDogImages() {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.getElementById('dog-image-container');

      // Iterate through the array of dog image URLs
      data.message.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        imageContainer.appendChild(img);
      });
    })
    .catch((error) => console.error('Error fetching dog images:', error));
}

// Call the functions on page load
window.addEventListener('load', fetchAndDisplayDogBreeds);
window.addEventListener('load', fetchAndDisplayDogImages);

// Function to change font color of the clicked breed
function changeFontColor(event) {
  const listItem = event.target;
  listItem.style.color = 'red'; // You can choose any color you like
}

// Add a click event listener to the breed list
const breedList = document.getElementById('dog-breeds');
breedList.addEventListener('click', changeFontColor);

// Function to filter breeds by starting letter
function filterBreedsByLetter(letter) {
  const breeds = breedList.getElementsByTagName('li');

  for (const breed of breeds) {
    const breedName = breed.textContent.toLowerCase();
    if (breedName.startsWith(letter)) {
      breed.style.display = 'block';
    } else {
      breed.style.display = 'none';
    }
  }
}

// Add a change event listener to the dropdown
const dropdown = document.getElementById('breed-dropdown');
dropdown.addEventListener('change', function () {
  const selectedLetter = dropdown.value;
  filterBreedsByLetter(selectedLetter);
});

console.log('%c HI', 'color: firebrick');

