$(document).ready(function(){
    // $(".close").click(function (){
    //     $(".box").hide(500)
    // })
    //
    // $(".open").click(function(){
    //      $(".box").show(500)
    // })
    //
    // $(".toggle").click(function (){
    //      $(".box").toggle(500)
    // })

    // $(".close").click(function (){
    //     $(".box").fadeOut(500)
    // })
    //
    // $(".open").click(function (){
    //     $(".box").fadeIn(500);
    // })
    //
    // $(".toggle").click(function (){
    //     $(".box").fadeToggle();
    // })

    // $(".close").click(function (){
    //     $('.box').slideUp();
    // })
    //
    // $(".open").click(function (){
    //     $(".box").slideDown()
    // })
    //
    // $(".toggle").click(function (){
    //    $(".box").slideToggle();
    // }

    // $(".btn").click(function (){
    //     $("div").addClass("box")
    // })

     // $(".btn").click(function (){
     //     $(".box").css("left", "200px")
     // })

     // $(".btn").click(function (){
     //     $(".box").css({
     //         left:"50px",
     //         top:"50px",
     //         "margin-top":"50px",
     //         textAlign:"center",
     //     })
     // })

    $(".btn").click(function (){
        $(".box").animate({
            left:"200px"
        })

        $(".box").animate({
            top:"200px"
        })
        
        $(".box").animate({
             left:"0"
        })

        $(".box").animate({
             top:"0"
        })
    })

    $("h2").click(function(){
          $(this).toggleClass("tit")
    })

})