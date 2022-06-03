//María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: 
//Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.

function max(miArreglo){
    miArreglo.sort((a,b)=> a- b);
    return miArreglo[0];
}
console.log(max([-3, 2, 0, 1, 6]));