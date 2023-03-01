document.getElementById('btn').onclick = point;
document.getElementById('clear').onclick = clear;

var x = document.querySelectorAll("div");

// var tox = 0;
// var syun = 0;

// for(let i = 0; i < x.length; i++){
//    x[i].setAttribute("data-tox", tox++);
//    x[i].setAttribute("data-syun", syun++);
// }

var tox = 0;
var syun = 0;

for(let i = 0; i < x.length; i++){
	x[i].setAttribute("data-tox", tox);
	x[i].setAttribute("data-syun", syun++);

	if(syun > 3){
		tox++;
		syun = 0
	}
}

// function point(){
//   for (var i = 0; i < x.length; i++) {
//   	 var dataTox = x[i].getAttribute("data-tox");
//   	 var dataSyun = x[i].getAttribute("data-syun");

//   	 if(dataTox == dataSyun){
//   	 	 x[i].style.background = "orange"
//   	  }	 
//   }
// }


function clear(){
	for (var i = 0; i < x.length; i++) {
		x[i].style.background = "white"
	}
}

function point(){
   for(let i = 0; i < x.length; i++){
   	 var dataTox = Number(x[i].getAttribute("data-tox"));
   	 var datSyun = Number(x[i].getAttribute("data-syun"));
       if((dataTox + datSyun) % 2 == 0){
       	  x[i].style.background = "black"
       }else{
       	  x[i].style.background = "red"
       } 
   }	
}

