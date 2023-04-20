$(document).ready(function (){

$(".sendBtn").click((e) => {
        let nameInput = $(".contactNameInput").val();
        let emailInput = $(".contactEmailInput").val();
        let phoneInput = $(".contactPhoneInput").val();
        let messageTextera = $(".contactTextarea").val();
        console.log(nameInput, emailInput, phoneInput, messageTextera)

        if(phoneInput == "" && nameInput == "" && phoneInput == "" && messageTextera == ""){
            $(".contInp").addClass("borderInpur")


            $(".phoneInputSpan, .nameInputSpan").css({
                fontSize:"12px",
                color:"red",
                textAlign:"right"
            })

            $(".phoneInputSpan").html("Only numbers are required");
            $(".nameInputSpan").html("The text field is required.")

        } else if (phoneInput == ""){
            $(".phoneInput").css("border-bottom", "1px solid red");
            $(".phoneInputSpan").css({
                fontSize:"12px",
                color:"red",
                textAlign:"right"
            })

            $(".phoneInputSpan").html("Only numbers are required");
        } else if(nameInput == ""){
            $(".nameInput").css("border-bottom", "1px solid red");
            $(".nameInputSpan").css({
                fontSize:"12px",
                color:"red",
                textAlign:"right"
            })

            $(".nameInputSpan").html("The text field is required.");
        }else {
            if(isNaN(Number(phoneInput))) {
                $(".phoneInput").css("border-bottom", "1px solid red");
                $(".phoneInputSpan").css({
                    fontSize:"12px",
                    color:"red",
                    textAlign:"right"
                })
                $(".phoneInputSpan").html("Only numbers are required");
            } else {
                $(".phoneInput").css("border", "none");
                $(".phoneInputSpan").empty()
            }

            $(".nameInput").css("border", "none");
            $(".nameInputSpan").empty();
        }
    })
})