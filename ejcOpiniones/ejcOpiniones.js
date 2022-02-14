var textArea = document.getElementById("textarea");
var escondido = document.getElementById("escondido");
var respuesta = document.getElementById("respuesta");
var boton = document.getElementById("boton");


boton.addEventListener("click", opinion);
textArea.addEventListener("keyup", opinion1);

function opinion(){
    respuesta.innerHTML = textArea.value;
}
function opinion1(event){
    if(event.keyCode === 13){
        respuesta.innerHTML = textArea.value;
    }
    
}