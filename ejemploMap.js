const numbers = [3, 6, 7, 10];

//Map
let numbersPlus = numbers.map(function(elemento) {
    let aux = elemento + 1;
    return aux;
});
console.log(numbersPlus)