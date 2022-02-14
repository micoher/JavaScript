let animal = prompt("¿Cuál es mi animal favorito?");
const element = document.querySelector("#resultado");

if (animal == "Guepardo"){
    
    element.style.color = "green";
    element.innerHTML = `Es correcto!`;
    

} else {
    const falso = document.querySelector("#falso");
    falso.innerHTML = `Lo siento pero no ):`
    var element = document.getElementById("image");
    element.classList.add("imagenNO");
    
}