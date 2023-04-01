$(document).ready(function(){
    $(document).on("click", ".btn_createSelecter", function(){
        console.log("hayer")
        $(document).off("click", ".btn_createSelecter")
    })
})