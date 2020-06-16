

function fetchMarsImage(sol,page){
$.ajax({
        url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+sol+'&page='+page+'&api_key=DEMO_KEY',
        method: 'GET',
        success: function(data){
            let photos = data.photos;
            if(photos.length === 0 ) {
                alert("No photos available");
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

$('#btn').click(function(e){
    e.preventDefault();
    let num = $('#num').val();
    let sol = $('#sol').val();

    if(num == "" && sol == ""){
        alert("All fields are Required!!");
        return;
    }
    // if button is clicked again. 
    $('#div2 img').remove();


    fetchMarsImage(sol,num);
});