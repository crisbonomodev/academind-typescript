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
//  Discriminated Unions
//# sourceMappingURL=app.js.map