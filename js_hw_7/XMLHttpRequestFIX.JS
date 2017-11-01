
       
                    var resources = ["http://www.nbrb.by/API/ExRates/Rates?Periodicity=0",
                    "http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-1&Periodicity=1", 
                    "http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2", 
                    "http://www.nbrb.by/API/ExRates/Rates/145", 
                    "http://www.nbrb.by/API/ExRates/Rates/840?ParamMode=1",
                    "http://www.nbrb.by/API/ExRates/Rates/145"];
              window.onload = function(){   
                responceLoad(() =>
                 responceLoad2(() => 
                    responceLoad3(()=> 
                        responceLoad4(()=> 
                            responceLoad5()
                        ))));
                }
                var request = new XMLHttpRequest();
                request.open("GET", resources[1]);
                request.onload = responceLoad;
                request.send();
                 function responceLoad() {
                    if (request.readyState == 4) {
                        var status = request.status;
                        if (status == 200) {
                            /*document.write*/ console.log(request.responseText);
                        } else {
                            /*document.write*/ console.log("Ответ сервера " + request.statusText);
                        }
                    }
                }

                var request2 = new XMLHttpRequest();
                request2.open("GET", resources[2]);
                request2.onload = responceLoad2;
                request2.send();
                 function responceLoad2() {
                    if (request2.readyState == 4) {
                        var status = request2.status;
                        if (status == 200) {
                            /*document.write*/ console.log(request2.responseText);
                        } else {
                            /*document.write*/ console.log("Ответ сервера " + request2.statusText);
                        }
                    }
                    
                }
                var request3 = new XMLHttpRequest();
                request3.open("GET", resources[3]);
                request3.onload = responceLoad3;
                request3.send();
                 function responceLoad3() {
                    if (request3.readyState == 4) {
                        var status = request3.status;
                        if (status == 200) {
                            /*document.write*/ console.log(request3.responseText);
                        } else {
                            /*document.write*/ console.log("Ответ сервера " + request3.statusText);
                        }
                    }
                    
                }
                var request4 = new XMLHttpRequest();
                request4.open("GET", resources[4]);
                request4.onload = responceLoad4;
                request4.send();
                 function responceLoad4() {
                    if (request4.readyState == 4) {
                        var status = request4.status;
                        if (status == 200) {
                            /*document.write*/ console.log(request4.responseText);
                        } else {
                            /*document.write*/ console.log("Ответ сервера " + request4.statusText);
                        }
                    }
                    
                }
                var request5 = new XMLHttpRequest();
                request5.open("GET", resources[5]);
                request5.onload = responceLoad5;
                request5.send();
                 function responceLoad5() {
                    if (request5.readyState == 4) {
                        var status = request5.status;
                        if (status == 200) {
                            /*document.write*/ console.log(request5.responseText);
                        } else {
                            /*document.write*/ console.log("Ответ сервера " + request5.statusText);
                        }
                    }
                    
                }
            