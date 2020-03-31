$(document).ready(function() {
  window.dancers = [];

  $(document).on('click', '#ButtonDancer', function(event) {
    var dancer = new makeDancer(
      $('.dance-space').height() * Math.random(),
      $('.dance-space').width() * Math.random(),
      Math.random() * 1000,
      'dancer--regular'
    );
    $('.dance-space').append(dancer.$node);
  });


  $(document).on('click', '#ButtonBlikyDancer', function(event) {
    var dancer = new makeBlinkyDancer(
      $('.dance-space').height() * Math.random(),
      $('.dance-space').width() * Math.random(),
      Math.random() * 1000,
      'dancer--blinky'
    );
    $('.dance-space').append(dancer.$node);
  });


  $(document).on('click', '#ButtonLineDancer', function(event) {
    $('span').remove();
    var count = 30;
    while (count > 0) {
      var dancer = new makeLineDancer(
        $('.dance-floor').height() * Math.random(),
        $('.dance-floor').width() * Math.random(),
        Math.random() * 1000,
        'dancer--line'
      );
      $('.dance-floor').append(dancer.$node);
      count--;
    }
  });

  $(document).on('click', '#ClearDancer', function(event) {
    $('.dancer').remove();
  });

  $(document).on('mouseenter', '.dancer', function(event) {
    var hoverAnimation = {
      'transform': 'rotateZ(180deg)',
      'animation-name': 'rotate',
      'animation-duration': '1s',
      'animation-iteration-count': 'infinite'
    };
    $(this).css(hoverAnimation);
  });

  $(document).on('mouseleave', '.dancer', function(event) {
    var hoverAnimation = {
      'transform': 'rotateZ(0deg)',
      'animation-name': '',
      'animation-duration': '',
      'animation-iteration-count': 'infinite'
    };
    $(this).css(hoverAnimation);
  });

});

