class Cliente{
    constructor(nombre, direccion, telefono, nif){
        this.nom = nombre;
        this.dir = direccion;
        this.tel = telefono;
        this.ni = nif;
    }    
};
class Elemento{
    constructor(descripcion, cantidad, precio){
        this.des = descripcion;
        this.can = cantidad;
        this.pre = precio;
    }    
};
class Factura{
    constructor(cliente, elementos){
        this.cli = cliente;
        this.ele = elementos;
        this.informacion = {
            baseImponible : 0,
            iva : 21,
            total : 0,
            formaDePago : "contado", 
        }
        this.totalPrice = function(){
            // baseImponible = cantidad * precio
            for (let i = 0; i< this.ele.length; i++){
            this.informacion.baseImponible += this.ele[i].can * this.ele[i].pre;
            this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100))
            }
            console.log("total", this.informacion.baseImponible)
            console.log("total", this.informacion.total)
            
        }
    }   
};

const cliente1 = new Cliente("Pepe", "Madrid", 121, "280");
const art1 = new Elemento("Boli", 5, 1)
const art2 = new Elemento("Lapiz", 1, 2)

const bill = new Factura(cliente1,[art1, art2])


// let array = new Elemento("manzana", 5, 1);
// console.log(array)

// let objetos = [

// ]
