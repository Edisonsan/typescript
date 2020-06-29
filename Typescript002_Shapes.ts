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

class Jeep extends VehiculoTS {
  private color: string;

  constructor( marca: string, modelo: string, tipo: string, color: string){
    super(marca, modelo, tipo);
    this.color = color;
  }
}

let Tucson : VehiculoTS = new VehiculoTS ( 'Hyundai', 'Tucson', 'Jeep' );
let TucsonAzul : Jeep = new Jeep ( 'Hyundai', 'Tucson', 'Jeep', 'Azul');

Tucson = TucsonAzul
TucsonAzul = Tucson

