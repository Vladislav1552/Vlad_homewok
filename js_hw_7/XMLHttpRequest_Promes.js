
     window.onload = function(){   
        
        var promise = new Promise(function(resolve, reject) {
        var get = function(url){
        var getter = new XMLHttpRequest();
        getter.open ('GET',url, true);
        getter.onreadystatechange = function(){
            if(getter.readyState == 4){
                 if (getter.status == 200) {
               console.log(getter.responseText);
          }else{ 
                alert("Ooops" ); 
              }
         }
        }
            getter.send();
    }
    get(
        "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0",
         );
           get(
           "http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-1&Periodicity=1");
              get(
              "http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2",
              );
                  get(
                     "http://www.nbrb.by/API/ExRates/Rates/145");
                           get(
                              "http://www.nbrb.by/API/ExRates/Rates/840?ParamMode=1");

     });
     promise
  .then(
    result => {
   console.log(result);
    },
    error => {
        console.log(error);
    }
  );
     }
    
