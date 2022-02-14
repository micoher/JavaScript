var botonlenguaje = document.getElementById("boton");
var lista = document.getElementById("lista");

botonlenguaje.addEventListener("click", añade);

function añade(){
    const creaLI = document.createElement("li");
    const contenido = document.createTextNode("JavaScript");
    creaLI.appendChild(contenido);
    lista.appendChild(creaLI);
}








