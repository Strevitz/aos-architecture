window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-23581568-13');

$(function() {

   $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
          $('nav').addClass('shrink', {duration:200});
        } else {
          $('nav').removeClass('shrink');
        }
    });

    $('.navbar-brand').effect('scale', {percent:300, scale:'content'});

    $( "#tabs" ).tabs();

    //$('ul > li > .nav-link').effect("slide", {direction: "right"}, 1000);

    $('.page1').effect("slide", {direction: "down"}, 800);
    $('.page2').effect("slide", {direction: "down"}, 1200);
    $('.page3').effect("slide", {direction: "down"}, 1600);
    $('.page4').effect("slide", {direction: "down"}, 2000);


    $().ready(function() {
        $ticker = $('#news-ticker').newsTicker({
              debug: true,
              animationType: 'scroll'
        });
    });

    var row = $('.row-1 .row-2');
    row.addClass('no-gutters');
    row.css('background-color', '#fff');

    var row1 = $('.row-1');
    row1.addClass('pb-4 m-4');

    $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
        $('#headline').fadeIn(1000);
      } else {
        $('#headline').hide();
      }
    });

    $( "#dialog" ).dialog({
        autoOpen: false,
	    width: 400,
    });

    /*$(".contact100-form-btn").click(function(){
        $( "#dialog" ).dialog('open');
    });

    $( "#tooltip" ).tooltip();
    */
});