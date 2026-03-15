function countVowels(letters) {
    const vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;

    for (let i = 0; i < letters.length; i++) {
        const letra = String(letters[i]).toLowerCase();
        if (vocales.includes(letra)) contador++;
    }

    return contador;
}

function updateCounter(count) {
    return `Cantidad de vocales encontradas: ${count}`;
}

export function contarVocales() {
    // Asegurar contenedores de salida
    let salida = document.getElementById("resultado20");
    if (!salida) {
        salida = document.createElement("div");
        salida.id = "resultado20";
        // preferimos anexarlo dentro del contenedor general #resultado si existe
        const main = document.getElementById("resultado") || document.body;
        main.appendChild(salida);
    }

    let contadorEl = document.getElementById("contador20");
    if (!contadorEl) {
        contadorEl = document.createElement("div");
        contadorEl.id = "contador20";
        const main = document.getElementById("resultado") || document.body;
        main.appendChild(contadorEl);
    }

    // Obtener input
    const inputEl = document.getElementById("lettersInput");
    if (!inputEl) {
        salida.textContent = "Error: falta el input con id 'lettersInput'.";
        contadorEl.textContent = "";
        return;
    }

    const raw = inputEl.value.trim();
    if (raw === "") {
        salida.textContent = "Error: Debes ingresar letras separadas por comas.";
        contadorEl.textContent = "";
        return;
    }

    // Convertir a array y limpiar elementos vacíos
    const letters = raw
        .split(",")
        .map(l => l.trim())
        .filter(l => l !== "");

    if (letters.length === 0) {
        salida.textContent = "Error: no se encontraron elementos válidos.";
        contadorEl.textContent = "";
        return;
    }

    const totalVocales = countVowels(letters);
    const mensajeContador = updateCounter(totalVocales);

    salida.textContent = `Vocales encontradas: ${totalVocales}`;
    contadorEl.textContent = mensajeContador;
}
