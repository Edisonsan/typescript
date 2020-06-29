//Definimos la funcion que sera el decorator que efectuara un cambio del año.
function newAnio(target, key) {
  let _valor: number = this[key]; // Tomamos la variable en donde estara el decorador.

  //Generamos los setter and Getter.
  const getter = () => {
    return _valor;
  };

  const setter = (nuevoValor: number) => {
    _valor = nuevoValor - 1;
  };

  //Agregamos al Objeto las propiedades getter and setter
  Object.defineProperty(target, key, { get: getter, set: setter });
}

class VehiculoAnio {
  nombre: string;
  @newAnio
  anio: number;

  constructor(_nombre: string, _anio: number) {
    this.nombre = _nombre;
    this.anio = _anio;
  }
}

const Tucson2016 = new VehiculoAnio('Tucson', 2018);
Tucson2016.anio = 2030;
const FinalAnio = Tucson2016.anio;
