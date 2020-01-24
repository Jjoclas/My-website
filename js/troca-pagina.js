
$('.btn-portifolio').on('click', function (){
    $(".second-page").css("transform", "translateY(-80.5vh)"),
    $(".second-page").css("z-index", "1"),
    $(".second-page").css("transition", " 1s")
 
    $(".third-page").css("transform", " translateY(80.5vh)"),
    $(".third-page").css('z-index', "0"),
    $(".second-page").css("z-index", "0")

  })

$('.btn-curriculo').on('click', function (){  
    $(".third-page").css("transform", " translateY(-80.5vh)"), 
    $(".third-page").css('z-index', "1"),
    $(".third-page").css("transition", " 1s") 
  
    $(".second-page").css("transform", " translateY(80.5vh)"),
    $(".second-page").css('z-index', "0"),     
    $(".third-page").css('z-index', "0")   

})
