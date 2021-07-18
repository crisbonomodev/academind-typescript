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

const salesDepartment = new Department(1,'Sales');
salesDepartment.describe();

// const salesCopy = {describe: salesDepartment.describe}; //como no hay referencia al objeto
// salesCopy.describe(); //Esto devuelve undefined

salesDepartment.Name = 'Marketing';
salesDepartment.describe();