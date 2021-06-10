$( document ).ready(function() {
    console.log( "ready!" );
    $("#hide").click(function(){
        $(".popup").fadeIn(300);
        $("body").css("overflow","hidden");
    });
    $(".pop-back").click(function(e){
        $(".popup").fadeOut(300);
        $("body").css("overflow","visible");
    });
});