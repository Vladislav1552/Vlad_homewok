


function CalendarDay(){
        var div = document.createElement('div');
        document.querySelector('div');
        p = document.querySelector('div');
        p.appendChild(div);
       div.className = 'classel';
       content = document.createTextNode(k);
       div.appendChild(content);
      
       
    if(k>31){
        location.reload();
    }
}    
function spaceday(){
           var nall = document.createElement('div');
           document.querySelector('div');
           space = document.querySelector('div');
           space.appendChild(nall); 
           nall.className = 'space';   
           
   }    
function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
  
}
var date = new Date();
l = ( date.getMonth() );
var month = l+1;
function rundate(){
    if ( month < 12){
        month++
    }else{
        month = 1;
      }
}


    /*for (i = 0; i <f; i++) {
        spaceday();
    }  
*/
k=1;
function go() {
    var h = (daysInMonth(month,2017));
    if(month == 10){
       lookSpan = 'октябрь';
        day = 6;
    }
    if(month == 11){
        lookSpan = 'Ноябрь';
        day = 2;
    }
    if(month == 12){
        lookSpan  = 'декабрь';
        day = 4
    }
    if(month == 1){
        lookSpan  = 'январь';
        day = 0
    }
    if(month == 2){
        lookSpan  = 'февраль';
        day = 3
    }
    if(month == 3){
        lookSpan  = ('март');
        day = 3
    }
    if(month == 4){
        lookSpan='Апрель';
        day = 6
    }
    if(month == 5){
        lookSpan='май';
        day = 1
    }
    if(month == 6){
        lookSpan= 'июнь';
        day = 4
    }
    if(month == 7){
        lookSpan= 'июль';
        day = 6
    }
    if(month == 8){
        lookSpan= 'август';
        day = 2
    }
    if(month == 9){
        lookSpan= 'сентябрь';
        day = 5
    }
    for(j=0;j<day; j++){
        spaceday();
    }
    for (i = 0; i <h; i++) {
    CalendarDay();
   k++
    }  
  
}
/////////////////////////////---Start---///////////////////////////////////
function funonload(){
    var Calendar = document.createElement('button');
    document.querySelector('body');
    Cale = document.querySelector('body');
    Cale.appendChild(Calendar);
    ClikMeCal = document.createTextNode('ClickMe');
    Calendar.appendChild( ClikMeCal);
    Calendar.setAttribute("onclick","d()")
    Calendar.className ='button';
    
    var CalendarMonth = document.createElement('button');
    document.querySelector('body');
    Cm = document.querySelector('body');
    Cm.appendChild(CalendarMonth);
    ClikMeCm = document.createTextNode('Montch   (Оctober+1)');
    CalendarMonth.appendChild( ClikMeCm );
    CalendarMonth.setAttribute("onclick","rundate()")
    CalendarMonth.className ='button';
}
window.onload = funonload;


//////////////////////////////////////////////------- TodayMonth--------//////////////////////
function TodayMonth(){
   
    var span = document.createElement('span');
    document.querySelector('div');
    spann = document.querySelector('div');
    spann.appendChild(span); 
    span.className = 'span';   
    spanCrate = document.createTextNode(lookSpan);
    span.appendChild(spanCrate);

}    



    function d(){
               var div1 = document.createElement('div');
               document.querySelector('body');
               div1.className = 'hello';
                s = document.querySelector('body');
                s.appendChild(div1);
                //div1.innerHTML="<td> Moаааааа</td> <td> Tu </td>  <td> Wаааe</td>  <td>Tаааааааh </td>  <td> Fr </td>  <td> Sa </td>  <td> Su </td>";
                ///////////////////////////////////////////////////////
                var monday = document.createElement('td');
                document.querySelector('div');
                monday.className = 'weekday';
                mo = document.createTextNode('Mo');
                monday.appendChild(mo);
                 g = document.querySelector('div');
                 g.appendChild(monday);
               ///////////////////////////////////////////////////////
                var Tuesday = document.createElement('td');
                document.querySelector('div');
                Tuesday.className = 'weekday';
                Tu = document.createTextNode('Tu');
                Tuesday.appendChild(Tu);
                tue = document.querySelector('div');
                tue.appendChild(Tuesday);
                   ///////////////////////////////////////////////////////
                   var Wednesday = document.createElement('td');
                   document.querySelector('div');
                   Wednesday.className = 'weekday';
                   We = document.createTextNode('We');
                   Wednesday.appendChild(We);
                   tue = document.querySelector('div');
                   tue.appendChild(Wednesday);
                   ///////////////////////////////////////////////////////
                   var Thursday = document.createElement('td');
                   document.querySelector('div');
                   Thursday.className = 'weekday';
                   Th = document.createTextNode('Th');
                   Thursday.appendChild(Th);
                   tue = document.querySelector('div');
                   tue.appendChild(Thursday);
                 ///////////////////////////////////////////////////////
                var Friday= document.createElement('td');
                document.querySelector('div');
                Friday.className = 'weekday';
                Fr = document.createTextNode('Fr');
                Friday.appendChild(Fr);
                fri = document.querySelector('div');
                fri.appendChild(Friday); 
                 ///////////////////////////////////////////////////////
                var Saturday= document.createElement('td');
                document.querySelector('div')
                Saturday.className = 'weekday';
                Sa = document.createTextNode('Sa');
                Saturday.appendChild(Sa);
                Sat = document.querySelector('div');
                Sat.appendChild(Saturday);
                 ///////////////////////////////////////////////////////
                 var Sunday= document.createElement('td');
                 document.querySelector('div');
                 Sunday.className = 'weekday';
                 Su = document.createTextNode('Su');
                 Sunday.appendChild(Su);
                 Sun = document.querySelector('div');
                 Sun.appendChild(Sunday); 
                 go();
                 TodayMonth();
      
                
       }       

    
       