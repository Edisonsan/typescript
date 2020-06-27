type Marca = string;

interface Vehiculo {
  marca: Marca;
  modelo: string;
  anio: number;
  color?: string;
  tipo: string;
}

//!Error al definir me falto el campo color
const TC1V4: Vehiculo = {
  marca: 'Hyundai',
  modelo: 'Tucson',
  anio: 2016,
  tipo: 'Jeep',
};
