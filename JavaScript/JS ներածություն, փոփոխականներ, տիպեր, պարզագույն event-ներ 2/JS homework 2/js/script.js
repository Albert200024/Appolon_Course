function gumarum(){
	var tiv1 = Number(document.getElementById("tiv1").value);
	var tiv2 = Number(document.getElementById("tiv2").value);
   
    let result;

    if(isNaN(tiv1) || isNaN(tiv2)){
       result = "Խդրում եմ մութքագրեք թիվ";
    }  else {
    	result = tiv1 + " + " + tiv2 + " = " + (tiv1 + tiv2)
    }

    document.getElementById("patasxan").innerHTML = result;
}

function hanum(){
	 var tiv1 = Number(document.getElementById("tiv1").value);
	 var tiv2 = Number(document.getElementById("tiv2").value);

	 var res;

	 if(isNaN(tiv1) == false && isNaN(tiv2) == false){
	 	 result = tiv1 + " - "  + tiv2 + " = " + (tiv1 - tiv2);
	 } else {
       result = "Խդրում եմ մութքագրեք թիվ";
    }

    document.getElementById("patasxan").innerHTML =  result;
}

function bazmapatkum(){
	 var tiv1 = Number(document.getElementById("tiv1").value);
	 var tiv2 = Number(document.getElementById("tiv2").value);

	 var res;

	 if(isNaN(tiv1) == true && isNaN(tiv2) == false){
	 	 res = "Խդրում եմ մութքագրեք թիվ";
	 }

	 if(isNaN(tiv1) == false && isNaN(tiv2) == true){
	 	 res = "Խդրում եմ մութքագրեք թիվ";
	 }

	 if(isNaN(tiv1) == false && isNaN(tiv2) == false){
	 	 res = tiv1 + " * "  + tiv2 + " = " + (tiv1 * tiv2);
	 }

	 else {
       res = "Խդրում եմ մութքագրեք թիվ";
    }

    document.getElementById("patasxan").innerHTML = res;
}

function bajanum(){
	var x = Number(document.getElementById("tiv1").value);
	var y = Number(document.getElementById("tiv2").value);

	var result;
	if(isNaN(x) == true && isNaN(y) == false){
		result = "Խդրում եմ մութքագրեք թիվ";
		console.log("1 pajman")
	}

	if(isNaN(x) == false && isNaN(y) == true){
		result = "Խդրում եմ մութքագրեք թիվ";
		console.log("pajman 2")
	}

	if(isNaN(x) == false && isNaN(y) == false){
		result = x + " / "  + y + " = " + (x / y);
	}

	else {
	 	result = "Խդրում եմ մութքագրեք թիվ";
	}

	document.getElementById("patasxan").innerHTML = result;
}