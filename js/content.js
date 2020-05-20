    // hidden search input
    
   /* $( '#main' ).hide();

    $( "#eggplant" ).hover(function() {

        $( '#main' ).show( 1000 );

    });

$('.row-1').mouseenter(function(){
    $(this).toggleClass("bg-success");
})
.mouseleave(function(){
    $(this).toggleClass("bg-success");  
    })

*/
var tel = $('#telefon');
tel.on('mouseenter mouseleave', function(e){
    $(this).toggleClass('text-danger');
    $(this).css('cursor', 'pointer');
});

var td = $('td');
td.on('mouseenter mouseleave', function(e){
    $(this).toggleClass('text-white-50');

});