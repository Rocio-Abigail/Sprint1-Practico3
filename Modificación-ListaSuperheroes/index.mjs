import { leerSuperheroes,agregarSuperheroes } from "./utils.mjs";

//leer y mostrar la lista de superhéroes ordenada
const archivoOriginal = './Modificación-ListaSuperheroes/superheroes.txt';
const archivoNuevos = './Modificación-ListaSuperheroes/agregarSuperheroes.txt';

//Agregar nuevos superhéroes
agregarSuperheroes(archivoOriginal,archivoNuevos);

//Leer y mostrar la lista actualizada de superhéroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('superheroés ordenados:');
console.log(superheroes);