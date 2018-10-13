
if (typed == null) {
    var typed = new Typed('#typewriter', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 50,
        cursorChar: "_",
        shuffle: false,
        smartBackspace: false,
        loop: true,
        backDelay: 4000,
    });
} else {
    typed.destroy();
    var typed = new Typed('#typewriter', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 50,
        cursorChar: "_",
        shuffle: false,
        smartBackspace: false,
        loop: true,
        backDelay: 4000,
    });
}

if (window["pJSDom"].length == 0) {
    particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#757575" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.4419226793140727, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 109.63042366068159, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
    // window.pJS_GUI = window.pJSDom[0].pJS;
    // pJS_GUI.particles.move.enable = false;
}else{
    window["pJSDom"][0].pJS.fn.vendors.destroypJS();
    window["pJSDom"] = [];
    particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#757575" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.4419226793140727, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 109.63042366068159, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
}


//home para buttons
//nav bar buttons
$(".wrapper .square a").click(function (e) {
    var url = $(this).attr('href');
    console.log(url);
    e.preventDefault();
    // console.log(url);
    changePage(url);

    if (url != window.location) {
        //add the new page to the window.history
        window.history.pushState({ path: url }, '', url);
    }
    return false;
});