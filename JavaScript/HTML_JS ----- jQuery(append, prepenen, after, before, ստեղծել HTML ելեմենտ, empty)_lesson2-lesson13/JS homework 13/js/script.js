$("document").ready(function (){
    $(".create").click(function (){
        $("table").empty()
        let tox = $(".tox").val();
        let syun = $(".syun").val();
        let table = $("<table></table>");
        table.css("margin-top", "10px")

        for (let i = 0; i < tox; i++) {
            let tr = $("<tr></tr>")
            tr.css({border:"1px solid"})
            for(let j = 0; j < syun; j++){
                let num = parseInt(Math.random()*500)
                    let td = $(`<td>${num}</td>`)
                td.css({
                    padding:"10px",
                    border:"1px solid red",
                    color:"red",
                    borderRadius:"10px",
                })

                tr.append(td)
            }
            table.append(tr)
        }

        $(".clear").after(table)
    });

    $(".clear").click(function (){
        $("table").empty()
    })
})