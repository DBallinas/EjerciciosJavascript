// Escribir una función que permita saber si un número se repite dentro de un arreglo. Casos de prueba:
// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
// Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

function Repetidos(myarray){
    let resultado = false;
    myarray.array.forEach(element => {
        if(myarray.indexOf(element) === myarray.lastIndexOf(element)){
            resultado=true;
        }
    });
    return resultado;
}
console.log(Repetidos([1, 22, 5, 14, 24, 31, 27, 15, 105]));
console.log(Repetidos([7, 41, 5, 7, 10, 13, 2]));
console.log(Repetidos([1, 22, 5, 14, 24, 31, 27, 15, 105]));