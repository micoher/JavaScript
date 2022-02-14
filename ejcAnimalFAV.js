let animal = prompt("¿Cuál es mi animal favorito?");


if (animal == "Guepardo"){
    const verdad = document.querySelector("#cierto");
    verdad.style.color = "green";
    verdad.innerHTML = `Es correcto!`;
    var element = document.getElementById("image");
    element.classList.remove("imagenNO");

} else {
    const falso = document.querySelector("#falso");
    falso.innerHTML = `Lo siento pero no ):`
    
}


