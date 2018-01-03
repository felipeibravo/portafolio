/*
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    scrollPercent = (s / (d - c)) * 100;
    var position = scrollPercent;

    var p1 = $("#progressbar"), p2 = $("#progressbar2");

    if(isScrolledIntoView(p1)) {
        var val = 0, delay = 32, timer;        
        timer = setInterval(function() {
            p1.attr('value', val++);
            if(val>=position) clearInterval(timer);
        },delay);

    }
});
*/