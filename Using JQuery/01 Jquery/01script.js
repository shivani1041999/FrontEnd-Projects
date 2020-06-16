

// $('#para1').html('Welcome');

// $('#para1').hide();

// $('#para1').width();
// $('p').html('Welcome');

// $('p').css('font-size', '50px');

$('p').css({
    fontSize: "30px",
    color: "red"
});
$('div').css({
    height: "80px",
    width: "80px",
    backgroundColor: "cyan"
});
// $('div').click(function(){
//     alert("Div Clicked");
// });

$('div').on('click',function(){
    var element = $(this);

    $('div').width(element.width() + 10 + "px");

    // alert("Div Clicked");
});

$('a').on('click',function(event){
    event.preventDefault();
    alert("A Clicked");
});




