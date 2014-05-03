
$("#montage div[class^=column] .img").hover(function() {
    $(this).children(".blackout").css('opacity','0');
    // $(this).children(".blackout").hide();
},function() {
    $(this).children(".blackout").css('opacity','0.7');
    // $(this).children(".blackout").show();
});

