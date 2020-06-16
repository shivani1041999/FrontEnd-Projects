var breeds = $('#dog-breeds');
var selectedbreed;
var subbreed;
$.get('https://dog.ceo/api/breeds/list/all',function(data,status) {
	
	for(let breed in data.message){
		breeds.append('<option value = "' +breed+ '">' +breed+ '</option');
	}
});

breeds.change(function(){
	$('#subbreeds').remove();
	selectedbreed = breeds.val();
	console.log(selectedbreed);
	subBreed(selectedbreed);
})

console.log(selectedbreed);

function subBreed(selectedbreed){
	console.log(true);
	$.get('https://dog.ceo/api/breed/'+selectedbreed+'/list',function(data){
		let photos = data.message;
		if(photos.length === 0){
			return;
		}else{
			$('#div1').append('<select id = "subbreeds"></select>');
			
			for(let subbreed in photos){
				$('#subbreeds').append('<option value = "' +photos[subbreed]+ '">'+photos[subbreed]+'</option');
			}

		}
	});
}

$('button').click(function(e){
	e.preventDefault();
	subbreed = $('#subbreeds').val();
	if(subbreed !== undefined){
		fetchDogImages(selectedbreed,subbreed);
	}else{
		fetchDogImage(selectedbreed);
	}
});

function fetchDogImage(selectedbreed){

	$.get('https://dog.ceo/api/breed/' +selectedbreed+ '/images',function(data){
		console.log(data.message);
		$('#div2 img').remove();
		let photos = data.message;
		for(let image in photos){
			$('#div2').append('<img src = "' + photos[image]+ '"></img>')
		}
	});

}
function fetchDogImages(selectedbreed,subbreed){

	$.get('https://dog.ceo/api/breed/' +selectedbreed+ '/' + subbreed +'/images',function(data){
		console.log(data.message);
		let photos = data.message;
		for(let image in photos){
			$('#div2').append('<img src = "' + photos[image]+ '"></img>')
		}
	});

}