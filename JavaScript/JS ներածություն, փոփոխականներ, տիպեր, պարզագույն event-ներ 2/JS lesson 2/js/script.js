// function hashvel(){
// 	var x = Number(document.getElementById('tiv').value);
// 	// console.log(x);
// 	var a = parseInt(x / 1000);
// 	// console.log(a)
// 	var b = parseInt((x - a * 1000) / 100)
// 	// console.log(b)
// 	var c = parseInt((x - a * 1000 - b * 100) / 10);
  
// 	var d = x % 10;
// 	// console.log(a, b, c, d);
// }

// function hashvel(){
//     var x = Number(document.getElementById("tive").value);
//     // console.log(x)
//     var res;
//     if(isNaN(x) == false && x > 0){
//           res = x + " tarekan";
//     } else {
//     	  res = " mutqagrvace tiv che";
//     }

//     document.getElementById("patasxan").innerHTML = res
// }

function hashvel(){
   let tiv1 = Number(document.getElementById("tiv1").value);
   let tiv2 = Number(document.getElementById("tiv2").value);
    
   let res1;
   
   if (isNaN(tiv1) == false && isNaN(tiv2) == false && tiv1 > tiv2){
   	  res1 = tiv1
   } 

   if(isNaN(tiv1) == false && isNaN(tiv2) == false && tiv1 < tiv2){
   	  res1 = tiv2
   }

   if(isNaN(tiv1) == false && isNaN(tiv2) == false && tiv1 == tiv2){
   	  res1 = "tvere havasar en"
   }

   else {
   	 res1 = "tiv chi mutqagrace "
   }

   document.getElementById("patasxan").innerHTML = res1
}