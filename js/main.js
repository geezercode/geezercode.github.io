$('#close').on('click', function() {
  $('.aboutoverlaycontainer').fadeOut();
  $('section').addClass('foreground');
  $('nav').addClass('navactive');
  $('.colscontainer').addClass('colscontaineractive');
  $('.addnotebutton').addClass('addnotebuttonactive');
  
});

$('#addbutton').on('click', function() {
  $('section').removeClass('foreground');
  $('.addnote').addClass('addnoteactive');
  $('.addnote').fadeIn();
  $('.addnotebutton').fadeOut();
});

$('#addnoteconfirm').on('click', function(e) {
  e.preventDefault();
  $('.colscontainer').prepend("<section><p>" + $('#addnotetext').val() + "</p></section>");
  $('section').addClass('foreground');
  $('.addnote').fadeOut();
  $('.addnotebutton').fadeIn();
  $('#addnotetext').val('');
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".colscontainer section").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(100,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(100,0);}
      }
    });
  }).scroll(); 
});

