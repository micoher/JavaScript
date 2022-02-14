
var enlaces = document.getElementsByTagName("a");
console.log("Hay",enlaces.length, "enlaces");


const penultimate = enlaces[enlaces.length -2].href;
console.log(penultimate)


var enlacestercerParrafo = document.getElementById("third-paragraph").getElementsByTagName("a").length;
console.log(enlacestercerParrafo)


const firstresult = document.querySelector("#number-links");
firstresult.innerHTML = `En esta página hay ${enlaces.length} enlaces`


const secondResult = document.createElement("p");
const contentSecondResult = document.createTextNode(penultimate);
secondResult.appendChild(contentSecondResult);

document.body.appendChild(secondResult)


const thirdResult = document.querySelector("#third-result");
thirdResult.innerHTML = `En el tercer párrafo hay ${enlacestercerParrafo} enlaces.`;