import request from 'superagent';

/**
 * A generic API client written over superagent.
 */
export default class api {

  get(url, headers) {
    let defaultHeaders = {
      'Accept': 'application/json',
    };
    return (request.get(url));
  }
};