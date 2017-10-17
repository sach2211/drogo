import api from '../components/api.js';
const apiClient = new api();

/**
 * Actions Types
 */
export const ACTION_TYPES = {

  GET_ALL_BREEDS: 'GET_ALL_BREEDS',

  UPDATE_BREEDS: 'UPDATE_BREEDS',

  GET_SUBBREEDS_FOR_BREED: 'GET_SUBBREEDS_FOR_BREED',

  GET_IMAGES_FOR_BREED: 'GET_IMAGES_FOR_BREED',

  GET_IMAGES_FOR_SUBBREAD: 'GET_IMAGES_FOR_SUBBREAD'

}


/**
 * Action Creators
 */

export const ACTION_CREATORS = {

  /**
   * 
   * Fetches all the data from api
   */
  getAllBreedsAsync(dispatch) {
    // returns a thunk
    return (dispatch) => {
      apiClient
      .get('http://dog.ceo/api/breeds/list/all')
      .then((resp) => {
        dispatch(this.updateBreeds(resp.body.message));
      }, 2000);
    }
  },
  
  /**
   * 
   * Updates the data in the store
   */
  updateBreeds(data) {
    return {
      type: ACTION_TYPES.UPDATE_BREEDS,
      data: data
    };
  },
  

  getSubbreedsForBreed(breed) {
    return {
      type: ACTION_TYPES.GET_SUBBREEDS_FOR_BREED
    };
  },
  
  getImagesForBreed(breed) {
    return {
      type: ACTION_TYPES.GET_IMAGES_FOR_BREED
    };
  },

  getImagesForSubbreed(subbreed) {
    return {
      type: ACTION_TYPES.GET_IMAGES_FOR_SUBBREAD
    };
  }
}
