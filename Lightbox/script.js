$(".imagen").click(function(event) {
    event.preventDefault();
    console.log($(this).attr("href"));
    var href = $(this).attr("href");
    $("body").prepend("<div id='lightbox'><img id='lightbox-img'src="+href+" style='width:auto;height:auto'></div>");
    $("#lightbox").click(function(){
        console.log('borrado');
        $('#lightbox').remove();
    })
})



