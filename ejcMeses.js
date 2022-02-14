let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let meses7 = meses
.filter(mes => mes.length>7)
.map(mes => mes.toUpperCase());


console.log ("Meses con más de 7 letras", meses7)
console.log ("Hay", meses7.length, "meses con más de 7 letras")