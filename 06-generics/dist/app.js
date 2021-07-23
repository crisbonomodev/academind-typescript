"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
//const mergeObj = merge({name: 'Cristian'},32); //Argument of type 'number' is not assignable to parameter of type 'object'.
const mergeObj = merge({ name: 'Cristian' }, { age: 32 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    let descriptionText = 'got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
// Como vemos,podemos aceptar varios tipos de valores siempre que tengan la propiedad length
console.log(countAndDescribe('Hello!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
console.log(countAndDescribe({ name: 'Cristian', age: 32, length: 2 }));
//  The "keyof" Constraint
// podemos usar keyof cuando necesitamos asociar nuestro generic type 
// a una propiedad de otro generic type.
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ id: 1, name: 'Cristian', age: 32 }, 'id'); // funciona ok ya que id es una key del objeto
// extractAndConvert({id: 1, name: 'Cristian', age: 32},'asd'); //no funciona ya que no ubica asd
//   Generic Classes
// Generemos una clase generica para almacenar información.
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
// Ahora, podemos crear nuestros storages 
const textStorage = new DataStorage();
const numberStorage = new DataStorage();
const textArrayStorage = new DataStorage();
const objectStorage = new DataStorage();
textStorage.addItem('Cristian');
//textStorage.addItem(2); //Argument of type 'number' is not assignable to parameter of type 'string'
console.log(textStorage.getItems());
numberStorage.addItem(3);
//numberStorage.addItem('Cristian'); //Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numberStorage.getItems());
textArrayStorage.addItem(['Cristian', 'Alejandro']);
// textArrayStorage.addItem(3); //Argument of type 'number' is not assignable to parameter of type 'string[]
console.log(textArrayStorage.getItems());
// objects
objectStorage.addItem({ name: 'Cristian' });
objectStorage.addItem({ name: 'Alejandro' });
objectStorage.removeItem({ name: 'Cristian' }); // esto NO funciona, ya que el objeto que le pasamos
// es nuevo, y TS/JS buscara el objeto sin encontrarlo con splice, retornando -1 y
// quitando el ultimo elemento de la ListeningStateChangedEvent.
console.log(objectStorage.getItems());
function createCourseGoal(title, description, date) {
    // Iniciamos con un tipo parcial
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    // Al final, hacemos type casting para devolver nuestra variable como CourseGoal
    return courseGoal;
}
// Readonly - Util para no modificar datos
const names = ['Cristian', 'Alejandro'];
// names.push('asdasdas'); //Property 'push' does not exist on type 'readonly string[]'.ts(2339)
// https://www.typescriptlang.org/docs/handbook/utility-types.html
//# sourceMappingURL=app.js.map