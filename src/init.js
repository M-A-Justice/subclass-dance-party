$(document).ready(function() {
  window.dancers = [];

  $(document).on('click', '#ButtonDancer', function(event) {
    var dancer = new makeDancer(
      $('.dance-space').height() * Math.random(),
      $('.dance-space').width() * Math.random(),
      Math.random() * 1000
    );
    $('.dance-space').append(dancer.$node);
  });


  $(document).on('click', '#ButtonBlikyDancer', function(event) {
    var dancer = new makeBlinkyDancer(
      $('.dance-space').height() * Math.random(),
      $('.dance-space').width() * Math.random(),
      Math.random() * 1000
    );
    $('.dance-space').append(dancer.$node);
  });


  $(document).on('click', '#ButtonLineDancer', function(event) {
    $('span').remove();
    var count = 20;
    while (count > 0) {
      var dancer = new makeLineDancer(
        $('.dance-floor').height() * Math.random(),
        $('.dance-floor').width() * Math.random(),
        Math.random() * 1000
      );
      $('.dance-floor').append(dancer.$node);
      count--;
    }
  });

  $(document).on('click', '#ClearDancer', function(event) {
    $('span').remove();
  });

});

