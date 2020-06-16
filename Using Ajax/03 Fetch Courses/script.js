

function fetchCourses(){

$.get('https://www.codingninjas.in/api/v3/courses',function(data){
	console.log(data.data.courses);
	$('#div1').hide();
	for(let course in data.data.courses){
		
		console.log(data.data.courses[course].preview_image_url);
		let item = '<div class = "box"><img src = '+data.data.courses[course].preview_image_url +' <img><p class = "name">' +data.data.courses[course].name +'</p><p class = "align">'+ data.data.courses[course].level +'</p> </div>';
		$('#div2').append(item);
		
	}
	}).fail(function(xhr,textStatus,errorThrown){
		console.log("Request Failed");
	});
}

$('button').click(fetchCourses);
