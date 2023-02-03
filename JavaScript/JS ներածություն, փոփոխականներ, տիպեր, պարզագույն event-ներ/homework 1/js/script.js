// Վարժություն 1
function hashvelRope(){
	var varkyan = Number(document.getElementById('rope').value);
	var result = varkyan / 60;
	document.write("<h5>" + varkyan + "վ" + " = " + result + " րոպե</h5>");
}
 
// Վարժություն 2
function gumarel(){
	var tiv1 = Number(document.getElementById("tiv1").value); 
	var tiv2 = Number(document.getElementById("tiv2").value);
	let result = tiv1 + tiv2;
    document.write("<h5>" + tiv1 + " + " + tiv2 + " = " + result + "</h5>");
}

function hanel(){
	 var tiv1 = Number(document.getElementById("tiv3").value);
	 var tiv2 = Number(document.getElementById("tiv4").value);
	 let result1 = tiv1 - tiv2;
	 document.write("<h5>" + tiv1 + " - " + tiv2 + " = " + result1 + "</h5>");
}

function bajanel(){
	var tiv5 = Number(document.getElementById('tiv5').value);
	var tiv6 = Number(document.getElementById('tiv6').value);
	let result1 = tiv5 / tiv6;
	document.write("<h5>" + tiv5 + " / " + tiv6 + " = " + result1 + "</h5>");
}

function bazmapatkel(){
	var tiv5 = Number(document.getElementById('tiv7').value);
	var tiv6 = Number(document.getElementById('tiv8').value);
	let result1 = tiv5 * tiv6;
	document.write("<h5>" + tiv5 + " * " + tiv6 + " = " + result1 + "</h5>");
}
