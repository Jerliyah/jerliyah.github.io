
// Fill in <main> with divs
for(var counter = 0; counter < 5200; counter++) {
    $("main").append("<div></div>");
}


// Prevent default div drag
$("main").ondragstart = function () { return false; };
$("div").ondragstart = function () { return false; };


// Clear board funtionality
$("#clear-btn").click(function() {
    $("div").css({ "background":"transparent"});
});


// Mouse press and drag to draw
$(window).mousedown( function() {
    $("div").on("mouseenter", function() {
        $(this).css({ "background":"black"});
    });
});
$(window).mouseup( function() {
    $("div").off();
});


/* Change Background */
// Array of images
var images = ["highway.gif", "in-town.gif", "sail-in-city.gif", "watering-shop.gif"];
var imgIndex = -1;

// Cycle through images on click of button in header
$("#change-btn").click( function() {
    imgIndex++;

    if(imgIndex > images.length - 1) {
        imgIndex = 0;
    }

    //Apply selected images to body's background
    $("body").css({ "background-image":"url(img/" + images[imgIndex] + ")" });
});
