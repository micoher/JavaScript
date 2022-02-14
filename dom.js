//Por id
var element1 = document.getElementById("dewey")
console.log("id", element1);

//Por Tag name
var labels = document.getElementsByTagName("label");
console.log("label", labels);

//opcion 1
var namefirst = document.getElementById("namefirst");
namefirst.innerHTML = "Hola"

//opcion 2
document.getElementById("namefirst").innerHTML = "Chao"

//Por clase CSS
var labelsCSS = document.getElementsByClassName("label-input");
console.log("labelsCSS", labelsCSS);

//Por Name
var nombre = document.getElementsByName("drone");
console.log("Name", nombre);

//Por 
var element = document.querySelectorAll("#huey");
console.log("Elememt", element);

//Parentnode
console.log(namefirst.parentNode);

//Borar nodos: seleccionar padre e hijo + removeChild()
var padre = document.getElementById("first-option");
var hijo = document.getElementById("huey");
padre.removeChild(hijo)