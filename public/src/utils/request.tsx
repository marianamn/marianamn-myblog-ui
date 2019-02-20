const ES6Promise = require("es6-promise");
ES6Promise.polyfill();
//import storageService from 'services/storage.service';

class Request {
  parseJSON = (response: any) => {
    if (response.status === 204 || response.status === 205) {
      return null;
    }

    return response.json();
  };

  // checkStatus = (response: any) => {
  //   if (response.status >= 200 && response.status < 300) {
  //     return response;
  //   }

  //   // const error = new Error(response.statusText);
  //   // console.log(response.body);
  //   //error.response = response;

  //   //this.displayErrorToast(response);

  //   // // handle unathorized
  //   // if (response.status === 401 && this.storeInstance) {

  //   //   //this.storeInstance.dispatch(userLoggedOut());
  //   // }

  //   throw error;
  // };

  request = async (
    url: string,
    options: {
      method: string;
      body?: any;
      headers?: any;
    },
  ) => {
    //const tokenInStorage = storageService.get('session', 'token_id');

    // attach Auth header if applicable
    // if (tokenInStorage) {

    //   options.headers = {
    //     ...options.headers,
    //     Authorization: tokenInStorage,
    //   };
    // }

    return fetch(url, options)
      .then(response => response.json())
      .then(response => {
        if(!response.success){
          throw response;
        }

        return response;
      });
  };
}

const requestObjInstance = new Request();

export default requestObjInstance;
