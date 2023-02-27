document.getElementById('clear').onclick = clear;
document.getElementById('point1').onclick = point1;
document.getElementById('point2').onclick = point2;
document.getElementById('point3').onclick = point3;
let bool = false; 

let divAll = document.querySelectorAll(".box");
let tox = 0;
let syun = 0;

for(let i = 0; i < divAll.length; i++){
    divAll[i].setAttribute("data-tox", tox);
    divAll[i].setAttribute("data-syun", syun++);

    if(syun > 4){
        tox++;
        syun = 0;
    }
}

function point1(){
        let count = divAll.length - 1;
        for(let i = 0; i < divAll.length; i++){
            var dataSyun = divAll[i].getAttribute("data-syun");
            var dataTox = divAll[i].getAttribute("data-tox");

            if (bool == false){
                if(dataSyun == dataTox){
                    divAll[i].style.background="red";
                }
                if(i == count) bool = true;
            }  
            else {
                if(dataSyun == dataTox){
                    divAll[i].style.background="white";
                }
                if(i == count) bool = false;
            }
        } 
}


function point2(){
    let divAllLength = divAll.length - 1;
    for(let i = 0; i < divAll.length; i++){
        let dataSyun = divAll[i].getAttribute("data-syun");
        let dataTox = divAll[i].getAttribute("data-tox");
        
        let r = parseInt(Math.random() *255);
        let g = parseInt(Math.random() *255);
        let b = parseInt(Math.random() *255);
        
        if(bool == false){
            if(dataSyun > dataTox){
                divAll[i].style.background="rgb(" + r + "," + g + "," + b + ")";
            } 
            if (i == divAllLength) bool = true
        } else {
            if(dataSyun > dataTox){
                divAll[i].style.background= "white";
            } 
            if(i == divAllLength) bool = false
        }
    } 
}

function point3(){
    for(let i = 0; i < divAll.length; i++){
        let dataSyun = divAll[i].getAttribute("data-syun");
        let dataTox = divAll[i].getAttribute("data-tox");

        let r = parseInt(Math.random() *255);
        let g = parseInt(Math.random() *255);
        let b = parseInt(Math.random() *255);

        if(bool == false){
            if(dataSyun < dataTox){
                divAll[i].style.background="rgb(" + r + "," + g + "," + b + ")";
            } 
            
            if(i == divAll.length - 1) bool = true    
        } else{
            if(dataSyun < dataTox){
                divAll[i].style.background="white";
            }
            
            if(i == divAll.length - 1) bool = false
        }
    }
}

function clear(){
    for (let index = 0; index < divAll.length; index++) {
        divAll[index].style.background="white";
    }
}

var input = document.getElementById("input");
document.getElementById("show").onclick = showFunc

var countClick = 0;
function showFunc(){
    countClick++;

    if(countClick % 2 == 0){
        input.type="text";
    } else {
        input.type = "password";
    }
}
