"use strict";
// console.log('Hello!');
// let and const
// let y const introducen el block scope, en el que la variable/constante solo esta disponible dentro
// de la funcion donde fue declarada 
// let age = 32;
// function add(a: number, b: number) {
//     let result = a + b;
//     return result;
// }
// if (age > 18) { //var se declara globalmente
//     var isOld = true;
// } else {
//     var isOld = false;
// }
// result no esta disponible fuera de la funcion donde fue declarada
//console.log(result); // Cannot find name 'result'.ts(2304)
// var si lo esta
//(console.log(isOld); 
//   Arrow Functions
// Forma normal
// const add = (a: number, b: number) => {
//     return a + b;
// }
// Si solo hay un return, podemos escribirla asi
// const add = (a: number, b: number) => a + b;
// Si solo hay un parametro, podemos escribirla asi
const printValue = value => console.log(value);
//   The Spread Operator (...)
// Arrays
const hobbies = ['Sports', 'Cooking'];
// Hacemos el spread de los valores de hobbies dentro de activeHobbies
const activeHobbies = ['Running', ...hobbies];
// Objetos
const person = {
    firstName: 'Cristian',
    age: 32
};
// Hacemos una copia del objeto utilizando spread
const copyPerson = { ...person };
//   Rest Parameters
const add = (...numbers) => {
    return numbers.reduce((number, acum) => {
        return acum + number;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
//   Array & Object Destructuring
// Array 
const [hobby1, hobby2, ...otherHobbies] = hobbies;
// Objeto
const { firstName, age } = person;
//# sourceMappingURL=app.js.map