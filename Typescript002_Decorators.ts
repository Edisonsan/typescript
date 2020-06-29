//Definimos la funcion que vamos ausar como decorator.
function Historial(target, key) {
  console.log('Function: ' + key);
}

//Definimos la clase.
class Vehiculo {
  model: string;

  constructor(model: string) {
    this.model = model;
  }

  //Empleamos el decorador Historial para la funcion getModel, por lo que cada
  //vez que se ejecute este metodo se va ejecutar el decorador.
  @Historial
  getModel() {
    console.log(this.model);
    return this.model;
  }
}

//Creamos un Objeto con la clase Vehiculo, y llamamos el metodo getModel
const Carro: Vehiculo = new Vehiculo('Tucson');
Carro.getModel();
