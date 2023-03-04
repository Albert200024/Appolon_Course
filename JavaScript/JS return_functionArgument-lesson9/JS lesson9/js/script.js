// let [a, b, x] = [52, 45, "Yusuf"];
// function hello(x = "name"){
//   console.log("hello " + x)
// }

// hello();

// function hello(x){
// 	 console.log("hello " + x)
// }

// hello("name2")

// function hello(x) {
// 	console.log("Hello " + x)
// }

// hello()

// function hello(x){
// 	if(typeof x == "undefined"){
// 		x = "name3"
// 	}

//     console.log("Hello " + x);
// }

// hello()

// function qarakusi(x){
// 	return x * x
// }

// var y = qarakusi(5);
// console.log(y)

// function qarakusi(x){
// 	return x * x;
// }

// var y = qarakusi(qarakusi(5));
// console.log(y);

// function qarakusi(x){
//    return x**10;
// }

// var y = qarakusi(25);
// console.log(y);

// function max(x, y){
// 	if(x > y){
// 		return x;
// 	} else {
// 		return y;
// 	}
// }

// var a = max(5, 25);
// console.log(a)

// function max(x, y){
// 	if(x > y){
// 		return x;
// 	}

// 	return y;
// }

// var a = max(max(14, 98), max(125, 5658856));
// console.log(a)

// function max(x, y){
// 	return (x > y) ? x : y; 
// }

// var a = max(max(14, 98), max(125, 5658856));
// console.log(a)

// function max(x, y, z){
//   if(x > y && x > z){
//   	  return x
//   } else if (y > x && y > z){
//   	  return y
//   }

//   return z
// }

// var a = max(max(5, 789, 2), max(3, 125, -4), max(1, 14, 8));
// console.log(a)

// function max(x, y, z){
//   var m = (x > y) ? x : y;
//   return (m > z) ? m : z
// }

// var a = max(max(5, 789, 2), max(3, 125, -4), max(1, 14, 8));
// console.log(a);

function substringV2(text, start, end){
   var x = "";

   for(let i = 0; i < text.length; i++){
   	   if(i  >= start && i <= end){
   	   	  x += text[i];
   	   }
   }

   return x;
}

var y = substringV2("havlibarddd", 6, 10);
console.log(y);





