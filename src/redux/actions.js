/**
 * Actions
 */
export const GET_ALL_BREEDS = {
  type: 'GET_ALL_BREEDS'
};

export const GET_SUBBREEDS_FOR_BREED = {
  type: 'GET_SUBBREEDS_FOR_BREED'
};

export const GET_IMAGES_FOR_BREED = {
  type: 'GET_IMAGES_FOR_BREED'
};

export const GET_IMAGES_FOR_SUBBREAD = {
  type: 'GET_IMAGES_FOR_SUBBREAD'
};


/**
 * Action Creators
 */

export function getAllBreeds() {
  return GET_ALL_BREEDS;
}

export function getAllBreedsAsync(dispatch) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(GET_ALL_BREEDS);
    }, 2000);
  }
}

export function getSubbreedsForBreed(breed) {
  return GET_SUBBREEDS_FOR_BREED;
}

export function getImagesForBreed(breed) {
  return GET_IMAGES_FOR_BREED;
}

export function getImagesForSubbreed(subbreed) {
  return GET_IMAGES_FOR_SUBBREAD;
}