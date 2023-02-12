var size = 200;
var bool = false;

function zoom(){
    if(bool === false){
       size += 50;
       if(size == 500){
          bool= true;
       }
    }
    else {
        size -=50;
        if(size == 200){
            bool = false;
        }
    }

    document.getElementById("img").style = "width:" + size + "px" + ";" + "height:" + size + "px";
}