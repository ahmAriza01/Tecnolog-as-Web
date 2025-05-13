
(() => {

const names = ['Hugo', 'Paco', 'Luis', 'Pedro', 'Hector'];
const edades = [35, 50, 40, 18, 30];

// Encontrar la edad mayor y su índice
const indexMa = edades.findIndex(edad => edad === Math.max(...edades)); //operador de propagación ó spread operator
const nombreMayor = names[indexMa];
const edadMayor = edades[indexMa];

// Encontrar la edad menor y su índice
const indiceMenor = edades.findIndex(edad => edad === Math.min(...edades)); //operador de propagación ó spread operator
const nombreMenor = names[indiceMenor];
const edadMenor = edades[indiceMenor];

// Mostrar resultados
console.log(`${nombreMenor} es el menor con ${edadMenor} años.`);
console.log(`${nombreMayor} es el mayor con ${edadMayor} años.`);



})()

