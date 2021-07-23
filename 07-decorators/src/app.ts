// un decorator es una funcion que se ejecutan cuando la clase es declarada, no cuando es instanciada
// recibe parametros, en este caso, el target al que se aplicará
// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

// decorator factory: funcion que devuelve un decorator 
function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }

}

// agregamos nuestro decorator a la clase
@Logger('LOGGING - PERSON')
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