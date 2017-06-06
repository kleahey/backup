$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });
});

$("#navbar-links-contact").hover(function(){
    $(this).css("background-color", "#dbdfe0");
    }, function(){
    $(this).css("background-color", "#a1d4c8");
});

$("#navbar-links-portfolio").hover(function(){
    $(this).css("background-color", "#dbdfe0");
    }, function(){
    $(this).css("background-color", "#a1d4c8");
});

$("#navbar-links-about").hover(function(){
    $(this).css("background-color", "#dbdfe0");
    }, function(){
    $(this).css("background-color", "#a1d4c8");
});

$("#navbar-links-blog").hover(function(){
    $(this).css("background-color", "#dbdfe0");
    }, function(){
    $(this).css("background-color", "#a1d4c8");
});

$("#navbar-links-fb").hover(function(){
    $(this).css("background-color", "#dbdfe0");
    }, function(){
    $(this).css("background-color", "#a1d4c8");
});

$("#navbar-links-twitter").hover(function(){
    $(this).css("background-color", "#dbdfe0");
    }, function(){
    $(this).css("background-color", "#a1d4c8");
});

$("#navbar-links-linkedin").hover(function(){
    $(this).css("background-color", "#dbdfe0");
    }, function(){
    $(this).css("background-color", "#a1d4c8");
});

$("#navbar-links-insta").hover(function(){
    $(this).css("background-color", "#dbdfe0");
    }, function(){
    $(this).css("background-color", "#a1d4c8");
});