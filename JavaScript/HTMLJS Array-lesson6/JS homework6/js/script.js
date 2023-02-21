// Exersize 1
let arr1 = [1, 87, 10, 10, 25, 32, 4];

let min = arr1[0];
for(let i = 0; i < arr1.length; i++){
   if(arr1[i] <  min){
      min = arr1[i];
   }
}

console.log("Exersize 1:" + min);

// Exersize 2
let arr2 = [14, 2, 98, 1, 125, 47, 325, 3, 54, 8];

let max1 = arr2[0];
let index = 0;
for(let i = 0; i < arr2.length; i++){
    if(max1 < arr2[i]){
        max1 = arr2[i];
        index = i;
    }
}
arr2.splice(index, 1);

let max2 = arr2[0];
for(let i = 0; i < arr2.length; i++){
    if(max2 < arr2[i]){
        max2 = arr2[i];
    }
}
console.log("Exersize 2:" + max2);

// Exersize 3;
let arr3 = [14, 27, 5, 789, 21, 35, 5, 87, 9];
let sum = 0;

for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}

console.log("Exersize 3:" + parseInt(sum / arr3.length));

// Exersize 4;
let arr4 = [12, 54, 2, 6, 49, 118, 7, -14, 36, 14, 1];

let max = arr4[0];
let maxIndex = 0;
let min4 = arr4[0];
let minIndex = 0;

for(let i = 0; i < arr4.length; i++){
   if(arr4[i] > max){
      max = arr4[i];
      maxIndex = i;
   } else if (arr4[i] < min4){
      min4 = arr4[i];
      minIndex = i;
   }
}

arr4[maxIndex] = min4;
arr4[minIndex] = max;

console.log("Exersize 4", arr4);

// Exersize 5;
// Զանգվածը շրջել օրինակ ունեք հետևյալ զանգվածը` [25, 41, 78, 61, 1, 9, 48, 96] ստանալ հետևյալ զանգվածը` [96, 48, 9, 1, 61, 78, 41, 25]:
let arr5 = [25, 41, 78, 61, 1, 9, 48, 96];
console.log("Exersize 5", arr5)
let i = 0;
    i2 = arr5.length - 1;

while(i < arr5.length / 2){
    let lastItem = arr5[i2];
    let skzbiItem = arr5[i]
    arr5[i] = lastItem;
    arr5[i2] = skzbiItem;

    i++
    i2--
}

console.log("Exersize 5", arr5);

// Exersize 6;
// Ստեղծեք երկրորդ զանգված և լրացրեք այն x–ում պահված զանգվածի բոլոր արժեքներով ՝ բազմապատկած 2-ով:
let x = [5, 2, 20, 33, 11, 939, 1, 43, 89348, 95, 8718, 8389];
let newArr = [];

for(let i = 0; i < x.length; i++){
    newArr.push(x[i] * 2);
}

console.log("Exersize 6:", newArr);

// Exersize 7;
// Հաշվել զանգվածի այն տարերի քանակը, որոնք գտնվում են զույգ դիրքում և ունեն 10 -ից մեծ արժեքներ:
let y = [ 4, 3, 9, 2, 5, 15, 16, 2, 17, 20];
let count = 0;

for(let i = 0; i < y.length; i++){
     if(i % 2 == 0 && y[i] > 10){
         count ++;
    } 
}

console.log("Exersize 7:", count);

// Exersize 8;
// Զանգված մեջի զանգվածից ազատվել և սարքել նոր զանգված մեջը քցել հին զանգածի բոլոր էելեմենտները:
let arr8 = [71, 37, [3, 4], 1, 563, "Name", [17, 8, 25]];
let filterArr = [];

for(let j = 0; j < arr8.length; j++){
    if(typeof arr8[j] != "string" && arr8[j].length > 0){
        for(let k = 0; k < arr8[j].length; k++){
            filterArr.push(arr8[j][k])
        }
    } else {
         filterArr.push(arr8[j]);
    }
}

console.log("Exersize 8:", filterArr);

// Exersize 9;
// քառակուսի դարձրեք զանգվածի բոլոր յուրաքանչյուր թվերը և այնուհետև գումարեք իրար:
let arr9 = [1, 2, 88, 125, 58, 99, 17, 52];
let sum9 = 0;

for(let i = 0; i < arr9.length; i++){
    sum9 += arr9[i] * arr9[i];
}

console.log("Exersize 9:", sum9);

// Exersize 10;
// Կա մի շարք թվերով զանգված, վերադարձրեք յուրաքանչյուրի հակադարձ հավելումը: Յուրաքանչյուր դրական դառնում է բացասական, իսկ բացասականը` դրական:
let arr10 = [1, -2, 3, -100, -4, 50, 5, -10, -2500];

for(let i = 0; i < arr10.length; i++){
    if(arr10[i] >= 0){
          arr10[i] = -arr10[i];
    } else {
        let string = "" + arr10[i];
        let strArr = [];
        let number = "";

        for(let j = 0; j < string.length; j++){
            if(j > 0) {
                strArr.push(string[j]);
            }
        }
        for(let i = 0; i < strArr.length; i++){
            number += strArr[i];
        }

        arr10[i] = Number(number);
    }
}    

console.log("Exersize 10:", arr10);
