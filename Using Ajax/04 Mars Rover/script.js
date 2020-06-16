

function fetchMarsImage(date){
$.ajax({
		url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + date + '&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2',
		method: 'GET',
		success: function(data){
			let photos = data.photos;
        	if(photos.length === 0 ) {
	            alert("No photos available for this date");
	            return;
	        }

			for(let i in photos){
				// console.log(i);
				let image = data.photos[i].img_src;
				$('#div2').append('<img src = "' +image +'" >');
				}
		},
	}).fail(function(){
		console.log('error');
	});

}
var input = $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd' });


$('#btn').click(function(e){
	e.preventDefault();
	var date = input.val();
	if(date == ""){
		alert("Please fill the field");
		return;
	}
	// if button is clicked again. 
	$('#div2 img').remove();


	fetchMarsImage(date);
});