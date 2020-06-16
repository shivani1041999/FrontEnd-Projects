

var box = document.getElementById('box');

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

// window.addEventListener("resize", function(event) {
//     windowWidth = window.innerWidth;
//     windowHeight = window.innerHeight;
// });


var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
box.addEventListener('mouseover',function(){
	// console.log('mouseover');
	var newy = Math.floor(Math.random() * windowHeight) + 1 - boxHeight;
	var newx = Math.floor(Math.random() * windowWidth) + 1 -boxWidth; 


	if(newx < 1){
		newx = 1;
	}if(newy < 1){
		newy = 1;
	}

	box.style.top = newy + "px";
	box.style.left = newx + "px";
});
