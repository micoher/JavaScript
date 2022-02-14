class Cuadrados{
    constructor(lado){
        this.lado = lado;
        this.area = function(){
            return lado * lado
        };
        this.perimetro = function(){
            return lado * 4
        }
    }    
};

const pequeño = new Cuadrados(2);
const mediano = new Cuadrados(5);
const grande = new Cuadrados(10);