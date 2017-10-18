import { ACTION_TYPES, ACTION_CREATORS } from './actions.js';

const initDrogoState = {};

export function drogoAppState(initialState = initDrogoState, action) {

  switch(action.type) {

    case ACTION_TYPES.UPDATE_BREEDS: {
      console.info("Updating breeds in store");
      let allBreeds = action.data;
      let newState = {};

      Object.keys(allBreeds).map((thisBreed) => {
        newState[thisBreed] = {};
        newState[thisBreed].images = [];
        newState[thisBreed].subbreeds = allBreeds[thisBreed];
      })

      return Object.assign({}, initialState, newState);
    }

    case ACTION_TYPES.GET_SUBBREEDS_FOR_BREED.type: {
      console.info("Fetching subbreeds for breed");
      return initialState;
    }

    case ACTION_TYPES.GET_IMAGES_FOR_BREED: {
      console.info("Fetching images for breed");
      return initialState;
    }

    default: {
      console.info("Returning default state");
      return initialState;
    }
  }
}