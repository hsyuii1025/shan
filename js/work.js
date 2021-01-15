$(document).ready(function(){
    $(".top").click(function (){
        $('html, body').animate({
            scrollTop: $("#start").offset().top
        }, 1000);
    });

    $(".li_logo").mouseenter(function(){
        $(".li_logo").css("background-color","#FA5738");
    });
    $(".li_logo").mouseleave(function(){
        $(".li_logo").css("background-color","white");
    });

    $(".hamyui").click(function(){
        $(".side_bar").toggleClass("side_bar_click");
    });
});