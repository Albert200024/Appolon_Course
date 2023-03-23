$("document").ready(function (){
   // $(".btn").click(function (){
   //  avelcnel tvjal element verjic
   //     $("body").append("<h1>Hello world</h1>");
   // })

    // $(".btn").click(function (){
    //  avelcnel tvjal elementi skzbic
    //     $("body").prepend("<h1>Hello world</h1>")
    // })
    //
    // $(".btn").click(function(){
    //     $(".btn").after("<h1>Hello world</h1>")
    // })

    // $(".btn").click(function (){
    //     $(this).after("<h1>Hello world</h1>")
    // })

    // $(".btn").click(function (){
    //     $(".btn").before("<h1>Hello world</h1>")
    // })

    // $(".btn").click(function (){
    //     $(this).before("<h1>Hello world</h1>")
    // })

    // $(".btn").click(function (){
    //     var elem = $("<div> </div>");
    //     let r = Math.round(Math.random() * 255)
    //     let g = Math.round(Math.random() * 255)
    //     let b = Math.round(Math.random() * 255)
    //     var rgb = "rgb(" + r + "," + g + "," + b + ")"
    //
    //     elem.html("hello world");
    //     elem.css({
    //         color:"green",
    //         fontSize:"25px",
    //         height:"100px",
    //         marginTop:"25px",
    //         background:rgb
    //     });
    //     elem.attr("id", "div");
    //     elem.addClass("item");
    //
    //     $(this).after(elem)
    // });

    var extion = ["+", "-", "/", "*"];
    $('.create').click(function (){
      $("#test").empty();
      for(let i = 0; i < 10; i++){
          var div = $("<div> </div>");
          var r = parseInt(Math.random() * extion.length);
          var r1 = parseInt(Math.random() * 100);
          var r2 = parseInt(Math.random() * 100);
          var harc = r1 + " " + extion[r] + " " + r2;

          var label = $("<label> " + harc + "</label>");
          var input = $("<input type='number'>");
          div.append(label);
          div.append(input);
          div.addClass("question");
          $("#test").append(div);
      }
    })

    // $(".chek").click(function (){
    //     let x = $(".question input")
    //     for (let i = 0; i < x.length; i++) {
    //          let z = x.eq(i).val();
    //     }
    //
    // });
})