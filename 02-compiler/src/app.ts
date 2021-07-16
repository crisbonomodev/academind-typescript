const userName = 'Cristian';
console.log(userName);

//Indicamos con el signo de exclamación que nosotros nos haremos cargo de validar que el boton existe
const submitButton = document.querySelector('#submitButton')!;

submitButton.addEventListener('click',()=> { //Object is possibly 'null'.ts(2531)
    console.log('Click!');
})

const button = document.querySelector('button');

button?.addEventListener('click',()=> { //Tambien podemos trabajar con un condicional
    console.log('Click!');
})