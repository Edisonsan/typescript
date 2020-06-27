//
//Una de las ventajas de Javascript es poder usar Clases, Interfaces entre otros
var Person = /** @class */ (function () {
    //Defino el constructor para esta clase.
    function Person(nombre, id) {
        //Asigno los argumentos del constructor a las variables privadas.
        this.name = nombre;
        this.id = id;
    }
    //Se crean los Getter and Setters para los campos que pueden ser accedidos mediante
    //estos metodos.
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (nombre) {
        this.name = nombre;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    return Person;
}());
// Para definir un objeto de una clase, se realiza de manera similar a la definicion de una variable
// de un tipo en particular, con la diferencia de la ejecucion de su constructor.
var Edison = new Person('Edison', 1);
