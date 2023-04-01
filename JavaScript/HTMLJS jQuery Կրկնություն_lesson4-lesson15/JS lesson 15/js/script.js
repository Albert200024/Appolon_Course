$("document").ready(function (){
  $(".drink_blockBtn").click(function (){
       $(".eat_Block").addClass("hideBlock");
       $(".drink_block").addClass("showBlock");
        $(this).addClass("active");
       $(".eatBlockBtn").removeClass("active");
  })

  $(".eatBlockBtn").click(function (){
      $(".drink_blockBtn").removeClass("active");
      $(".eatBlockBtn").addClass("active");
      $(".eat_Block").removeClass("hideBlock");
      $(".drink_block").removeClass("showBlock");
  })
})