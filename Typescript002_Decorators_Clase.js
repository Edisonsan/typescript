var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Definimos la funcion como Init, la cual extendera Target que es una clase
function init(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.marca = 'Hyundai';
            _this.model = _super.prototype.getModel.call(_this);
            _this.color = 'Azul';
            return _this;
        }
        class_1.prototype.getModel = function () {
            return this.marca + " " + this.model + " " + this.color;
        };
        return class_1;
    }(target));
}
//Definimos la clase con el Decorador
var NuevoVehiculo = /** @class */ (function () {
    function NuevoVehiculo(model) {
        this.model = model;
    }
    //Empleamos el decorador Historial para la funcion getModel, por lo que cada
    //vez que se ejecute este metodo se va ejecutar el decorador.
    NuevoVehiculo.prototype.getModel = function () {
        console.log(this.model);
        return this.model;
    };
    NuevoVehiculo = __decorate([
        init
    ], NuevoVehiculo);
    return NuevoVehiculo;
}());
//Creamos un Objeto con la clase Vehiculo, y llamamos el metodo getModel
var NuevoCarro = new NuevoVehiculo('Tucson');
NuevoCarro.getModel();
