
function transposeMatrix(matrix) {
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

// Recibe ya un array de números
export function procesarMatriz(matriz) {
    if (!Array.isArray(matriz) || matriz.length === 0) {
        return "Error: la matriz no es válida";
    }

    const transpuesta = transposeMatrix(matriz);

    let texto = "Matriz transpuesta:<br>";
    for (let i = 0; i < transpuesta.length; i++) {
        texto += `[ ${transpuesta[i].join(", ")} ]<br>`;
    }

    return texto;
}