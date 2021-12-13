import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', asncy() => {
    // fetch all dogs
    const dogs = await getDogs();

    // render and append all dog cards to the container
    for (let dog of dogs) {
        renderDogCard();
        
        dogListContainer.append(dogs);

    }



});

