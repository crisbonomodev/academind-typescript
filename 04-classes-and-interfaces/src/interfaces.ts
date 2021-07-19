// Interfaces
//Podemos definir la estructura del objeto con propiedades y metodos.
// No podemos definir el modificador de scope, pero si el de readonly
interface Human extends hasID{
    readonly name: string;
    age: number;
    saludar(saludo:string): void;
    //parametros opcionales
    altura?: number; //parametro opcional
    despedirse?(despedida: string): void;
}
// Tambien podemos aplicar herencia entre interfaces
interface hasID {
    readonly uniqueId: number;
}

// Implementamos la interfaz en la clase
class Person implements Human {
    name: string;
    age: number;
    altura?: number;
    constructor(
    name: string,
    age: number,
    readonly uniqueId: number,
    altura?: number,
){
    this.name = name;
    this.age = age;
    if(altura) {
        this.altura = altura;
    }
}

saludar(saludo:string){
    console.log(saludo);
}
} 
//usando la interfaz como un type
let user1: Person;

//user1 = {}; //Type '{}' is missing the following properties from type 'Person': name, age, saludarts(2739)
const newUser = new Person('Cristian',32,12345678,170);
//newUser.uniqueId = 222222; //Cannot assign to 'uniqueId' because it is a read-only property.ts(2540

//Podemos tambien usar la interfaz para definir el contrato de una funcion.
interface AddFn {
    (a: number, b: number): number;
}

class Calculator {

//     static add: AddFn = (a: string, b: string) => {
// //         Type '(a: string, b: string) => void' is not assignable to type 'AddFn'.
// //   Types of parameters 'a' and 'a' are incompatible.
// //     Type 'number' is not assignable to type 'string'.ts(2322)
//     };
}