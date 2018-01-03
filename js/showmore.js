
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 90;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Mostrar más >";
    var lesstext = "Mostrar menos";
    console.log(showChar);

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp; <a href="" class="morelink btn btn-default myButt one"> <div class="insider"></div>' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
