import {
  GET_ALL_BREEDS,
  GET_SUBBREEDS_FOR_BREED,
  GET_IMAGES_FOR_BREED,
  GET_IMAGES_FOR_SUBBREAD } from './actions.js';

const initDrogoState = {

}

export function drogoAppState(initialState = initDrogoState, action) {

  switch(action.type) {
    case GET_ALL_BREEDS.type: {
      console.info("Fetching all breeds");
      let breedNo = Math.round(Math.random() * 100);
      const newBreed = {};
      newBreed[`DogId${breedNo}`] = {
        images: [],
        subBreeds: []
      }
      const newState = Object.assign({}, initialState, newBreed);
      return newState;
    }

    case GET_SUBBREEDS_FOR_BREED.type: {
      console.info("Fetching subbreeds for breed");
      return initialState;
    }

    default: {
      console.info("Returning default state");
      return initialState;
    }
  }
}