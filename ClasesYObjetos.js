// Las clases se empiezan con mayúscula
//Creamos una clase
class Food{
    value = 10;
    color = "red";
    eat () {
        console.log("yummy");
    } //función
}

//Creamos una instancia de clase
const apple = new Food();
const donut = new Food();

//Metemos un nuevo tipo sólo a apple
apple.type = "Reineta";

//Metemos un metodo solo a apple (Dos formas de crear el método/función)
apple.show = () => console.log("Es una manzana")
apple.hide = function(){
    return "nope"
}

//Constructor:
class Coche{
    constructor(marca, color){
        this.brand = marca;
        this.color = color;
        this.show = function(){
            return "El coche es de marca "+ this.brand
        }
    }
    run () {
        console.log("Listo")
    }
    // Se pueden definir métodos tanto fuera como dentro del constructor
    
};

const coche1 = new Coche("Hyundai", "verde");
const coche2 = new Coche("Kia", "amarillo");

