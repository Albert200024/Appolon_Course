var bool =false; 
var chap = 200;

function zoom(){ 
if(bool==false){ 
  chap += 50  
  if(chap > 495)
  {
   bool=true; 
  } 
  console.log(chap)
} 
else{ 
    chap -= 50 
    if(chap == 200) 
    {
       bool = false; 
    } 
    console.log(chap)
  } 

  document.getElementById("nkar").style="width:" + chap + "px" + ";" + "height:" + chap + "px";  
}