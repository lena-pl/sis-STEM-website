$(document).ready(function() {
    var $navButton = $("nav button");
    var $navUl = $("nav ul");

    $navButton.click(function() {
        $navUl.slideToggle();
    });

    $(window).resize(function() {
        $("nav ul").css('display', '');
    });

});