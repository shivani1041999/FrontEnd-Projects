

var interval;

function startCounter(){
	var readNumber = document.getElementById('number');
	var num = parseInt(readNumber.value);
	if(num == ""){
		window.alert("Please Enter a Number to start counter!");
		clearInterval(interval);
		return;
	}
	if(num < 1 || num > 99999){
		window.alert("Please Enter From 1 to 99999!");
		clearInterval(interval);
		return;
	}
	var currentNos = document.querySelectorAll('.counter-class .current');
	var nextNos = document.querySelectorAll('.counter-class .next');
	var count = 0;
	 // If user clicks on 'Start Counter' button again 
	 // - remove this function and below line if you don't consider this situation
	reset(currentNos, nextNos, 5);
	// clear the previous interval that was running
	clearInterval(interval);

	interval = setInterval(function(){
		if(count === num) {
            clearInterval(interval);
            alert("Counter has stopped");
            return;
        }
        // console.log("1");
        increaseCount(currentNos, nextNos, 4);
        count++;
    }, 1000);

}

function reset(currentNos, nextNos,end){
	for(var i = 0; i < end; ++i) {
        currentNos[i].innerText = 0;
        nextNos[i].innerText = 1;
    }
}

function increaseCount(currentNos, nextNos,index){

	 let current = currentNos[index];
    let next = nextNos[index];
    
    if(current.innerText == 9) {
    	// console.log("3");
        increaseCount(currentNos, nextNos, index-1);
    }
    
    next.classList.add("animate");
    
    setTimeout(function() {
        current.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
        // console.log(2);
        if(next.innerText > 9) {
            next.innerText = 0;
        }
    }, 500);

}



							