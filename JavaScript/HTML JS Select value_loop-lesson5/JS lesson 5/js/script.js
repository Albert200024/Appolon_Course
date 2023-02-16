// function getName() {
// 	var x = document.getElementById('anun').value;
// 	document.getElementById("text").innerHTML = x + " tarekan";
// }

// var x = 0;

// while(x < 10){
// 	x += 2
//    console.log(x);
//    // x += 2  
// 

// for(let i = 0; i < 100; i+= 2){
// 	console.log(i)
// }


// var count = 0;

// for(let i = 0; i < 100; i++){
// 	if(i % 3 == 0 && i % 5 == 0 && i != 0){
// 		console.log(i)
//         count++
// 	}
// }

// console.log(count)

// for(let i = 0; i < 10; i++){
// 	for(let g = 0; g < 10; g++){
// 		  document.write("* &nbsp;&nbsp;")
// 	}
// 	document.write("<br>")
// }

// for(let i = 0; i < 10; i++){
//  	for(var g = 0; g < 10 - i; g++){
// 		  document.write("* &nbsp;&nbsp;");

//  }
// 	document.write("<br>")
// }

// for(let i = 0; i < 100; i++){
// 	for(let j = i + 1; j < 100; j++){
// 		for(let k = j + 1; k < 100; k++){
//             if(i * i + j * j == k * k){
//             	 console.log(i, j, k)
//             }
//  		}
// 	}
// }

// loop:
// for(let i = 0; i < 100; i++){
// 	loop1:
//  	for(let j = 0; j < 100; j++){
//  		loop2:
// 		for(let k = 0; k < 100; k++){
// 			console.log(i, j, k)
//               if(k == 50){
//               	  break loop;
//               }     
//  		}
//  	}
//  }

for(let i = 0; i < 100; i++){
	if(i % 2 == 0){
		continue
	}
	console.log(i)
}