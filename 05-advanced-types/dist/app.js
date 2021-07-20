"use strict";
// Intersection Types
// Podemos usar multiples tipos para crear una interseccion 
const user = {
    name: 'Cristian',
    privileges: ['create-server'],
    startDate: new Date()
};
// Type Guards
function add(a, b) {
    // implementamos un typeguard de tipo typeof para validar si nos llegan numeros
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp) { //Usamos la palabra clave in para validar si existe el campo dentro del objeto
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ('startDate' in emp) { //Usamos la palabra clave in para validar si existe el campo dentro del objeto
        console.log(`Start Date: ${emp.startDate}`);
    }
}
function moveAnimal(animal) {
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
const input = document.getElementById('user-input');
input.value = 'Hello!'; //Object is possibly 'null'
//# sourceMappingURL=app.js.map