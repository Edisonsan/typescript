//Definimos dos interfaces, y creamos un tipo que puede ser una o la otra.
interface InterfaceUno {
  Propiedad1: string;
}

interface InterfaceDos {
  Propiedad2: number;
}

type CualquieraDeLasDos = InterfaceUno | InterfaceDos;

const LaInterface : CualquieraDeLasDos = {
  Propiedad2: 3
}