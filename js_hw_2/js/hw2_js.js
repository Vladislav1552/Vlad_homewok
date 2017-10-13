

var a = prompt('Задайте количество простых чисел','');
function PrimeNumbers(a) {
        var PrimeNumbers = [];
        var b = 2;
        var i;
        LabelPrimeNumbers:
            while (PrimeNumbers.length < a) {
                while (1) {
                    i = b;
                    b = i + 1;
                    for (var j = 2; j < i; j++) {
                        if (i % j === 0) continue LabelPrimeNumbers;
                    }
                    PrimeNumbers.push(i);
                    continue LabelPrimeNumbers;
                }
            }
        return PrimeNumbers;
    }
    function validation(n) {
       return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if(!validation(a)) 
    {
        alert("Введите число");
    }else{
    alert(PrimeNumbers(a));
    }
    