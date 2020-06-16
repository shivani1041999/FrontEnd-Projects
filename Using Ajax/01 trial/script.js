

function fetchRandomImage(){

	// var xhrRequest = new XMLHttpRequest();

	// // once response is received, what we want to do that response
	// xhrRequest.onload = function(){
	// 	// console.log(xhrRequest.response);
	// 	// convert that strig to json
	// 	var responsejson = JSON.parse(xhrRequest.response);
	// 	var imageUrl = responsejson.message;
	// 	$('#dog-image').attr('src',imageUrl);
	// };

	// xhrRequest.onerror = function(){
	// 	console.log("Request failed");
	// };
	// // opens up connection
	// xhrRequest.open('get', "https://dog.ceo/api/breeds/image/random" ,true);
	// // true is for asynchronous request,false is for synchoronous
	// // make a request
	// xhrRequest.send();


	$.ajax({
		url: 'https://dog.ceo/api/breeds/image/random',
		method: 'GET',
		success: function(data){
			var imageUrl = data.message;
			$('#dog-image').attr('src',imageUrl);
		},
	}).fail(function(){
		console.log('error');
	});


	// $.get('https://dog.ceo/api/breeds/image/random',function(data){
	// 	var imageUrl = data.message;
	// 		$('#dog-image').attr('src',imageUrl);
	// }).fail(function(xhr,textStatus,errorThrown){
	// 	console.log("Request Failed");
	// });

}

$('#btn').click(fetchRandomImage);

