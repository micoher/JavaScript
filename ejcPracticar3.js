let esri = "esri";

let frase = "environmental systems research institute"
let palabras = frase.split(" ")
console.log(palabras)

let prueba = "hola me llamo cesar"



function mayus(objeto){
    const porcion = objeto.substring(1)
    return objeto[0].toUpperCase()+porcion
}

// Prueba de convertir lo de abajo del todo en funcion
// function mayus2(objeto2){
//     const trozos = objeto2.split(" ");
//     const trozo = trozos.map(function(primeraletra){
//     primeraletra[0].toUpperCase() + primeraletra.substring(1)
// }); let final = trozo.join(" ")
// return final
// };

const trozo = palabras.map(function(primeraletra){
    return primeraletra[0].toUpperCase() + primeraletra.substring(1)
});
console.log(trozo)
let final = trozo.join(" ")

console.log(mayus(esri))
console.log(final)
// console.log(mayus2(prueba))