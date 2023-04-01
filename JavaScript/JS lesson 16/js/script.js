$(document).ready(function (){
    // divi sarjele
  // $("body").click(function (e){
  //     // console.log(e)
  //     // console.log(e.clientX, e.clientY)
  //     let x = e.clientX - 100;
  //     let y = e.clientY - 100;
  //     console.log(x, y);
  //     $(".item").css({
  //         top:y+"px",
  //         left:x + "px",
  //         // transform:"translate(-50%, -50%)"
  //     })
  // })

    // button avelacnel bodium
    // $("#box button").click(function (){
    //     let elem = $("<button class='btn'>click</button>");
    //     elem.appendTo("body");
    // })
    //
    // functiaji on ev of
    // $(document).on("click", ".btn", function (){
    //     alert("ok");
    //     $(document).off("click", ".btn")
    // })

    // aj click sexmelu vaxta ashxatum function
    // $(".item").contextmenu(function (e){
    //     e.preventDefault();
    //     console.log("ok")
    // })

    // klavyaurayi knopkeqi sexmelu vaxta ashxatum
    // $(".text").keydown(function (e){
    //     e.preventDefault();
    //     console.log("ok");
    // })

    let isPresid = false;
    $(".item").on({
        mousedown:() => isPresid = true,
        mouseup:() => isPresid = false,
        mousemove:(e) => {
            if(isPresid){
                let x = e.clientX - 100;
                let y = e.clientY - 100;
                $(".item").css({
                    left:x + "px",
                    top: y + "px"
                })
            }
        }
    })
})