var x = "I LOVE JAVASCRIPT";
// x = x.split(" ");
// x = x.split("");
// x[0] = "B";
// x = x.join(" ");
// x = x.toUpperCase();
// x = x.toLowerCase();
// console.log(x)

function test(){

 let inputValue = document.querySelector("#text").value;
 let inputValArr = inputValue.split("");

 for(let i = 0; i < inputValArr.length; i++){
 	if(i % 2 == 0){
 		inputValArr[i] = inputValArr[i].toUpperCase()
 	} else {
 		inputValArr[i] = inputValArr[i].toLowerCase()
 	}
 }
  
  inputValArr = inputValArr.join("");
  console.log(inputValArr)
}

// let text = "Life is awesome! So you need to live an awesome life";
// verdarcnuma tvjal indexi tare
// console.log(text.charAt(8));
// console.log(text.charAt(15));

// let text = "Hello";
// // verdarcnuma tvjal indexi tari undicode arjeqe
// console.log(text.charCodeAt(0));

// let text = "Hello, My name is";
// katarum e concatinaciayi gorcoxutyun
// let text2 = "Hamo";
// let text3 = text.concat(" ").concat(text2);
// console.log(text3);

// let text = "Hello, My name is";
// katarum e stugum ardyoq tvyal textste verjanum e poxancvac arjeqov
// console.log(text.endsWith("is"));
// console.log(text.endsWith("s"));
// console.log(text.endsWith("i"));

// katarum e stugum ardyoq tvyal textste sksvuma e poxancvac arjeqov
// console.log(text.startsWith("H"))
// console.log(text.startsWith("dddd"))

// unicode arjeqe poxuma sovorakan toxajin tipi
// console.log(String.fromCharCode(98))
// console.log(String.fromCharCode(65, 82, 77, 68, 78))

// let text = "I love javaScript";
// stugum e ardyoq poxancvac teqste ka stugvox teqsti mej
// console.log(text.includes("java"));
// console.log(text.includes("live"));
// console.log(text.includes("love"));

// let text = "Life is awesome! So you need to live an awesome life";
// verdardznum e texsti mej tvjal etqteqsti arajin handipman indeqse ete jan ka ete chka -1;
// console.log(text.indexOf("awesome"));
// console.log(text.indexOf("heep"));

// let text = "Armen";
// teqste krknapatkum e
// text = text.repeat(5);
// console.log(text);

// let text = "I like JavaScript but not phyton JavaScript";
// poxarinum e teqsti mi hatvace miyusov
// text = text.replace(/java/ig, "name");
// console.log(text);

// let text = "I like JavaScript but not phyton JavaScript";
// verdardznum e teqsti mej tvjal entateqsti arajin handipac IDBOpenDBRequest, ete eajn ka ete chka -1
// console.log(text.search("like"));
// console.log(text.search("hop"))

// let text = "JavaScript is cool";
// teqstic anjatum e hatvac nshelov taxnakan ev verjnakan dirqere
// text = text.substring(5, 9);
// console.log(text)

// let text = "I like JavaScript but not phyton JavaScript";
// teqstic anjatum e ev veradardznum e a dirqic b en enkac entateqste;
// nman e substringin bayc ajs functian karox e stanal bacasakan tiv skselov hakarak uxutyamb
// text = text.slice(text.indexOf("JavaScript"),-25);
// console.log(text)

// let text = "Helo my name is Albert";
// teqstic anjatum e a dirqic b dirq enkac hatvace
// text = text.substr(5, 15);
// console.log(text)

// let text = "    JS is cool   "
// console.log(text);
// teqsti skzbic ev verjic heracnum e bacate
// text = text.trim();
// console.log(text)

// let text = "JavaScript";
// teqsti verjic avelacnum e 2 poxancvac simovil anjqan minjev teqsti erkarutyune daran 1 poxancvac tvi chapov;
// text = text.padEnd(25, "-");
// console.log(text)
// console.log(text.length)
