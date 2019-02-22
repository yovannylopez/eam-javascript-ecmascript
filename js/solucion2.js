let nota1 = parseFloat(prompt('Ingrese la nota 1'));
if (nota1 >= 0 && nota1 <= 5) {
  let nota2 = parseFloat(prompt('Ingrese la nota 2'));
  if (nota2 >= 0 && nota2 <= 5) {
    let nota3 = parseFloat(prompt('Ingrese la nota 3'));
    if (nota3 >= 0 && nota3 <= 5) {
      let suma = nota1 + nota2 + nota3;
      let promedio = suma / 3;
      if (promedio >= 3) {
        alert('Aprobado');
      } else {
        alert('No aprobado');
      }
    } else {
      alert('Por favor ingrese una nota correcta');
    }
  } else {
    alert('Por favor ingrese una nota correcta');
  }
} else {
  alert('Por favor ingrese una nota correcta');
}
