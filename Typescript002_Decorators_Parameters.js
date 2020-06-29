var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Definimos la funcion que sera el decorator que efectuara un cambio del año.
function newAnio(target, key) {
    var _valor = this[key]; // Tomamos la variable en donde estara el decorador.
    //Generamos los setter and Getter.
    var getter = function () {
        return _valor;
    };
    var setter = function (nuevoValor) {
        _valor = nuevoValor - 1;
    };
    //Agregamos al Objeto las propiedades getter and setter
    Object.defineProperty(target, key, { get: getter, set: setter });
}
var VehiculoAnio = /** @class */ (function () {
    function VehiculoAnio(_nombre, _anio) {
        this.nombre = _nombre;
        this.anio = _anio;
    }
    __decorate([
        newAnio
    ], VehiculoAnio.prototype, "anio");
    return VehiculoAnio;
}());
var Tucson2016 = new VehiculoAnio('Tucson', 2018);
Tucson2016.anio = 2030;
var FinalAnio = Tucson2016.anio;
