// 1 exersize
function ast(x, y){
    return x ** y;
}

console.log("Exersize 1:", ast(5, 10));

// 2 exersize
function countWords(text){
    let countWord = 0;
    let textArr = text.split(" ");

    for(let i = 0; i < textArr.length; i++){
        countWord++
    }
    return countWord
}

console.log("Exersize 2:", countWords("Hello my name is Albert"))

// 3 exersize
function revrseWord(text){
    return text.split("").reverse().join("")
}

console.log("Exersize 3:", revrseWord("gndak"));

// 4 exersize
function shuffleText(text){
    let c = text.split("");

    for(let i = c.length - 1; i > 0; i--) {
        let x = parseInt(Math.random() * (i + 1));
        let y = c[i];
        c[i] = c[x];
        c[x] = y;
    }

    return c.join("")
}

console.log("Exersize 4:", shuffleText("albert"));

// 5 exersize
function  newArray (arr){
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == "number" ) {
           if(arr[i] % 2 == 0) newArr.push(arr[i])
        }
    }

    return newArr
}

console.log("Exersize 5:", newArray([2,"2",1,"20","-7",6,"test",-22,4,7,"122",-10,"-4"]))

// 6 exersize
function sumArray(arr){
    let newArr = []
    let sum = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr.push(arr[i])
        }
    }

    for(let i = 0; i < newArr.length; i++){
        sum += newArr[i]
    }

    return sum
}

console.log(sumArray("Exersize 6:", [5, 10, -4, 2, -15, 8]))