"use strict";
// Uso de clases en Typescript
class Department {
    // Constructor
    //podemos declarar las propiedades tambien en el constructor
    // el modificador readonly nos permite setear el parametro como solo lectura una vez inicializado
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
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
    addEmployees(name) {
        this.employees.push(name);
    }
    // metodo estatico
    static sayHi() {
        console.log(this.hello);
    }
}
//Props
//private name: string;
// Propiedad estatica
Department.hello = 'Hello!';
class humanResourcesDepartment extends Department {
    // convertimos el constructor a privado para que no pueda ser llamado desde afuera de la clase 
    constructor(id, name, employees) {
        super(3, 'RRHH', ['Ariel', 'Jesica']);
    }
    describe() {
        console.log(`Department ${this.Name}`);
    }
    // generamos un metodo estatico que valida si la instancia ya existe, y sino, la crea.
    static getInstance(id, name, employees) {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new humanResourcesDepartment(id, name, employees);
            return this.instance;
        }
    }
}
// const salesDepartment = new Department(2,'Sales',['Sol']);
// salesDepartment.describe();
// Department.sayHi();
// const salesCopy = {describe: salesDepartment.describe}; //como no hay referencia al objeto
// salesCopy.describe(); //Esto devuelve undefined
// salesDepartment.Name = 'Marketing';
// salesDepartment.describe();
// Herencia
// Usamos la palabra extends para indicar la relacion de herencia
class ITDepartment extends Department {
    constructor(id, name, employees, phone) {
        // Inicializamos el constructor de la clase padre
        super(id, name, employees);
        //indicamos la inicializacion de los parametros de la clase derivada
        this.phone = phone;
    }
    // Debemos implementar el metodo describe en la clase hija ya que es un metodo abstracto
    describe() {
        console.log(`Department ${this.Name}`);
    }
    addEmployees(name) {
        if (name === 'Cristian') {
            return;
        }
        this.employees.push(name);
    }
}
const ItDepartment = new ITDepartment(1, 'Sistemas', ['Cristian', 'Alejandro'], 12345678);
ItDepartment.describe(); //Metodo de la clase padre
//# sourceMappingURL=app.js.map