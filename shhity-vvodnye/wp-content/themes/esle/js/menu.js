$(function(){


  var pos=150, fadedIn=false;

$(window).on("scroll", function(e) { //usually, just use: $(window).scroll(function(){
    pos = $(this).scrollTop();
    if (pos > 150) {
      $('#back-to-top').fadeIn();
		$('.nav').addClass('affix');
    } else {
        $('#back-to-top').fadeOut();
		$('.nav').removeClass('affix');
    }
});



    /*<!-- Function used to shrink nav bar removing paddings and adding black background -->*/
    /*        $(window).scroll(function() {
                if ($(this).scrollTop() >= 50) {
                    $('.nav').addClass('affix');
                    $('#back-to-top').fadeIn();
                //    console.log("OK");
                } else {
                    $('.nav').removeClass('affix');
                    $('#back-to-top').fadeOut();
                }
                if ($(this).scrollTop() >= 25) {
        $('#phoneblock').addClass('hidden');
              //    console.log("OK");
              } else {
        $('#phoneblock').removeClass('hidden');
              }


            });
       
*/

$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});



$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });



// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

// popovers initialization - on hover
$('[data-toggle="popover-hover"]').popover({
  html: true,
  trigger: 'hover',
  placement: 'top',
  content: function () { return '<div>' + $(this).data('img') + '</div>'; }
});
	
 }); 
 
 
