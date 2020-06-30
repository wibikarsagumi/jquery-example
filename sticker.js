var x = 0;
var y = 0;

setInterval(function(){

    x -= 80
    if( x == -320){
        x = 0;
        y -= 80;
    } else {

        if(y == -240)
        {
            y = 0;
        }
    }

    document.getElementById('stiker').style.backgroundPositionX = String(x) + "px";
    document.getElementById('stiker').style.backgroundPositionY = String(y) + "px";

}, 100);