// Navigation
$(document).ready(function(){
    $('.dropdown ul').slideUp();
});

$(document).click(function() {
	$(".dropdown span").next('ul').slideUp();
	$(".dropdown span").removeClass('open');
});

$(document).on("click touchend", ".dropdown span, .table-of-contents", function (event) {
    $(this).next('ul').slideToggle();
    $(".dropdown span").toggleClass('open');
    event.stopPropagation();
});

$('.nav-toggle').click(function(){
    $('.menu ul').toggleClass('active');
});

// overlay


// if toggle is clicked, find the corresponding overlay contaienr and toggle the opening class.
$('.toggle').click(function(){
    var ol = $(this).data('toggle-overlay');
    $('#'+ol).toggleClass('open');
    $('body').toggleClass('overlay-open');
    $('body').append('<div class="backdrop"></div>');
});

// close on X
$('.overlay .close').click(function(){
    closeOverlay();
});

// close when clicked outside of element
$('body').on('touchstart click', '.backdrop', function(){
    closeOverlay();
});

// close on esc key
$(document).keyup(function(e) {
  if (e.keyCode === 27){
      closeOverlay();
  }
});

function closeOverlay(){
    $('.backdrop').remove();
    $('.overlay').removeClass('open');
    $('body').removeClass('overlay-open');
}
