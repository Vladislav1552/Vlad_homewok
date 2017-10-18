
function  autopark ( Car) {
    this.Car= 'This car is the property of fleet';
    }
function Audi (Car){
    autopark.call(this, Car);
    var mClassСars = {
       ClassСars: 'CityCar',
       Bodytype: 'Sedan',
       YearOfМanufacture:2010,
   };
   var Manufacturer ={
       Manufacturer: 'Audi:',
   }
   this.CarSedan = function(){
   var CarSedan = Object.assign(mClassСars,Manufacturer);
   console.log(CarSedan);
   }
    }
    function LandRover (Car){
        autopark.call(this,Car);
        var mClassСars = {
           ClassСars: 'suv',
           Bodytype: 'Jeep',
           YearOfМanufacture:2005,
       };
       var Manufacturer ={
           Manufacturer: 'LandRover:',
       }
       this.CarSuv = function(){
             var CarSuv = Object.assign(mClassСars,Manufacturer);
             console.log(CarSuv);
           }
       }
function Volkswagen(Car){
    autopark.call(this,Car);
    var mClassСars = {
       ClassСars: 'PotatoesСarrier',
       Bodytype: 'Universal',
       YearOfМanufacture:2007,
   };
   var Manufacturer ={
       Manufacturer: 'Volkswagen:',
   }
            this.CarPotatoesСarrier = function(){
                var CarPotatoesСarrier = Object.assign(mClassСars, Manufacturer);
         console.log (CarPotatoesСarrier);
   }
}
   var Volkswagen = new Volkswagen()
   var LandRover = new LandRover()
   var Audi = new Audi()

   console.log(Audi)
   Audi.CarSedan()

   console.log( Volkswagen)
   Volkswagen.CarPotatoesСarrier()

   console.log(LandRover)
   LandRover.CarSuv()






