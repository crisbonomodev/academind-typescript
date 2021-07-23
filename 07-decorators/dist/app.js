"use strict";
// un decorator es una funcion que se ejecutan cuando la clase es declarada, no cuando es instanciada
// recibe parametros, en este caso, el target al que se aplicará
// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator factory: funcion que devuelve un decorator 
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// agregamos nuestro decorator a la clase
let Person = class Person {
    constructor() {
        this.name = 'Cristian';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('LOGGING - PERSON')
], Person);
const person = new Person();
console.log(person);
// Consola:
// Logging...
// app.ts:5 class Person {
//     constructor() {
//         this.name = 'Cristian';
//         console.log('Creating person object...');
//     }
// }
// app.ts:14 Creating person object...
// app.ts:20 Person {name: "Cristian"}
//# sourceMappingURL=app.js.map