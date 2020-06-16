
var page;
function showpage(page){

    let sol = $('#sol').val();
    if(sol === ""){
        alert("Please fill the field!!");
        return;
    }
    // if button is clicked again. 
    

    $.ajax({
        url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+sol+'&page='+page+'&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2',
        success: function(data){
            let photos = data.photos;
            if(photos.length === 0 ) {
                $('#nxt').prop('disabled', true);
                alert("No more images to show!!");
                page--;
               
            }else{
                $('#div2 img').remove();
                $('#page-no').html(page);
                for(let i in photos){
                    let image = data.photos[i].img_src;
                    $('#div2').append('<img src = "' +image +'" >');

                }
            }
        $('#nxt').prop('disabled', false);
        },
    }).fail(function(){
        console.log('error');
    });

}

 $('#nxt').click(function(e){
    e.preventDefault();
    showpage(++page);
    $('#prev').prop('disabled', false);
});
$('#prev').click(function(e){
    e.preventDefault();
    showpage(--page);
    
    if(page === 1){
        $('#prev').prop('disabled', true);
        return;
    }            
});

$('#btn').click(function(e){
    e.preventDefault();   
    page = 1;
    showpage(page);
});