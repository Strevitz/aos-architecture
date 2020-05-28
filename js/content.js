window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-23581568-13');

$(function() {

    var body = $('body');
    body.addClass('vh-100 vw-100');

    var navbar = $('.navbar');
    navbar.css('background-image', 'linear-gradient(to right, #0f491d, transparent)');

    var logo = $('#logo');
    logo.css('font-family', 'arabic')
        .css('font-size', '70px')
        .css('text-shadow', '5px 1px 5px #e441a0')
        .css('padding-left', '40px');

    var copyright = $('.copyright');
    copyright.addClass('col-6 d-inline-block text-right mt-4');
    copyright.effect("slide", {direction: "right"}, "slow");

    var row1 = $('.row-1');
    row1.addClass('no-gutters ml-5 mr-5 mb-5 p-3');
    row1.css('background-image', 'linear-gradient(to left, transparent, #0f471d)')
        .css('border-radius', '40px');
    row1.effect("slide", {direction: "right"}, "slow");

    var foodGallery = $('.responsive');
    foodGallery.effect("bounce", 1000);

    var tel = $('#telefon');
    tel.css('color', 'white')
       .css('text-decoration', 'none')
       .css('font-size', '16px')
       .css('text-shadow', '5px 1px 5px #e441a0')
       .css('margin-right', '40px');
    tel.hover(
        function(){
        $(this).css('color', '#e441a0')
               .css('cursor', 'pointer');
        },
        function(){
        $(this).css('color', '#fff')
               .css('cursor', 'none');
        }
    );

    var strong = $('strong');
    strong.on('mouseenter', function(e){
        $('strong').css('color', '#e441a0')
        $('strong').animate({ marginLeft: 10,  marginRight: 10}, 'fast');
    });

    var strong = $('strong');
    strong.on('mouseleave', function(e){
    $('strong').css('color', 'white')
               .animate({ marginLeft: 0, marginRight: 0}, 'slow');
    });

    $( "#dialog" ).dialog({
        autoOpen: false,
	    width: 400,
    });

    $(".contact100-form-btn").click(function(){
        $( "#dialog" ).dialog('open');
    });

    $( "#tooltip" ).tooltip();

});