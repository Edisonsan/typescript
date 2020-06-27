//En este caso al no definir un type, este tomara el type Any.
function sumatoria(numero1, numero2) {
  //Aqui en Javascript tengo que validar que estos argumentos en realidad son numeros
  //Que se pueden sumar, etc.  Solo hasta cuando se ejecute podriamos ver un error,
  //pero no es explicito.
  return numero1 + numero2;
}

//Puedo definir un value como any en Typescript de la siguiente manera
let variableDeCualquierTipo: any = 10;
//Esto no sirve de nada, por que en realidad seria como hacerlo en Javascript,
//pero haciendo o digitando mas codigo.

//Generando los tipos para la funcion de arriba seria
function sumatoriaTS(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

//Al Llamar a esta funcion nos aseguramos un error si regresamos algo diferente de numero.
//o si alguno de los dats de entrada no es de tipo Number.
//sumatoriaTS('1', 2); //Error, '1' es de tipo String.

//Error: Argument of type '"1"' is not assignable to parameter of type 'number'.ts(2345)

type cedula = string;
let numeroCedula: cedula = '23039203293';
