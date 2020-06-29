//Definimos dos interfaces, y creamos un tipo que puede ser una o la otra.
interface InterfaceInt1 {
  Propiedad1: string;
}

interface InterfaceInt2 {
  Propiedad1: string;
}

type DebenSerLasDos = InterfaceInt1 & InterfaceInt2;

const InterObjeto: DebenSerLasDos = {
  Propiedad1: '3',
};

const ErrorIntersInterface: DebenSerLasDos = {
  Propiedad1: 'A',
};
//!Type '{ Propiedad1: string; }' is not assignable to type 'DebenSerLasDos'.
//!Property 'Propiedad2' is missing in type '{ Propiedad1: string; }' but required in type 'InterfaceDos'.ts(2322)
