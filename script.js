<<<<<<< HEAD
$(document).ready(function() {
    
    $(".red").click(function() {
        $(this).fadeOut();             
    });
    
    $(".green").click(function () {
        $(".blue").hide();
    });
    
    $(".yellow").click(function() {
        $(".blue").fadeIn();
        $(".green").hide();
    });
    
    $(".blue").click(function () {
        $(".red, .green, .blue, .yellow").fadeToggle();
    });
});
=======

>>>>>>> master
