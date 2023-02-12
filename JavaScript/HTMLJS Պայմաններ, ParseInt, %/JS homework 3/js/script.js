function hashvel(){
    var x = Number(document.getElementById("varkayn").value);
    if(isNaN(x) == true){
        document.getElementById("patasxan").innerHTML = "Մութքագրեք թիվ";
        document.getElementById("patasxan").style = "color:red";
    } 
    else {
        var ore = parseInt(x / 60 / 60 / 24);
        // var ore = parseInt(x / 86400);
        var jam = parseInt((x - ore * 24 * 60 * 60) / 60 / 60);
        // var jam = parseInt((x - (a * 86400)) / 3600;)
        var rope = parseInt((x - ore * 24 * 60 * 60) / 60 % 60);
        // var jam = parseInt((x - ((a * 86400) + (y * 3600))) / 60);
    }

    var patasxan = document.getElementById("patasxan");
    if(ore == 0 && jam > 0 && rope > 0){
         patasxan.innerHTML= jam + " ժամ " + rope + " րոպե";
         patasxan.style = "color:green";
    }
    else if(ore > 0 && jam > 0 && rope > 0){
        patasxan.innerHTML = ore + " օր "+ jam + " ժամ " + rope + " րոպը";
        patasxan.style = "color:green";
    }
    else if(jam == 0 && ore > 0 && rope > 0) {
        patasxan.innerHTML= ore + " օր " + rope + " րոպը";
        patasxan.style = "color:green";
    }
    else if(ore > 0 && jam > 0 && rope == 0){
        patasxan.innerHTML = ore + " օր " + jam + " ժամ";
        patasxan.style = "color:green";
    }
    else if (ore > 0 && jam == 0 && rope == 0){
        patasxan.innerHTML = ore + " օր";
        patasxan.style = "color:green";
    }
    else if (ore == 0 && jam > 0 && rope == 0){
        patasxan.innerHTML = jam + " ժամ";
        patasxan.style = "color:green";
    }
    else if(ore == 0 && jam == 0 && rope > 0){
        patasxan.innerHTML = rope + " րոպը";
        patasxan.style = "color:green";
    }
    else if(rope === 0 && jam == 0 && ore == 0) {
        patasxan.innerHTML= x + " վարկյան";
        patasxan.style = "color:green";
    } 
}

