var botonGuardar = document.getElementById("guardar");

botonGuardar.addEventListener( "click", alertar);
function alertar(){
    alert("Se ha guardado la información");
}

var hacerFoco = document.getElementById("input");

hacerFoco.addEventListener( "focus", changeColor);
function changeColor(){
    hacerFoco.style.backgroundColor = "green";
}
hacerFoco.addEventListener( "focusout", changeColor2);
function changeColor2(){
    hacerFoco.style.backgroundColor = "yellow";
}


let numVocales = [65, 69, 73, 79, 85]
var input2 = document.getElementById("input2")
input2.addEventListener("keyup", cambiarColor)

function cambiarColor(event){
    let letrazas = event.keyCode;
    if(numVocales.indexOf(letrazas)== -1){
        input2.style.color = "red";
    } else{
        input2.style.color = "green";
    }
}
