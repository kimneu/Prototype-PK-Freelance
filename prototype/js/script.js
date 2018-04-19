// Navigation
$('.nav-toggle').click(function() {
  $('.menu ul').toggleClass('active');
});

// OVERLAY
// --------------------
// if toggle is clicked, find the corresponding overlay container and toggle the opening class.
$('.toggle').click(function() {
  var ol = $(this).data('toggle-overlay');
  $('#' + ol).toggleClass('open');
  $('body').toggleClass('overlay-open');
  $('body').append('<div class="backdrop"></div>');
});

// close on X
$('.overlay .close').click(function() {
  closeOverlay();
});

// close when clicked outside of element
$('body').on('touchstart click', '.backdrop', function() {
  closeOverlay();
});

// close on esc key
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    closeOverlay();
  }
});

function closeOverlay() {
  $('.backdrop').remove();
  $('.overlay').removeClass('open');
  $('body').removeClass('overlay-open');
}
