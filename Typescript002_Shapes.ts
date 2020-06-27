class VehiculoTS {
  private marca: string;
  private modelo: string;
  private tipo: string;

  constructor(marca: string, modelo: string, tipo: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
  }
}

const Vehiculo2016: VehiculoTS = {
  marca: 'Hyundai',
  modelo: 'Tucson',
  tipo: 'Jeep',
};
