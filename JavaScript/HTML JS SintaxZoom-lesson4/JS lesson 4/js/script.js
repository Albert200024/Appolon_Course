//  var x = 0;

// function fu1(){
//    x = x + 1;
//    var guyn;

//    if(x % 2 == 0){
//       guyn = "green";
//    }
//    else {
//       guyn = "red";
//    }

//    document.getElementById("patasxan").innerHTML = x;
//    document.getElementById("patasxan").style.color = guyn;
// }

// var x = 5;
// var x = 10;
// x = 15

// let x = 5;
// let y = 10;
// let y = 10
// console.log(x)

// let x = 5;
// // var x = 10;
// x = 15;

// console.log(x);

// const x = 5;
// const x = 10;
// x = 15;
// console.log(x);

// var x = 1;
// x = x + 1;
// x += 1;
// x++;
// ++x;
// ++x;
// console.log(x);

// var x = 4;
// var y = x++;
// console.log(x, y);

// var x = 4;
// var y = ++x;
// console.log(x, y);

var bool = false;

function zoom(){
  if(bool == false){
  	 document.getElementById("img").style="width:800px; height: 500px; transition:1s";
  	 bool = true
  }
  else {
  	 document.getElementById("img").style="width:400px; height: 200px; transition:1s";
  	 bool = false
  }
}