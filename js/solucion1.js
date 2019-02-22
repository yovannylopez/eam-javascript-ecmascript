let nota1 = parseFloat(prompt('Ingrese la nota 1'));
let nota2 = parseFloat(prompt('Ingrese la nota 2'));
let nota3 = parseFloat(prompt('Ingrese la nota 3'));

let suma = nota1 + nota2 + nota3;

let promedio = suma / 3;

if (promedio >= 0 && promedio < 3) {
  alert('Su nota final es: ' + promedio + ' No Aprobado');
} else if (promedio >= 3 && promedio <= 5) {
  alert(promedio + ' Aprobado');
} else {
  alert('Fuera de rango');
}
