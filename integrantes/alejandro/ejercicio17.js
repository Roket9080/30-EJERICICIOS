function removeDuplicates(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        let existe = false;

        for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                existe = true;
                break;
            }
        }

        if (!existe) {
            result.push(array[i]);
        }
    }

    return result;
}

export function procesarDuplicados() {
    const input = document.getElementById("duplicatesInput").value;

    if (!input) {
        document.getElementById("resultado").textContent =
            "Ingresa valores separados por coma.";
        return;
    }

    // Convertir a array
    const array = input
        .split(",")
        .map(v => v.trim())
        .filter(v => v !== "");

    if (array.length === 0) {
        document.getElementById("resultado").textContent =
            "Ingresa valores válidos.";
        return;
    }

    const filtrado = removeDuplicates(array);

    document.getElementById("resultado").textContent =
        `Array sin duplicados: [ ${filtrado.join(", ")} ]`;
}
