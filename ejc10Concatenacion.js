let topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

let mayusReverse = topics
.map(topic => topic.toUpperCase())   
.reverse()

console.log ("Lista en mayúsculas e invertida", mayusReverse)