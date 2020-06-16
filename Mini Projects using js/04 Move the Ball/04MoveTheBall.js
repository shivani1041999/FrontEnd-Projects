var moveBall = document.getElementById('ball');
moveBall.style.top = moveBall.offsetTop + "px";
moveBall.style.left = moveBall.offsetLeft + "px";

var ballHeight = moveBall.offsetHeight;
var ballWidth = moveBall.offsetWidth;

// If you want dynamic change in values of ball height and width uncomment the below 'onresize' code.
window.onresize = function (e) {
    ballHeight = ball.offsetHeight;
    ballWidth = ball.offsetWidth;
};


document.addEventListener('keypress',function(event){
    // var coordinates = moveBall.getBoundingClientRect();
    var top = parseInt(moveBall.style.top);
    var left = parseInt(moveBall.style.left);

    if(event.keyCode == 119 || event.keyCode == 87){
        //move upward, W is Pressed
        if(top > 10 ){
            moveBall.style.top = -10 + top +"px";
        }
    }else if(event.keyCode == 97 || event.keyCode == 65){
        // move left, A is Pressed
        if(left > 10){
            moveBall.style.left = -10 + left + "px";
        }
    }else if(event.keyCode == 115 || event.keyCode == 83){
        // move bottom, S is pressed
        if(top < (window.innerHeight - ballHeight) - 10){
            moveBall.style.top = 10 + top + "px";
        }
    }else if(event.keyCode == 100 || event.keyCode == 68){
        // move right, D is Pressed
        if(left < (window.innerWidth - ballWidth) - 10){
            moveBall.style.left = 10 + left +"px";
        }
        }
    });
