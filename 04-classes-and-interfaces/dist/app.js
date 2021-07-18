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
const salesDepartment = new Department(1, 'Sales');
salesDepartment.describe();
// const salesCopy = {describe: salesDepartment.describe}; //como no hay referencia al objeto
// salesCopy.describe(); //Esto devuelve undefined
salesDepartment.Name = 'Marketing';
salesDepartment.describe();
//# sourceMappingURL=app.js.map