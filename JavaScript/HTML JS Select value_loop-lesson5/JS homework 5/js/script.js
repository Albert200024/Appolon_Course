// Exercise 1
function hashvel(){
    let patasxan = document.getElementById("patasxan")
    let course_count = Number(document.getElementById("course_count").value);
    let course_front = document.getElementById("cours_frontend").value;
    let course_back =  document.getElementById("cours_backend").value;
    let course_designer = document.getElementById("cours_designer").value;
    let result;

    if(isNaN(course_count) == false){
        result = course_count * (Number(course_front) + Number(course_back) + Number(course_designer));
        if(result >  299999){
            var zexch = (result / 100) * 30
            result -= zexch
        }
    }

    if(result > 299999){
        patasxan.innerHTML = "Հարգելի ուսանող, Դուք պետք է վճարեք " + result +  " դրամ, սակայն ստանում եք 30% զեղչ և վերջնական գումարը կազմում է " + zexch + " դրամ։" 
    } else if(isNaN(course_count) == false){
        patasxan.innerHTML = "Հարգելի ուսանող, Դուք պետք է վճարեք " + result +  " դրամ:"
    } else {
        patasxan.innerHTML ="Հարգելի ուսանող պետք է անպայման մուքագրեք թիվ։"
    }
    
}

// Exercise 2
let eranishTver = document.getElementById("eranishTver");
let result1 = "";

for(let i = 0; i < 1000; i++){
    if(i > 99 && i % 2 == 0){
         result1 += " " + i;
    }
}

eranishTver.innerHTML=result1;

// Exercise 3

// Exercise 4