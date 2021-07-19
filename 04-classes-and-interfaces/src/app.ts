// Uso de clases en Typescript
abstract class Department {
    //Props
    //private name: string;
    // Propiedad estatica
    private static hello: string = 'Hello!';
    // Constructor
    //podemos declarar las propiedades tambien en el constructor
    // el modificador readonly nos permite setear el parametro como solo lectura una vez inicializado
    constructor(private readonly id: number, private name: string, protected employees: string[]) {
        // this.id = id; // Podemos comentar este sector de codigo ya que al declararlos en los
        // this.name = name; // Parametros del constructor, tambien los inicalizamos. 
    }

    //Getters/Setters
    public get Id() : number {
        return this.id;
    }

    public get Name() : string {
        return this.name;
    }
    
    public set Name(value : string) {
        this.name = value;
    }

    //Metodos

    // al convertir este metodo en abstracto indicamos que sera sobreescrito en las clases hijas
    // e indicamos el tipo de valor que debe retornar
    abstract describe(this: Department): void;

    addEmployees(name: string) {
        this.employees.push(name);
    }
    // metodo estatico
    static sayHi() {
        console.log(this.hello);
    }

}

class humanResourcesDepartment extends Department {
    // Creamos una instancia de la clase dentro de la clase misma
    private static instance: humanResourcesDepartment;
    // convertimos el constructor a privado para que no pueda ser llamado desde afuera de la clase 
    private constructor(id: number,name: string, employees: string[]){
        super(3,'RRHH',['Ariel','Jesica']);
    }

    describe(){
        console.log(`Department ${this.Name}`);
    }
// generamos un metodo estatico que valida si la instancia ya existe, y sino, la crea.
    static getInstance (id: number, name:string, employees:string[]) {
        if (this.instance) 
        {
            return this.instance;
        }
        else
        {
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
    // en el constructor de la clase derivada llamamos al constructor de la clase padre con super
    // las propiedades especificas de la clase hija las podemos declarar en el constructor
    private phone: number;

    constructor(id: number,name: string, employees: string[],phone: number) {
        // Inicializamos el constructor de la clase padre
        super(id,name,employees);
        //indicamos la inicializacion de los parametros de la clase derivada
        this.phone = phone
    }
// Debemos implementar el metodo describe en la clase hija ya que es un metodo abstracto
    describe(this: Department) {
        console.log(`Department ${this.Name}`);
    }
    
addEmployees(name: string) {
    if(name==='Cristian') {
        return;
    }
    this.employees.push(name);
}
    
}

const ItDepartment = new ITDepartment(1,'Sistemas',['Cristian','Alejandro'],12345678);
ItDepartment.describe(); //Metodo de la clase padre

