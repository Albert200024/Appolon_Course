// for(let i = 1; i <= 10; i++){
// 	for(let j = 0; j <= 10; j++){
// 		let r = i * j
// 		console.log(i,"*", j ,"=" , r )
// 		if(r = 10){
// 			 break
// 		}
// 	}
// }
// var x =5;
// for(let i = 1; i <= 10; i++){
// 	console.log(i + "*" + x + "=" + i * x  )
// } 

var div = document.querySelectorAll("div");
// console.log(div);
// div[0].style.background= "red";
// console.log(div[16]);

// div[0].onclick = function () {
// 	alert("ok")
// }

// div[1].onclick = myBg;

// function myBg(){
// 	 alert("ok")
// }

// for(let i = 0; i < div.length; i++){
// 	div[i].onclick = myBg;
// }

// function myBg() {
// 	this.style.background= "red";
// }

for(let i = 0; i < div.length; i++){
	 div[i].onclick = myBg
}

function myBg(){
   var r = parseInt(Math.random() * 255);	
   var g = parseInt(Math.random() * 255);
   var b = parseInt(Math.random() * 255);
   var color = "rgb(" + r + "," + g + "," + b + ")";

   for(let i = 0; i < div.length; i++){
   	 div[i].style.background = "white"
   }
   this.style.background = color;
}