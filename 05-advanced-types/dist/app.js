"use strict";
// // Intersection Types
// // Podemos usar multiples tipos para crear una interseccion 
var _a;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    let result = a + b;
    return result;
}
const sum = add(2, 5); //function add(a: number, b: number): number (+3 overloads)
const sum2 = add('Hello ', 'World');
const sum3 = add('It is a ', 4);
const sum4 = add(4, 'it is');
//   Optional Chaining
const fetchedUserDate = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
};
// con el ? indicamos a TS que chequee si existe el campo al que queremos acceder, sino no lo procesa
console.log((_a = fetchedUserDate === null || fetchedUserDate === void 0 ? void 0 : fetchedUserDate.job) === null || _a === void 0 ? void 0 : _a.title);
//# sourceMappingURL=app.js.map