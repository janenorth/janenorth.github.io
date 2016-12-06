$(document).ready(function () { 
  console.log('we\'re working!');
});

console.log('here1');

$(document).ready(function() { //once the page has fully loaded, then we run the function
 $(window).scroll(function () {//function is envoked in the event that you scroll within the window 
            if ($(this).scrollTop() > 2) {//if you go past the point of 2 pixels from the top, then add the class fnav to anything with the #nav id
                $('#nav').addClass("f-nav");
            } else {
                $('#nav').removeClass("f-nav"); //otherwise, if you're still in that 2 pixel range, remove f-nav class.
            }
        });

    });
