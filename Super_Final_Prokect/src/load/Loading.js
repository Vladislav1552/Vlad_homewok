import {API_LOADING} from '../Currencies/Currencies.js';
export default url => {
    return new Promise((success, fail) => {
      const request = new XMLHttpRequest();
      request.open('GET', `http://www.nbrb.by/API/ExRates/Rates/Dynamics/292?startDate=Sat%2C+30+Sep+2017+21%3A00%3A00+GMT&endDate=Tue%2C+31+Oct+2017+21%3A00%3A00+GMT`, true);
      request.addEventListener('load', () => {
        request.status >= 200 && request.status < 400
            ? success (request.responseText)
        : fail(new Error(`Request Failed: ${request.statusText}`));
      });
      request.addEventListener('error', () => {
        fail(new Error('Network Error'));
      });
      request.send();
    });
  };
console.log(API_LOADING)
