function mayusMinus (cadena){

    if (cadena == cadena.toUpperCase()){
        return`La frase está en mayúsculas`

    } else if (cadena == cadena.toLowerCase()){
        return `La frase está en minúscculas`

    } else{
        return `La frase tiene mayúsculas y minúsculas`
    }
}

let frase = prompt("Escribe una frase")
alert(mayusMinus(frase))