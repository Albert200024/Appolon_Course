// function hashvel(){
//     var x = Number(document.getElementById("tiv1").value);
//     var y = Number(document.getElementById("tiv2").value);
//     var z = Number(document.getElementById("tiv3").value);
    
//     var res;

//     if(x > y && x > z){
//         res = x;
//     } 
//     else if(y > x && y > z){
//         res = y;
//     }
//     else{
//         res = z
//     }

//     document.getElementById("patasxan").innerHTML = res
// }

function hashvel(){
    var p1 = Number(document.getElementById("p1").value);
    var p2 = Number(document.getElementById("p2").value);
    var p3 = Number(document.getElementById("p3").value);
    var p4 = Number(document.getElementById("p4").value);
    var p5 = Number(document.getElementById("p5").value);
    var p6 = Number(document.getElementById("p6").value);
    var p7 = Number(document.getElementById("p7").value);
    var p8 = Number(document.getElementById("p8").value);
    var p9 = Number(document.getElementById("p9").value);
    var p10 = Number(document.getElementById("p10").value);
    var score = 0;
    
    if(p1 == 2){
        score = score + 2;
        document.getElementById("p1").style="border:2px solid green";
    } 
    else {
        document.getElementById("p1").style="border:2px solid red";
    }

    if(p2 == 3){
        score = score + 2;
        document.getElementById("p2").style="border:2px solid green";
    } 
    else {
        document.getElementById("p2").style="border:2px solid red";
    }

    if(p3 == 4){
        score = score + 2;
        document.getElementById("p3").style="border:2px solid green";
    } 
    else {
        document.getElementById("p3").style="border:2px solid red";
    }

    if(p4 == 10){
        score = score + 2;
        document.getElementById("p4").style="border:2px solid green";
    } 
    else {
        document.getElementById("p4").style="border:2px solid red";
    }

    if(p5 == 6){
        score = score + 2;
        document.getElementById("p5").style="border:2px solid green";
    } 
    else {
        document.getElementById("p5").style="border:2px solid red";
    }

    if(p6 == 25){
        score = score + 2;
        document.getElementById("p6").style="border:2px solid green";
    } 
    else {
        document.getElementById("p6").style="border:2px solid red";
    }

    if(p7 == 12){
        score = score + 2;
        document.getElementById("p7").style="border:2px solid green";
    } 
    else {
        document.getElementById("p7").style="border:2px solid red";
    }

    if(p8 == 10){
        score = score + 2;
        document.getElementById("p8").style="border:2px solid green";
    } 
    else {
        document.getElementById("p8").style="border:2px solid red";
    }

    if (p9 == 15){
        score = score + 2;
        document.getElementById("p9").style="border:2px solid green";
    }
    else {
        document.getElementById("p9").style="border:2px solid red";
    }

    if (p10 == 20){
        score = score + 2;
        document.getElementById("p10").style="border:2px solid green";
    }
    else {
        document.getElementById("p10").style="border:2px solid red";
    }

    if (score < 9){
        document.getElementById("patasxan").innerHTML ="Դուք ստացաք " + score + ", անբավարար գնահատական";
    } 
    else if (score > 8 && score < 16){
        document.getElementById("patasxan").innerHTML = " Դուք ստացաք " + score + ", միջին գնահատական";
    } 
    else {
        document.getElementById("patasxan").innerHTML =" Դուք ստացաք " + score + ", գերազանց գնահատական";
    }
}