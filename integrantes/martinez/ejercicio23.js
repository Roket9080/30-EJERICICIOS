export function procesarConvolucion() {
    const x = document.getElementById("vectorXInput").value
                .split(",")
                .map(n => Number(n.trim()));
    const y = document.getElementById("vectorYInput").value
                .split(",")
                .map(n => Number(n.trim()));

    const resultadoDiv = document.getElementById("resultado"); // Usar el div principal
    resultadoDiv.innerHTML = ""; // Limpiar resultados previos

    if (x.some(isNaN) || y.some(isNaN)) {
        const p = document.createElement("p");
        p.textContent = "Error: ingresa solo números separados por comas.";
        resultadoDiv.appendChild(p);
        return;
    }

    const result = calculateConvolution(x, y);

    const p = document.createElement("p");
    p.textContent = `Resultado: [${result.join(", ")}]`;
    resultadoDiv.appendChild(p);
}

function calculateConvolution(X, Y) {
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
