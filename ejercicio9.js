const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
let pares = []
let impares = []

const par = number.filter(function(num){
    let resto = num%2
    if (resto == 0){
        pares.push(num)
        return pares
    } 
})
const impar = number.filter(function(num){
    let resto = num%2
    if (resto != 0){
        impares.push(num)
        return impares
    } 
})

console.log("Pares", pares)
console.log("Impares", impares)

/////// Función flecha ////

const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];


const par1 = number.filter(num => num%2 === 0);
const impar1 = number.filter(num => num%2 !== 0);


console.log("Pares", par1);
console.log("Impares", impar1)

