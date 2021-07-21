"use strict";
// // Intersection Types
// // Podemos usar multiples tipos para crear una interseccion 
function add(a, b) {
    // implementamos un typeguard de tipo typeof para validar si nos llegan numeros
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
const sum = add(2, 5);
//# sourceMappingURL=app.js.map