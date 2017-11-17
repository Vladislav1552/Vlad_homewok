
export default url => {
    return new Promise((success, fail) => {
      const request = new XMLHttpRequest();
      request.open('GET', 'http://www.nbrb.by/API/ExRates/Rates/145', true);
  
      request.addEventListener('load', () => {
        request.status >= 200 && request.status < 400
            ? success(request.responseText)
        : fail(new Error(`Request Failed: ${request.statusText}`));
      });
  
      request.addEventListener('error', () => {
        fail(new Error('Network Error'));
      });
      request.send();
    });
  };
