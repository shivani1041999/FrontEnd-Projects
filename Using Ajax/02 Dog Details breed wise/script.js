
var dropdown = $('#dog-breeds');
var breed;
var allowSubmit = true;
$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(function () {
    // console.log(allowSubmit);
    allowSubmit = true;
});

$("#nxt a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

function displayDog(breed){
	$("#breed-image img").remove();

	$.get('https://dog.ceo/api/breed/'+breed+'/images/random',function(data,status){
			let imageurl = data.message;
			$('#breed-image').append('<img src = "' +imageurl+ '">');

	}).fail(function(xhr,textStatus,errorThrown){
			console.log("Request Failed");
	});

}

$('form button').click(function(e){
	e.preventDefault();
	if(allowSubmit){
		breed = dropdown.val();
		displayDog(breed);
		allowSubmit = false;
	}
});





