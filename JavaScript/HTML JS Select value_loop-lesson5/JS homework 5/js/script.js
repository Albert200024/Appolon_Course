// Exercise 1
function hashvel(){
    let patasxan = document.getElementById("patasxan");
    let course_count = Number(document.getElementById("course_count").value);
    let course_front = document.getElementById("cours_frontend").value;
    let course_back =  document.getElementById("cours_backend").value;
    let course_designer = document.getElementById("cours_designer").value;
    let result;
    var zexch = 0;
    var zexchvacGin;

    if(isNaN(course_count) == false){
        result = course_count * (Number(course_front) + Number(course_back) + Number(course_designer));
        if(result >  299999){
            zexch = (result / 100) * 30;
            zexchvacGin = result - zexch;
        }
    }

    if(zexch > 0){
        patasxan.innerHTML = "Հարգելի ուսանող, Դուք պետք է վճարեք " + result +  " դրամ, սակայն ստանում եք 30% զեղչ և վերջնական գումարը կազմում է " + zexchvacGin + " դրամ։" 
    } else if(zexch == 0 ){
        patasxan.innerHTML = "Հարգելի ուսանող, Դուք պետք է վճարեք " + result +  " դրամ:"
    } else {
        patasxan.innerHTML ="Հարգելի ուսանող պետք է անպայման մուքագրեք թիվ։"
    }
    
}

// Exercise 2
let eranishTver = document.getElementById("eranishTver");
let result1 = "";

for(let i = 0; i < 1000; i++){
    if(i >= 100 && i % 2 == 0){
         result1 += " " + i;
    }
}

eranishTver.innerHTML=result1;

// Exercise 3
let erknishTver = document.getElementById("erknishTver");
let result2 = "";

for(let i = 10; i < 100; i++){
     if (i % 3 == 0 && i % 5 == 0){
        result2 += " FIZBAZ ";
    } else if(i % 3 == 0){
        result2 += " FIZ ";
    } else if( i % 5 == 0){
        result2 += " BAZ ";
    } else {
        result2 += " " + i;
    }
}

erknishTver.innerHTML = result2;

// Exercise 4
let fibonachiPatasxan = document.getElementById("fibonachiPatasxan");
let a = 0;
let b = 1;
let gumar;
let print = "";

for(let i = 0; i < 100; i++){
    gumar = a + b;
    a = b;
    b = gumar;
    print += " " + a;
}
 
if(print != ""){
    fibonachiPatasxan.innerHTML = print;
}