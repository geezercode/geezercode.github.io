//  Gerenal outstanding list
//
//  Fix error with icons
//  use an overlay image to add a note, put it on the bottom right of the screen so it can stay up for the entire session
//  Add buttons on the image, "Add Note" and "Close"  
//  ( just for the user's web session / proof of concept). Add "add note" or 
//  "view existing notes"/
//  sort the design out! header, fonts and colors are weak. 
//  pleeeease, code validation
//  github / host on markruder.com/notetherapy 
//  re-qa
//  maybe, if time allows - configure paralax for notes / a background image (reseach design here)
// 
//  pseudo code for outstanding items 
//
// when the add note image is selected, open a input window. allow user to type in window 
// and select the class assigned to be assigned to the note. Maximum character limit is 140 (review maxlength attrib.) 
// When the "done" button is selected prepend content to #colscontainer

//  sort the design out! 
// 
// 

// var stickyNavOffset = $('.sticky-nav-wrapper').offset().top;

$('#close').on('click', function() {
	$('.aboutoverlay').fadeOut();
	$('section').addClass('foreground');
	$('nav').addClass('navactive');
	$('.colscontainer').addClass('colscontaineractive');
	$('.addnotebutton').addClass('addnotebuttonactive');
});

$('#addbutton').on('click', function() {
	$('section').removeClass('foreground');
	$('.addnote').addClass('addnoteactive');
	$('.addnote').fadeIn();
});

$('#addnoteconfirm').on('click', function(e) {
	e.preventDefault();
    $('.colscontainer').prepend("<section><p>" + $('#addnotetext').val() + "</p></section>");
    $('section').addClass('foreground');
    $('.addnote').fadeOut();
});

$('#addnoteclose').on('click', function(e) {
	e.preventDefault();
	$('.aboutoverlay').fadeOut();
	$('section').addClass('foreground');
	$('.addnote').hide();

});


