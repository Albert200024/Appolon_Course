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
console.log("Exersize1 :", countWordA);

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
function isIsogram(text){
  let text1 = text.toLowerCase();
  let arrText = text.split("");
  let count = 0;

  for(let i = 0; i < text1.length; i++){
      let x = text1[i];
      for(let j = i + 1; j < arrText.length ; j++){
          if(x == arrText[j]) count++
      }
  }

  return count == 0 ? true : false;
}

let isIsogramResult = isIsogram("Armen");
console.log("Exersize3 :", isIsogramResult);

// Exersize 4
function replaceV2(text, a, b){
  let arrText = text.split("");
  let newArr = [];

  let x = 0;
  let y = 0;

  if(!text.includes(a)){
      return arrText.join("")
  } else {
    for(let i = 0; i < a.length - 1; i++){
         if(i == 0) {
             x = text.indexOf(a[i]);
             y = text.indexOf(a[i]);
         }
         y++
    }

    for (let i = 0; i < text.length; i++) {
          if(i < x){
             newArr.push(text[i])
          }  else if(i >= x && x <= y){
              newArr.push(b);
              break
          }
      }

    for(let i = y + 1; i < text.length; i++){
        newArr.push(text[i])
    }
  }

  return newArr.join("")
}

let replaceText = replaceV2("i heat js", "heat", "love")
console.log("Exersize4 :", replaceText);

// Exersize 5
function isPalindrom(text){
  return text == text.split("").reverse().join("") ? true : false;
}

let isPalindromResult = isPalindrom("name");
console.log("Exersize5 :", isPalindromResult);