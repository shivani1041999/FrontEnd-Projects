
var current = document.querySelector('.current');
var next = document.querySelector('.next');
var interval;
var readNumber = document.getElementById('number');

function startCounter(){
	var num = readNumber.value;
	if(num == ""){
		window.alert("Please Enter a Number to start counter!");
		return;
	}else if(num < 1 || num > 9){
		window.alert("Please Enter From 1 to 9!");
		return;
	}
	current.innerText = 0;
	next.innerText = 1;
	interval = setInterval(animate,1000,num);
}

function animate(num){
	
	next.classList.add('animate');
	// console.log(next.innerText);
	setTimeout(function(){
		next.classList.remove('animate');
		current.innerText = next.innerText;
		next.innerText = Number(next.innerText) + 1;

	},500);
	
	if(Number(next.innerText) > num){
		next.innerText -= 1;
		clearInterval(interval);
		window.alert('The Counter has stopped!')
		return;
	}

}