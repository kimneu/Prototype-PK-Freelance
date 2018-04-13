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

$(document).ready(function(){
    $('.menu .toc ul').unwrap();

    $('pre code').before('<span class="copy-code">Copy To Clipboard</span>');

    $('.copy-code').click(function() {
        var temp = $("<input>");
        $("body").append(temp);
        temp.val($(this).next('code').text()).select();
        document.execCommand("copy");
        temp.remove();
        alert('Code was copied to clipboard');
    });

    $('.toggle-code').click(function() {
        $(this).toggleClass('off');
        $('pre').toggle();
    });
});

// Slider
$('.slider').each(function() {
    $(this).children('div').first().addClass('active');
});
$('.toggle-next').click(function() {
    var current = $(this).siblings('div').children('.active');
    current.removeClass('active');
    if (current.next().length) {
        current.next().addClass('active');
    } else {
        $(this).siblings('div').children().first().addClass('active');
    }
});
$('.toggle-prev').click(function() {
    var current = $(this).siblings('div').children('.active');
    current.removeClass('active');
    if (current.prev().length) {
        current.prev().addClass('active');
    } else {
        $(this).siblings('div').children().last().addClass('active');
    }
});

// Video

$('.video').each(function(){
    if($(this).hasClass('mute')){
        var vid =  $(this).children('iframe');
        vid.mute();
    }
});

// Back to Top
$('.backtotop').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
});

// scrollspy
var navheight = $('nav.menu').outerHeight(),
	bodyheight;

$('body').css('margin-top', navheight);

$(document).ready(function() {
	navheight = $('nav.menu').outerHeight();
	bodyheight = $(document).outerHeight() - navheight;

	$("section").each(function(i) {
		var offset = $(this).offset().top - navheight,
			height = $(this).outerHeight(),
			p = (offset / bodyheight) * 100,
			w = (height / bodyheight) * 100;

		if ($(this).attr('data-section-title')) {
			var title = $(this).data('section-title');
		} else {
			var title = $(this).children(':header').first().text();
		}

		$(this).attr('id', 'section-'+i);

		if (!$(this).parent().hasClass('overlay')){
			$(".scrollspy-wrapper").append('<div data-go-to="section-' + i + '" class="scrollspy" style="width:'+w+'%; left:'+p+'%">' + title + '</div>');
		}

	});

	$(".display-titles .scrollspy").click(function() {
		var id = $(this).data('go-to');
		$('html, body').animate({
			scrollTop: $('#'+id).offset().top - navheight
		}, 1000);
	});
});

var scrollHeight = $('body').prop("scrollHeight");
var windowHeight = $(window).innerHeight();
	body = $(document).outerHeight();

$(document).scroll(function() {
    var scrollTop = $(document).scrollTop();

        var currentTop = ((scrollTop / (scrollHeight - (windowHeight - navheight))) * 100) * ((scrollHeight - (windowHeight + navheight)) / bodyheight);

    $(".scrollbar").css("width", currentTop + '%');
});

//@prepros-prepend components/toc.js
//@prepros-prepend components/nav.js
//@prepros-prepend components/overlay.js
//@prepros-prepend components/custom.js
//@prepros-prepend components/slider.js
//@prepros-prepend components/video.js
//@prepros-prepend components/backtotop.js
//@prepros-prepend components/scrollspy.js
