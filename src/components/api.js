import request from 'superagent';

/**
 * A generic API client written over superagent.
 */
export default class api {

  get(url, headers) {
    let defaultHeaders = {
      'Accept': 'application/json',
    };
    request
    .get(url)
    .end( (err, resp) => {
      if (err)
        console.log("The request was made, errors encountered ", err, url);
      else {
        console.log(resp.body);
      }
  
    })
  }
};