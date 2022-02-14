let dni = prompt("Por favor escribe tu DNI sin letra");
let num = 23;
let resto = dni%num
let array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


if (dni > 0 && dni < 99999999) {
    alert("Calculando letra del DNI");
    alert(array[resto]);
} else {
    alert("El número proporcionado no es válido");
}


