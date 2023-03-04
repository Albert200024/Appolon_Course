// Exersize 1
function countA(text){
   let cout = 0;
   
   let textArr = text.split("");
   for(let i = 0; i < textArr.length; i++){
       if(textArr[i] == "a"){
         cout++;
       }
   }

   return cout;
}

let countWordA = countA("Name Anna");
console.log("Exersize1 :", countWordA)

// Exersize 2
function sum(arr){
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
     sum += arr[i];
  }

  return sum;
}

let sumArr = sum([1, 2, 3, 4, 5]);
console.log("Exersize2 :", sumArr);

// Exersize 3
function replaceV2(text, a, b){
    return text, a, b;
}

let replaceText = replaceV2("i hate js", "hate", "love");
console.log(replaceText); 