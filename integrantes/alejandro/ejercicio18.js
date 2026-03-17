function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) {
                const tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

export function procesarOrdenamiento() {
    const inputEl = document.getElementById("sortInput");
    // Usamos un único contenedor #resultado (crearlo si no existe)
    let resultadoCont = document.getElementById("resultado");
    if (!resultadoCont) {
        resultadoCont = document.createElement("div");
        resultadoCont.id = "resultado";
        document.body.appendChild(resultadoCont);
    }

    if (!inputEl) {
        resultadoCont.textContent = "Error: falta el input #sortInput.";
        return;
    }

    // Parsear y validar números
    const raw = inputEl.value.trim();
    if (!raw) {
        resultadoCont.textContent = "Ingresa números separados por comas.";
        return;
    }

    const array = raw
        .split(",")
        .map(s => Number(s.trim()))
        .filter(n => !Number.isNaN(n));

    if (array.length === 0) {
        resultadoCont.textContent = "No ingresaste números válidos.";
        return;
    }

    const ordenado = bubbleSort(array.slice()); // usamos slice() para no mutar original si lo necesitas
    resultadoCont.innerHTML = `Vector ordenado: [ ${ordenado.join(", ")} ]`;
}
