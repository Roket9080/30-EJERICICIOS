import { 
    transposeMatrix, 
    dotProduct, 
    calculateConvolution, 
    binarySearch, 
    rotateVector 
} from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    // Test 1: Transponer Matriz
    const m1 = [[1, 2], [3, 4]];
    const r1 = transposeMatrix(m1);
    if (JSON.stringify(r1) === JSON.stringify([[1, 3], [2, 4]])) {
        console.log("Test 1 pasado: transposeMatrix funciona correctamente");
        pasadas++;
    } else {
        console.log("Test 1 fallido: ", r1);
        fallidas++;
    }

    // Test 2: Producto Punto
    const r2 = dotProduct([1, 2, 3], [4, 5, 6]); // (1*4) + (2*5) + (3*6) = 32
    if (r2 === 32) {
        console.log("Test 2 pasado: dotProduct calcula correctamente");
        pasadas++;
    } else {
        console.log("Test 2 fallido: resultado fue", r2);
        fallidas++;
    }

    // Test 3: Convolución
    const r3 = calculateConvolution([1, 2, 3], [4, 5, 6]); 
    if (JSON.stringify(r3) === JSON.stringify([4, 13, 28, 27, 18])) {
        console.log("Test 3 pasado: calculateConvolution es correcta");
        pasadas++;
    } else {
        console.log("Test 3 fallido: ", r3);
        fallidas++;
    }

    // Test 4: Búsqueda Binaria
    const arrBusqueda = [10, 20, 30, 40, 50];
    const r4 = binarySearch(arrBusqueda, 30);
    if (r4 === 2) {
        console.log("Test 4 pasado: binarySearch encuentra el índice correcto");
        pasadas++;
    } else {
        console.log("Test 4 fallido: índice retornado fue", r4);
        fallidas++;
    }

    // Test 5: Rotar Vector
    const r5 = rotateVector([1, 2, 3, 4, 5], 2); // Rotar 2 posiciones a la derecha
    if (JSON.stringify(r5) === JSON.stringify([4, 5, 1, 2, 3])) {
        console.log("Test 5 pasado: rotateVector funciona correctamente");
        pasadas++;
    } else {
        console.log("Test 5 fallido: ", r5);
        fallidas++;
    }

    // Resumen de resultados
    console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + " fallidas");
    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();