// character countdown
$(document).ready(function() {
  $('textarea').on('input', function(){
  var useript =  $(this).val().length ;
  const starting = 140;
  var remaining = starting - useript
  if (remaining < 0){
    $('.counter').text(remaining)
    $( ".counter" ).addClass( "invalid" );
  } else {
    if ($( ".counter" ).hasClass("invalid")) {
      $( ".counter" ).removeClass( "invalid" )
    } else {
      $('.counter').text(remaining)
    }
  }
  });

});