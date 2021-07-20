// Intersection Types
// Podemos usar multiples tipos para crear una interseccion 

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type SuperUser = Admin & Employee;

const user: SuperUser = {
    name: 'Cristian',
    privileges: ['create-server'],
    startDate: new Date() 
};

// Tambien podemos hacer interseccion de tipos mas simples

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guards

function add(a: Combinable, b: Combinable) {
    // implementamos un typeguard de tipo typeof para validar si nos llegan numeros
    if
    (typeof a === 'number' && typeof b === 'number') {
        return a+b;
    } 
    else
    {
        return a.toString() + b.toString();
    }
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp:UnknownEmployee) {
    console.log(`Name: ${emp.name}`);
    if('privileges' in emp) { //Usamos la palabra clave in para validar si existe el campo dentro del objeto
        console.log(`Privileges: ${emp.privileges}`);
    }
    if('startDate' in emp) { //Usamos la palabra clave in para validar si existe el campo dentro del objeto
        console.log(`Start Date: ${emp.startDate}`);
    }
}

//  Discriminated Unions
