//마인수방 침공

$(".open-modal").click(function(){
    //$(".modal").css("display","block")
    $(".modal").show();
})

//알파카 수방의 저력

$(".close-modal").click(function(){
    //$(".modal").css("display","none")
    $(".modal").hide();
})

//중국수방의 대항엉덩컷을 필두로 금기의 변신, 그레이트 마인수박ex
$(".btn-gal").click(function(){
    $(".gal").show();
    $(".notice").hide();

    $(".btn-gal").css("background-color","brown")
    $(".btn-notice").css("background-color","#cccccc")
})



//봉인이 풀린 샌조디아의 난입과 그레이트 마인수박ex와의 자극적인 맛남
$(".btn-notice").click(function(){
    $(".notice").show();
    $(".gal").hide();

    $(".btn-notice").css("background-color","brown")
    $(".btn-gal").css("background-color","#cccccc")
})



//샌조디아와 그레이트 마인수박ex의 격돌, 땅이 흔들리고 하늘이 울리는 우주적 존재들의 전투
$(".gnb>li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
})

$(".gnb>li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
})
