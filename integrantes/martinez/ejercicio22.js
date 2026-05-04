function dotProduct(vectorA, vectorB) {
    let suma = 0;
    for (let i = 0; i < vectorA.length; i++) {
        suma += Number(vectorA[i]) * Number(vectorB[i]);
    }
    return suma;
}

function ensureOutput(id = "resultado22") {
    let out = document.getElementById(id);
    if (!out) {
        out = document.createElement("p");
        out.id = id;
        const cont = document.getElementById("resultado") || document.body;
        cont.appendChild(out);
    }
    return out;
}

export function calcularProductoPunto() {
    const salida = ensureOutput("resultado22");

    const aEl = document.getElementById("vectorAInput");
    const bEl = document.getElementById("vectorBInput");

    if (!aEl || !bEl) {
        salida.textContent = "Error: faltan los inputs vectorAInput o vectorBInput.";
        return;
    }

    const vecAInput = aEl.value.trim();
    const vecBInput = bEl.value.trim();

    if (vecAInput === "" || vecBInput === "") {
        salida.textContent = "Error: Debes ingresar ambos vectores.";
        return;
    }

    const vectorA = vecAInput.split(",").map(v => v.trim());
    const vectorB = vecBInput.split(",").map(v => v.trim());

    if (vectorA.length !== vectorB.length) {
        salida.textContent = "Error: Los vectores deben tener la misma longitud.";
        return;
    }

    for (let i = 0; i < vectorA.length; i++) {
        if (vectorA[i] === "" || vectorB[i] === "" ||
            isNaN(Number(vectorA[i])) || isNaN(Number(vectorB[i]))) {
            salida.textContent = "Error: Ambos vectores deben contener solo números.";
            return;
        }
    }

    const resultado = dotProduct(vectorA, vectorB);
    salida.textContent = `Producto punto: ${resultado}`;
}
