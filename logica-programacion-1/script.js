/*
Crear un programa en PSeInt o JavaScript que realice lo siguiente:
**Debe solicitar al usuario 3 números y guardarlos.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
**Debe imprimir los números ordenados de mayor a menor, y de menor a mayor.
**Debe ser capaz de identificar si los números son iguales e imprimir un mensaje diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
4, 4, 2.
4, 4, 2.
2, 4, 4.
4, 2, 4.
4, 4, 2.
2, 4, 4.
2, 4, 4.
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1”
*/

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

let numArr = [num1, num2, num3];

function sortNums(arr) {

    //Detecta si los números son iguales
    if (arr[0] === arr[1] && arr[1] === arr[2]){
        console.log("Todos los números ingresados son iguales");
    }
    
    //ordena los números de menor a mayor
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr.length; j++) {
            let prov = arr[j]; //Variable provisional que me permite ir comparando los números
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = prov;
            }
        }
    }
    console.log("Los números ingresados de menor a mayor son: " + arr);
    
    //Ordena los números de mayor a menor
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr.length; j++) {
            let prov = arr[j];
            if (arr[j] < arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = prov;
            }
        }
    }

console.log("Los números ingresados de mayor a menor son: " + arr);

console.log("El número mayor es: " + arr[0]);
console.log("El número del medio es: " + arr[1]);
console.log("El número menor es: " + arr[2]);
    

}
    

sortNums(numArr);