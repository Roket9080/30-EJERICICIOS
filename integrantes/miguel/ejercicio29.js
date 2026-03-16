export function multiplicarMatrices() {
    const mat1 = parseMatrix(document.getElementById("matrix1Input").value);
    const mat2 = parseMatrix(document.getElementById("matrix2Input").value);

    if (!mat1 || !mat2) {
        mostrarError("Error: ingresa matrices válidas.");
        return;
    }

    if (mat1[0].length !== mat2.length) {
        mostrarError("Error: columnas de M1 deben coincidir con filas de M2.");
        return;
    }

    const result = matrixMultiplication(mat1, mat2);
    mostrarResultado(result);
}

function parseMatrix(text) {
    if (!text.includes(",")) return null;

    try {
        const rows = text.split(";").map(row =>
            row.split(",").map(n => Number(n.trim()))
        );
        for (let row of rows) {
            if (row.some(isNaN)) return null;
        }
        return rows;
    } catch {
        return null;
    }
}

function matrixMultiplication(mat1, mat2) {
    const filas1 = mat1.length;
    const col1 = mat1[0].length;
    const col2 = mat2[0].length;
    let result = [];

    for (let i = 0; i < filas1; i++) {
        result[i] = [];
        for (let j = 0; j < col2; j++) {
            let suma = 0;
            for (let k = 0; k < col1; k++) {
                suma += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = suma;
        }
    }
    return result;
}

function mostrarResultado(matrix) {
    let html = "<h3>Matriz Resultante:</h3><table border='1' cellpadding='5'>";
    for (let fila of matrix) {
        html += "<tr>";
        for (let val of fila) {
            html += `<td>${val}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";

    // Si no existe el div, lo creamos dentro del div principal
    let container = document.getElementById("resultadoMatrices");
    if (!container) {
        container = document.createElement("div");
        container.id = "resultadoMatrices";
        document.getElementById("resultado").appendChild(container);
    }
    container.innerHTML = html;
}

function mostrarError(msg) {
    let container = document.getElementById("resultadoMatrices");
    if (!container) {
        container = document.createElement("div");
        container.id = "resultadoMatrices";
        document.getElementById("resultado").appendChild(container);
    }
    container.innerHTML = `<p style="color:red;">${msg}</p>`;
}