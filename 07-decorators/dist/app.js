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
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
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
    WithTemplate("<h1>Hola!</h1>", "app")
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
// Vamos a crear un nuevo decorator factory
// function WithTemplate(template: string, hookId: string){
//     return function(_: Function) { // con el underscore indicamos a TS que no nos interesa el parametro
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//             hookEl.innerHTML = template;
//         }
//     }
// }
// @WithTemplate('<h2>WithTemplate Decorator</h2>','app')
// class Person {
//     name: string;
// constructor() {
//         this.name = 'Cristian';
//         console.log('Creating person object...');
// }
// }
//# sourceMappingURL=app.js.map