function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.getElementById("bir").style.backgroundColor=bgColor;
    document.getElementById("iki").style.backgroundColor=bgColor;
    document.getElementById("uc").style.backgroundColor=bgColor;
    document.getElementById("dort").style.backgroundColor=bgColor;
    }

