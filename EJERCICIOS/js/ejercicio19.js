function multiply(a, b) {
    return a * b;
}

function analyzeArray(arr, operation) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result = operation(result, Number(arr[i]));
    }
    return result;
}

export function procesarProducto() {
    const input = document.getElementById("productInput").value;
    const resultadoDiv = document.getElementById("resultado"); // Usar el div principal
    resultadoDiv.innerHTML = ""; // Limpiar resultado previo

    if (!input.trim()) {
        const p = document.createElement("p");
        p.textContent = "Error: Debes ingresar valores.";
        resultadoDiv.appendChild(p);
        return;
    }

    const array = input.split(",").map(x => x.trim());
    if (array.some(v => isNaN(v) || v === "")) {
        const p = document.createElement("p");
        p.textContent = "Error: Todos los valores deben ser numéricos.";
        resultadoDiv.appendChild(p);
        return;
    }

    const producto = analyzeArray(array, multiply);
    const p = document.createElement("p");
    p.textContent = `Producto total: ${producto}`;
    resultadoDiv.appendChild(p);
}
