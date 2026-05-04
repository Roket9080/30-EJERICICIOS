// ==========================================
// 1. LÓGICA PURA (Testeable)
// ==========================================

export function transposeMatrix(matrix) {
    const filas = matrix.length;
    const columnas = matrix[0].length;
    const transpuesta = [];
    for (let i = 0; i < columnas; i++) {
        transpuesta[i] = [];
        for (let j = 0; j < filas; j++) {
            transpuesta[i][j] = matrix[j][i];
        }
    }
    return transpuesta;
}

export function dotProduct(vectorA, vectorB) {
    let suma = 0;
    for (let i = 0; i < vectorA.length; i++) {
        suma += Number(vectorA[i]) * Number(vectorB[i]);
    }
    return suma;
}

export function calculateConvolution(X, Y) {
    const n = X.length;
    const m = Y.length;
    const outputLength = n + m - 1;
    let resultado = new Array(outputLength).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            resultado[i + j] += X[i] * Y[j];
        }
    }
    return resultado;
}

export function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === value) return mid;
        if (arr[mid] < value) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

export function rotateVector(arr, k) {
    if (arr.length === 0) return [];
    const n = arr.length;
    const rotaciones = k % n;
    return arr.slice(-rotaciones).concat(arr.slice(0, n - rotaciones));
}

// ==========================================
// 2. INTERACCIÓN CON EL DOM (Para main.js)
// ==========================================

export function procesarMatriz() {
    let salida = document.getElementById("resultado21") || document.createElement("div");
    salida.id = "resultado21";
    if (!salida.parentNode) (document.getElementById("resultado") || document.body).appendChild(salida);

    const input = document.getElementById("matrixInput")?.value.trim();
    if (!input) return salida.textContent = "Error: Debes ingresar una matriz.";

    const filas = input.split(";").map(f => f.trim());
    const matrix = filas.map(fila => fila.split(/\s+/).map(n => Number(n.trim())).filter(n => !isNaN(n)));

    const transpuesta = transposeMatrix(matrix);
    let texto = "Matriz transpuesta:<br>";
    for (let i = 0; i < transpuesta.length; i++) texto += `[ ${transpuesta[i].join(", ")} ]<br>`;
    salida.innerHTML = texto;
}

export function calcularProductoPunto() {
    let salida = document.getElementById("resultado22") || document.createElement("p");
    salida.id = "resultado22";
    if (!salida.parentNode) (document.getElementById("resultado") || document.body).appendChild(salida);

    const vecAInput = document.getElementById("vectorAInput")?.value.trim();
    const vecBInput = document.getElementById("vectorBInput")?.value.trim();

    const vectorA = vecAInput.split(",").map(v => v.trim());
    const vectorB = vecBInput.split(",").map(v => v.trim());

    const resultado = dotProduct(vectorA, vectorB);
    salida.textContent = `Producto punto: ${resultado}`;
}

export function procesarConvolucion() {
    const x = document.getElementById("vectorXInput").value.split(",").map(n => Number(n.trim()));
    const y = document.getElementById("vectorYInput").value.split(",").map(n => Number(n.trim()));
    const result = calculateConvolution(x, y);
    document.getElementById("resultado").innerHTML = `<p>Resultado: [${result.join(", ")}]</p>`;
}

export function ejecutarBusquedaBinaria() {
    const arr = document.getElementById("sortedArrayInput").value.split(",").map(n => Number(n.trim()));
    const value = Number(document.getElementById("searchValueInput").value);
    
    const index = binarySearch(arr, value); // Llamamos a la lógica separada
    
    document.getElementById("resultado").textContent = index === -1 
        ? `El valor ${value} NO está en el array.` 
        : `El valor ${value} está en la posición: ${index}`;
}

export function procesarRotacion() { // Renombrado para no chocar con la lógica pura
    const arr = document.getElementById("rotateInput").value.split(",").map(n => Number(n.trim()));
    const k = Number(document.getElementById("positionsInput").value);
    
    const resultado = rotateVector(arr, k); // Llamamos a la lógica separada
    
    let contenedor = document.getElementById("resultadoRotacion") || document.createElement("div");
    contenedor.id = "resultadoRotacion";
    if (!contenedor.parentNode) document.getElementById("resultado").appendChild(contenedor);
    
    contenedor.innerText = "Vector rotado: [" + resultado.join(", ") + "]";
}