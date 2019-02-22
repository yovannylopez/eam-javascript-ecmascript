let notas = [];

for (let i = 0; i < 3; i++) {
  notas.push(
    parseFloat(prompt('Ingrese la nota: ' + (i + 1), 'Valores entre 0 y 5'))
  );
}

let suma = notas.reduce(function(total, cantidad) {
  return total + cantidad;
});

let promedio = (suma / notas.length).toFixed(1);

let estado;

if (promedio >= 3.0) {
  estado = 'Aprobado';
} else {
  estado = 'No Aprobado';
}

document.write(
  `Sus notas son:  ${notas} <br> Su Promedio es: ${promedio} <br> Estado: ${estado} <br>`
);

document.querySelector('body').style.fontFamily = 'sans-serif';
document.querySelector('body').style.backgroundColor = 'steelblue';

setTimeout(myFunction, 3000);

function myFunction() {
  alert('Hello world');
}
