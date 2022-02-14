var readmore = document.getElementById("more");
var readless = document.getElementById("less");

readmore.addEventListener("click", muchotexto);

function muchotexto(){
    const parrafo = document.getElementById("parrafo2");
    parrafo.classList.remove("textoNO");
    const boton2 = document.getElementById("less");
    boton2.classList.remove("textoNO");
    const boton1 = document.getElementById("more");
    boton1.classList.add("textoNO");
}

readless.addEventListener("click", menostexto);

function menostexto(){
    const parra = document.getElementById("parrafo2");
    parra.classList.add("textoNO");
    const boton = document.getElementById("less");
    boton.classList.add("textoNO");
    const boton3 = document.getElementById("more");
    boton3.classList.remove("textoNO");
}
