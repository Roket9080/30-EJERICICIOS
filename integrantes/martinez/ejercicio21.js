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

export function procesarMatriz() {
    // Asegurar que exista el contenedor de resultado
    let salida = document.getElementById("resultado21");
    if (!salida) {
        salida = document.createElement("div");
        salida.id = "resultado21";
        const main = document.getElementById("resultado") || document.body;
        main.appendChild(salida);
    }

    const inputEl = document.getElementById("matrixInput");
    if (!inputEl) {
        salida.textContent = "Error: falta el input matrixInput.";
        return;
    }

    const input = inputEl.value.trim();
    if (input === "") {
        salida.textContent = "Error: Debes ingresar una matriz.";
        return;
    }

    // Ejemplo de formato esperado:
    // "1 2 3; 4 5 6; 7 8 9"

    const filas = input.split(";").map(f => f.trim());

    // Convertir a números
    const matrix = filas.map(fila => fila.split(" ")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n))
    );

    // Validaciones
    if (matrix.length === 0 || matrix[0].length === 0) {
        salida.textContent = "Error: La matriz no tiene valores válidos.";
        return;
    }

    // Verificar que todas las filas tengan el mismo tamaño
    const columnas = matrix[0].length;
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i].length !== columnas) {
            salida.textContent = "Error: Todas las filas deben tener la misma cantidad de columnas.";
            return;
        }
    }

    const transpuesta = transposeMatrix(matrix);

    // Crear salida
    let texto = "Matriz transpuesta:<br>";

    for (let i = 0; i < transpuesta.length; i++) {
        texto += `[ ${transpuesta[i].join(", ")} ]<br>`;
    }

    salida.innerHTML = texto;
}
