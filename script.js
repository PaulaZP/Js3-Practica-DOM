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

  reemplaza un nodo hijo del elemento especificado por otro.
  replaceChild () 
*/

  
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// crear un nodo con un elemento vacío
// sin ID, atributos, ni contenido

var sp1 = document.createElement("span");

// darle un atributo id llamado 'newSpan'
sp1.setAttribute("id", "newSpan");

// crear algún contenido para el nuevo elemento
var sp1_content = document.createTextNode("Nuevo elemento span para reemplazo.");

// aplicar dicho contenido al nuevo elemento
sp1.appendChild(sp1_content);

// construir una referencia al nodo existente que va a ser reemplazado
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// reemplazar el nodo sp2 existente con el nuevo elemento span sp1
parentDiv.replaceChild(sp1, sp2);

// resultado:
// <div>
//   <span id="newSpan">Nuevo elemento span para reemplazo.</span>
// </div>

