"use strict";
const userName = 'Cristian';
console.log(userName);
//Indicamos con el signo de exclamación que nosotros nos haremos cargo de validar que el boton existe
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', () => {
    console.log('Click!');
});
const button = document.querySelector('button');
button?.addEventListener('click', () => {
    console.log('Click!');
});
//# sourceMappingURL=app.js.map