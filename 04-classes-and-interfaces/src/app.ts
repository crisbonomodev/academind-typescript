// Uso de clases en Typescript
class Department {
    //Props
    //private name: string;

    // Constructor
    //podemos declarar las propiedades tambien en el constructor
    // el modificador readonly nos permite setear el parametro como solo lectura una vez inicializado
    constructor(private readonly id: number, private name: string) {
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

}

const salesDepartment = new Department(2,'Sales');
salesDepartment.describe();

// const salesCopy = {describe: salesDepartment.describe}; //como no hay referencia al objeto
// salesCopy.describe(); //Esto devuelve undefined

salesDepartment.Name = 'Marketing';
salesDepartment.describe();

// Herencia
// Usamos la palabra extends para indicar la relacion de herencia
class ITDepartment extends Department {
    // en el constructor de la clase derivada llamamos al constructor de la clase padre con super
    // las propiedades especificas de la clase hija las podemos declarar en el constructor
    private admins: string[];

    constructor(id: number,name: string, admins: string[]) {
        // Inicializamos el constructor de la clase padre
        super(id,name);
        //indicamos la inicializacion de los parametros de la clase derivada
        this.admins = admins;
    }

    
    public get Admins() : string[] {
        return this.admins;
    }
    
}

const ItDepartment = new ITDepartment(1,'Sistemas',['Cristian','Alejandro']);
ItDepartment.describe(); //Metodo de la clase padre
console.log(ItDepartment.Admins); //Metodo de la clase hija