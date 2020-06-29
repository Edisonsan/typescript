var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Definimos la funcion que vamos ausar como decorator.
function Historial(target, key) {
    console.log('Function: ' + key);
}
//Definimos la clase.
var Vehiculo = /** @class */ (function () {
    function Vehiculo(model) {
        this.model = model;
    }
    //Empleamos el decorador Historial para la funcion getModel, por lo que cada
    //vez que se ejecute este metodo se va ejecutar el decorador.
    Vehiculo.prototype.getModel = function () {
        console.log(this.model);
        // return this.model;
    };
    __decorate([
        Historial
    ], Vehiculo.prototype, "getModel");
    return Vehiculo;
}());
//Creamos un Objeto con la clase Vehiculo, y llamamos el metodo getModel
var Carro = new Vehiculo('Tucson');
Carro.getModel();
