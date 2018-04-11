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
