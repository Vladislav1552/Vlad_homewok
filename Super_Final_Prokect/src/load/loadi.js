import {  giveLink } from '../Convector/Convector.js'
export default url => {
      return new Promise((success, fail) => {
        const request = new XMLHttpRequest();
        request.open('GET', API, true);
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

const API = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0'


    'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0'
    
const fsd = `http://www.nbrb.by/API/ExRates/Rates/Dynamics/292?startDate=Sat%2C+30+Sep+2017+21%3A00%3A00+GMT&endDate=Tue%2C+31+Oct+2017+21%3A00%3A00+GMT`
    //http://www.nbrb.by/API/ExRates/Rates/170(ID)?onDate=Thu(день недели)%2(DAY)C+30+Nov+2017+21%3A00%3A00+GMT&ParamMode=0
   // http://www.nbrb.by/API/ExRates/Rates/Dynamics/170?startDate=Sat %2C+30+Sep+2017+21%3A00%3A00+GMT&endDate=Thu%2C+31+Nov+2017+21%3A00%3A00+GMT
   var name = `292`
   console.log(`http://www.nbrb.by/API/ExRates/Rates/Dynamics/${name}?startDate=Sat%2C+30+Sep+2017+21%3A00%3A00+GMT&endDate=Tue%2C+31+Oct+2017+21%3A00%3A00+GMT`)



 