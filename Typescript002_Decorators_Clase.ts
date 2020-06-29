//Definimos la funcion como Init, la cual extendera Target que es una clase
function init(target) {
  return class extends target {
    marca = 'Hyundai';
    model = super.getModel(); //Podemos traer de la clase original.
    color = 'Azul';

    getModel() {
      return `${this.marca} ${this.model} ${this.color}`;
    }
  };
}

//Definimos la clase con el Decorador
@init
class NuevoVehiculo {
  model: string;

  constructor(model: string) {
    this.model = model;
  }

  getModel() {
    console.log(this.model);
    return this.model;
  }
}

//Creamos un Objeto con la clase Vehiculo, y llamamos el metodo getModel
const NuevoCarro: NuevoVehiculo = new NuevoVehiculo('Tucson');
NuevoCarro.getModel();
//Esto traera Hyundai Tucson Azul.
