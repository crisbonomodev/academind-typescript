//Esta forma de escribir la funcion es que TS no sabe que hay en los object
// por eso no puede asistirnos
// function merge(objA: object, objB: object) {
//     return Object.assign(objA,objB);
// }

//Vamos a convertir la funcion a generic
// Typescript infiere que esta funcion devolvera la intersección de T y U
// Nosotros no sabemos exactamente que tipos de objetos tendremos, lo que 
// indicamos a TS es que recibira dos objetos de tipos distintos.
// function merge<T,U>(objA: T, objB: U) {
//     return Object.assign(objA,objB);
// }

// // Ahora, TS infiere que lo que devolvera merge y guardara en mergeObj es la union de estos objetos
// // {
// //     name: string;
// // } & {
// //     age: number;
// // }
// const mergeObj = merge({name: 'Cristian'},{age: 32});
// console.log(mergeObj.age);

//   Working with Constraints
// mediante la palabra reservada extends, indicamos que tipo de objeto debe ser T y U
function merge<T extends object,U extends object>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

//const mergeObj = merge({name: 'Cristian'},32); //Argument of type 'number' is not assignable to parameter of type 'object'.
const mergeObj = merge({name: 'Cristian'},{age: 32});
console.log(mergeObj.age);