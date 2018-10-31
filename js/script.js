


var stop=false;

function updateTimer() {
  if(stop==false){
 
  //Настройка таймера
  var YEAR =   2019;     // Год
  var MONTH = 'October'; // Месяц 
  var DAY =    31;       // День
  var HOUR =   03;       // Часы
  var MINUTE = 39;       // Минуты

  future  = Date.parse(" "+MONTH+" "+DAY+", "+YEAR+" "+HOUR+":"+MINUTE+":00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  if(d==-1) { 
    d=0; 
    h=0; 
    m=0; 
    s=0; 
    stop=true;
  } 

  document.getElementById("timer")
  .innerHTML =
  '<div>' + d + '<span>days</span></div>' +
  '<div>' + h + '<span>hours</span></div>' +
  '<div>' + m + '<span>minutes</span></div>' +
  '<div>' + s + '<span>seconds</span></div>' ;
  
  if(m==0 & s==0 & h==0 & d==0){ 
    stop=true;    //Выключение таймера 
    event();      //Вызов функции
  } 

  }                                     
}
setInterval('updateTimer()', 1000 );



//При обнулении таймера выполнится эта функция
function event(){ 

  alert('Hello world!');

 }

