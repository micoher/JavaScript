let topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

let mayus = topics.map(function(topic){
    return topic.toUpperCase();

})

console.log ("Lista en mayúsculas e invertida", mayus.reverse())
