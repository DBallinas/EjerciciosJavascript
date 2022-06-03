//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
//Ejemplo del arreglo : [3, 5, 7, 1, 6]

function max(miArreglo){
    miArreglo.sort((a,b) => a- b);
    return miArreglo[miArreglo.lenght -1];
}
console.log(max([3,5,7,6]));