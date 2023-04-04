$(document).ready(function(){
    $(".btn_createSelector").click( function(){
        $(".selectBlock").empty()
        let elem = $("<select class='sel'></select>");
        elem.css("margin-bottom", "10px")
        elem.appendTo(".selectBlock")

        for(let i = 0; i < 5; i++){
            let num = parseInt(Math.random() * 100)
            let option = $("<option></option>");
            option.html(num);
            option.val(num);
            option.appendTo(".sel");
        }

    })

    $(".del_selector").click(function (){
        $(".selectBlock").empty()
    })

    let arr = []

    $(".save").click(function (e){
         let inputVal = $("input").val();
         arr.push(inputVal)
    })

    $(".addSelector").click(function (){
        $(".selBlock").empty()
        let sel = $("<select class='sel'></select>")

        sel.css("margin-top", "8px")
        sel.appendTo(".selBlock");

        for(let i = 0; i < arr.length; i++){
                let op = $("<option></option>")
                op.html(arr[i])
                op.appendTo(".sel")
         }
    })
})
