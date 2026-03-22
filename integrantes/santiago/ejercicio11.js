// integrantes/santiago/ejercicio11.js
export function procesarVector(vectorStr) {
    if(!vectorStr) return "Vector vacío";

    const array = vectorStr.split(",").map(Number);
    const suma = array.reduce((a,b) => a+b, 0);
    return suma;
}