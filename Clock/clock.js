function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let day = date.getUTCDay();
    const weekDay=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    day = weekDay[date.getDay()];

  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + day;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();