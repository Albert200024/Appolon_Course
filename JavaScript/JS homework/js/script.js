function gumarum(){
	var tiv1 = Number(document.getElementById("tiv1").value);
	var tiv2 = Number(document.getElementById("tiv2").value);
   
    let result;

    if(isNaN(tiv1)){
       result = "muqagrace tiv che";
    } 
 
    if(isNaN(tiv2)){
    	result = "muqagrace tiv che";
    }

    else {
    	result = tiv1 + tiv2;
    }

    document.getElementById("patasxan").innerHTML = tiv1 + " + " + tiv2 + " = " + result;
}

function hanum(){
	 var tiv1 = Number(document.getElementById("tiv1").value);
	 var tiv2 = Number(document.getElementById("tiv2").value);

	 var res;

	 if(isNaN(tiv1) == true){
	 	 result = "mutqagrvace tive chi";
	 }

	 if(isNaN(tiv2) == true){
	 	 result = "mutqagrvace tive chi";
	 }

	 else {
    	result = tiv1 - tiv2;
    }

    document.getElementById("patasxan").innerHTML = tiv1 + " - " + tiv2 + " = " + result;
}

function bazmapatkum(){
	 var tiv1 = Number(document.getElementById("tiv1").value);
	 var tiv2 = Number(document.getElementById("tiv2").value);

	 var res;

	 if(isNaN(tiv1)){
	 	 result = "mutqagrvace tive chi";
	 }

	 if(isNaN(tiv2)){
	 	 result = "mutqagrvace tive chi";
	 }

	 else {
    	result = tiv1 * tiv2;
    }

    document.getElementById("patasxan").innerHTML = tiv1 + " * " + tiv2 + " = " + result;
}

function bajanum(){
	var x = Number(document.getElementById("tiv1").value);
	var y = Number(document.getElementById("tiv2").value);

	var result;
	if(isNaN(x) == true){
		result = "mutqagrvace tiv che";
	}

	if(isNaN(y) == true){
		result = "mutqagrvace tiv che";
	}

	else {
		result = x / y
	}

	document.getElementById("patasxan").innerHTML = x + " / " + y + " = " + result
}