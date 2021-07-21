// // Intersection Types
// // Podemos usar multiples tipos para crear una interseccion 

// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// type SuperUser = Admin & Employee;

// const user: SuperUser = {
//     name: 'Cristian',
//     privileges: ['create-server'],
//     startDate: new Date() 
// };

// // Tambien podemos hacer interseccion de tipos mas simples

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// // Type Guards

// function add(a: Combinable, b: Combinable) {
//     // implementamos un typeguard de tipo typeof para validar si nos llegan numeros
//     if
//     (typeof a === 'number' && typeof b === 'number') {
//         return a+b;
//     } 
//     else
//     {
//         return a.toString() + b.toString();
//     }
// }

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp:UnknownEmployee) {
//     console.log(`Name: ${emp.name}`);
//     if('privileges' in emp) { //Usamos la palabra clave in para validar si existe el campo dentro del objeto
//         console.log(`Privileges: ${emp.privileges}`);
//     }
//     if('startDate' in emp) { //Usamos la palabra clave in para validar si existe el campo dentro del objeto
//         console.log(`Start Date: ${emp.startDate}`);
//     }
// }

// //  Discriminated Unions
// // Podemos agregar un campo type para validar mas especificamente que tipo de interface tenemos
// interface Bird {
//     type: 'bird'; //Este campo si o si será bird si usamos esta interfaz
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal (animal: Animal) {
//     switch (animal.type) {
//         case 'bird':
//             console.log(`Flying speed: ${animal.flyingSpeed}`);
//             break;
//         case 'horse':
//             console.log(`Running speed: ${animal.runningSpeed}`);
//             break;
//         default:
//             break;
//     }
// }

// //  Type Casting

// //TS infiere que es un HTMLElement, pero no puede especificar cual es
// const paragraph = document.getElementById('message-output');
// // Tenemos dos formas de hacer type casting
// // 1
// //const input = <HTMLInputElement>document.getElementById('user-input');
// // 2
// //recomendada si trabajamos con React
// const input = document.getElementById('user-input') as HTMLInputElement; 

// input.value = 'Hello!'; //Object is possibly 'null'

//   Index Properties
// Podemos usar Index Properties cuando tenemos objetos de los cuales sabemos su valor, pero no su nombre 
// interface ErrorContainer {
//     [prop: string] : string; //asignamos un nombre, que sera un string, y el type
// }

// const errorBag: ErrorContainer = {
//     message: 'Invalid email'
// }

// const otherError: ErrorContainer = {
//     otherMessage: 'Invalid name'
// }

// Function Overloads

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Sobrecargas
//
function add(a: number, b:number):number;
function add(a: string, b:string):string;
function add(a: string, b:number):string;
function add(a: number, b:string):string;
function add(a: Combinable, b: Combinable) {
    if
    (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    } 
    let result = a + b;
    return result;
}

const sum = add(2,5); //function add(a: number, b: number): number (+3 overloads)
const sum2 = add('Hello ','World');
const sum3 = add('It is a ',4);
const sum4 = add(4,'it is');

//   Optional Chaining

const fetchedUserDate = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
};

// con el ? indicamos a TS que chequee si existe el campo al que queremos acceder, sino no lo procesa
console.log(fetchedUserDate?.job?.title);

// Nullish Coalescing - ??
const userInput = undefined;

const userCopy = userInput ?? 'DEFAULT'; //si userInput es null o undefined, se guarda default
//Esto es distinto de || ya que || evalua los valores falsy tambien, ?? es mas estricto.

