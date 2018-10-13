
var isIE = /*@cc_on!@*/false || !!document.documentMode, // Internet Explorer 6-11
    isEdge = !isIE && !!window.StyleMedia; // Edge 20+

AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile'
});

if (tilt != null) {
    tilt.tilt.destroy.call(tilt);
}
var tilt = $('.image-container').tilt({
    maxTilt: 15,
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,    // Speed of the enter/exit transition.
    transition: true,   // Set a transition on enter/exit.
    disableAxis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    glare: false,  // Enables glare effect
    maxGlare: 1       // From 0 - 1.
});


// Check if Internet Explorer 6-11 OR Edge 20+
if (isIE || isEdge) {
    if (tilt != null) {
        tilt.tilt.destroy.call(tilt);
    }
}

$("#scrollto").click(function () {
    $('html, body').animate({
        scrollTop: $(".showcase-grid-container").offset().top - 100
    }, 700);
});