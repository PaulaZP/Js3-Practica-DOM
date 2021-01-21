/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/
  const elemento = document.querySelector('h3');
  console.log(elemento.outerHTML);

/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/
  const primerelemento = document.querySelector('ul').firstElementChild;
  console.log(primerelemento);

  const ultimolemento = document.querySelector('ul').lastElementChild;
  console.log(ultimolemento);


/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/
const input = document.getElementsByTagName('input');
console.log(input[2]);

/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/

const tabla = document.getElementsByTagName('td');
console.log(tabla[2].innerHTML);
/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/
const celda = document.getElementsByTagName('tr');
console.log(celda[3].innerHTML);
/*
  EJERCICIO F: --------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/
