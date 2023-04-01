$(document).ready(function (){
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

    $(".chek").click(function (){
        $(".question").each(function (){
            let harc = $(this).find("label").html();
            let patasxan = $(this).find("input").val();

            if(eval(harc) == patasxan){
                $(this).find("input").css({
                    border:"2px solid green",
                })
            } else {
                $(this).find("input").css({
                    border:"2px solid red",
                })
            }
        })
    })
})