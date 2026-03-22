export function multiplicarMatrices(m1, m2) {
    const filasA = m1.length;
    const colsA = m1[0].length;
    const filasB = m2.length;
    const colsB = m2[0].length;

    if (colsA !== filasB) {
        throw new Error("No se pueden multiplicar: columnas de A ≠ filas de B");
    }

    const resultado = [];
    for (let i = 0; i < filasA; i++) {
        resultado[i] = [];
        for (let j = 0; j < colsB; j++) {
            let suma = 0;
            for (let k = 0; k < colsA; k++) {
                suma += m1[i][k] * m2[k][j];
            }
            resultado[i][j] = suma;
        }
    }

    return resultado; // <-- importante: devolver matriz, no tocar DOM
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