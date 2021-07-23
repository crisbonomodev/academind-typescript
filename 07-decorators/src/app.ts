// un decorator es una funcion que se ejecutan cuando la clase es declarada, no cuando es instanciada
// recibe parametros, en este caso, el target al que se aplicará
// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// decorator factory: funcion que devuelve un decorator 
function WithTemplate(template: string, hookId: string){
    return function(constructor: any) { // con el underscore indicamos a TS que no nos interesa el parametro
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    }
}

// agregamos nuestro decorator a la clase
@WithTemplate("<h1>Hola!</h1>","app")
class Person {
    name = 'Cristian';
    constructor() {
        console.log('Creating person object...');
    }
}

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