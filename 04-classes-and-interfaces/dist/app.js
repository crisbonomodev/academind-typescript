"use strict";
// Uso de clases en Typescript
class Department {
    //Props
    //private name: string;
    // Constructor
    //podemos declarar las propiedades tambien en el constructor
    // el modificador readonly nos permite setear el parametro como solo lectura una vez inicializado
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // this.id = id; // Podemos comentar este sector de codigo ya que al declararlos en los
        // this.name = name; // Parametros del constructor, tambien los inicalizamos. 
    }
    //Getters/Setters
    get Id() {
        return this.id;
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
    //Metodos
    // devuelve el nombre del departamento formateado
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const salesDepartment = new Department(2, 'Sales');
salesDepartment.describe();
// const salesCopy = {describe: salesDepartment.describe}; //como no hay referencia al objeto
// salesCopy.describe(); //Esto devuelve undefined
salesDepartment.Name = 'Marketing';
salesDepartment.describe();
// Herencia
// Usamos la palabra extends para indicar la relacion de herencia
class ITDepartment extends Department {
    constructor(id, name, admins) {
        // Inicializamos el constructor de la clase padre
        super(id, name);
        //indicamos la inicializacion de los parametros de la clase derivada
        this.admins = admins;
    }
    get Admins() {
        return this.admins;
    }
}
const ItDepartment = new ITDepartment(1, 'Sistemas', ['Cristian', 'Alejandro']);
ItDepartment.describe(); //Metodo de la clase padre
console.log(ItDepartment.Admins); //Metodo de la clase hija
//# sourceMappingURL=app.js.map