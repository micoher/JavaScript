var cajita = document.getElementById("cajita")
cajita.addEventListener("keyup", showkey)

function showkey(event){
    console.log(`Has pulsado la tecla${event.code} y le corresponde el ${event.keyCode}`);
}