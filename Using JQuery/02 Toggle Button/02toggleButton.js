var innerDiv = $('#inner');
var toggled = false;

$('#outer').click(function(){
	$('h1').toggleClass('color-white');
	$("body").toggleClass('bck-color-black');
	// $('#outer').toggleClass('color-white');

	if(!toggled){
		innerDiv.css("margin-left", "100px");
		toggled = true;
	}else{
		innerDiv.css("margin-left", "1px");
		toggled = false;
	}
	
});


