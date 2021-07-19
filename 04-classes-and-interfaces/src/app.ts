// Uso de clases en Typescript
class Department {
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

    // devuelve el nombre del departamento formateado
    describe(this: Department) { //Colocamos la referencia al objeto para evitar errores
        console.log( `Department: ${this.name}`);
    }

    addEmployees(name: string) {
        this.employees.push(name);
    }
    // metodo estatico
    static sayHi() {
        console.log(this.hello);
    }

}

const salesDepartment = new Department(2,'Sales',['Sol']);
salesDepartment.describe();
Department.sayHi();

// const salesCopy = {describe: salesDepartment.describe}; //como no hay referencia al objeto
// salesCopy.describe(); //Esto devuelve undefined

salesDepartment.Name = 'Marketing';
salesDepartment.describe();

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

    
addEmployees(name: string) {
    if(name==='Cristian') {
        return;
    }
    this.employees.push(name);
}
    
}

const ItDepartment = new ITDepartment(1,'Sistemas',['Cristian','Alejandro'],12345678);
ItDepartment.describe(); //Metodo de la clase padre