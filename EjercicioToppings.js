// let topping = prompt("¿Qué topping desea con el helado?");

// if (topping == "sin topping") {
//     alert("Tu helado vale 1,90€");
// } else if (topping == "oreo") {
//     alert("Tu helado vale 2,90€");
// } else if (topping == "KitKat") {
//     alert("Tu helado vale 3,40€");
// } else if (topping == "brownie") {
//     alert("Tu helado vale 2,65€");
// } else if (topping == "lacasitos") {
//     alert("Tu helado vale 3,85€");
// } else {
//     alert("No tenemos este topping, lo sentimos");
//     alert("Tu helado vale 1,90€");
// }


// let topping = prompt("¿Qué topping desea con el helado?");
// let helado = 1.9;
// let oreo = 1;
// let KitKat = 1.5;
// let brownie = 0.75;
// let lacasitos = 0.95;
// let total = 0;

// if (topping == "sin topping") {
//     alert("Tu helado vale " + helado + "€");
// } else if (topping == "oreo") {
//     let total = helado + oreo
//     alert("Tu helado vale " + total + "€");
// } else if (topping == "KitKat") {
//     let total = helado + KitKat
//     alert("Tu helado vale " + total + "€");
// } else if (topping == "brownie") {
//     let total = helado + brownie
//     alert("Tu helado vale " + total + "€");
// } else if (topping == "lacasitos") {
//     let total = helado + lacasitos
//     alert("Tu helado vale " + total + "€");
// } else {
//     alert("No tenemos este topping, lo sentimos");
//     alert("Tu helado vale " + helado + "€");
// }

let topping = prompt("¿Qué topping desea con el helado?");
let helado = 1.9;
let oreo = 1;
let KitKat = 1.5;
let brownie = 0.75;
let lacasitos = 0.95;
let total = 0;

if (topping == "sin topping") {
    alert("Tu helado vale " + helado + "€");
    
} else if (topping == "oreo") {
    let total = helado + oreo;
    alert("Tu helado vale " + total + "€");
    let repetir = prompt("De momento te cuesta " + total + "¿Quieres añadir otro topping?");
    if (repetir == "Sí"){
        let mas = prompt("¿Qué otro topping quieres?");

    } else if (repetir == "No"){

    } else {
        alert("No te he entendido")
    }

} else if (topping == "KitKat") {
    let total = helado + KitKat;
    alert("Tu helado vale " + total + "€");
} else if (topping == "brownie") {
    let total = helado + brownie;
    alert("Tu helado vale " + total + "€");
} else if (topping == "lacasitos") {
    let total = helado + lacasitos;
    alert("Tu helado vale " + total + "€");
} else if (topping == "todos") {
    let total = helado + oreo + KitKat + brownie + lacasitos;
    alert("Tu helado vale " + total + "€");
} else {
    alert("No tenemos este topping, lo sentimos");
    alert("Tu helado vale " + helado + "€");
}
