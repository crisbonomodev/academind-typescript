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
// Podemos agregar un campo type para validar mas especificamente que tipo de interface tenemos
interface Bird {
    type: 'bird'; //Este campo si o si será bird si usamos esta interfaz
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal (animal: Animal) {
    switch (animal.type) {
        case 'bird':
            console.log(`Flying speed: ${animal.flyingSpeed}`);
            break;
        case 'horse':
            console.log(`Running speed: ${animal.runningSpeed}`);
            break;
        default:
            break;
    }
}

//  Type Casting

//TS infiere que es un HTMLElement, pero no puede especificar cual es
const paragraph = document.getElementById('message-output');
// Tenemos dos formas de hacer type casting
// 1
//const input = <HTMLInputElement>document.getElementById('user-input');
// 2
//recomendada si trabajamos con React
const input = document.getElementById('user-input') as HTMLInputElement; 

input.value = 'Hello!'; //Object is possibly 'null'
