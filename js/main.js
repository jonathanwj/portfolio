if (window.location.pathname.includes('/code/')) {
    $('body').addClass('nightmode');
} else {
    $('body').removeClass('nightmode');
}

// back button
$(window).on('popstate', function (event) {
    // var url = $(".myNavbar").attr('href');
    // console.log(window.location.pathname);
    changePage(window.location.pathname);
});

//mainHomePage button
$(".title a").click(function (e) {
    var url = $(this).attr('href');
    e.preventDefault();
    // console.log(url);
    changePage(url);

    if (url != window.location) {
        //add the new page to the window.history
        window.history.pushState({ path: url }, '', url);
    }
    return false;
});

//nav bar buttons
$(".myNavbar ul li a").click(function (e) {
    var url = $(this).attr('href');
    e.preventDefault();
    // console.log(url);
    changePage(url);

    if (url != window.location) {
        //add the new page to the window.history
        window.history.pushState({ path: url }, '', url);
    }
    return false;
});

function changePage(url){

    // $("footer").fadeOut().delay(500).fadeIn();
    $("#my-page-body, footer").fadeOut("fast").promise().done(function(){
        if (url.includes('/code/')) {
            $('body').addClass('nightmode');
        } else {
            $('body').removeClass('nightmode');
        }
        $("#my-page-body").load(url + " .page-content", function (html) {
            $.ajaxPrefilter(function (options, original_Options, jqXHR) {
                options.async = true;
            });
            $html = $(html);
            $('#customjs').replaceWith($html.find('#customjs'));
            // var matches = html.match(/<title>([^<]*)/);
            // if (matches.length > 0) {
            //     var title = matches[1];
            //     document.title = title;
            // }
            $("#my-page-body, footer").fadeIn("fast");
        });
    });



    $('.myNavbar ul li').removeClass("active");
    $('.myNavbar ul li a').each(function(index){
        // console.log($(this).attr('href') );
        if(url===$(this).attr('href')){
            $(this).closest('li').addClass("active");
        }
    });
    $("html, body").animate({ scrollTop: 0 }, "fast");

}

