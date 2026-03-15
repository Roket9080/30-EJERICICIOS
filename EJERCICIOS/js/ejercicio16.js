export function calculateAverage() {
    const input = document.getElementById("valuesInput").value;

    if (!input) {
        document.getElementById("resultado").innerHTML =
            "Ingresa valores separados por coma.";
        return;
    }

    // Convertir a números
    const values = input
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));

    if (values.length === 0) {
        document.getElementById("resultado").innerHTML =
            "No ingresaste valores numéricos válidos.";
        return;
    }

    let suma = 0;

    for (let i = 0; i < values.length; i++) {
        suma += values[i];
    }

    const promedio = suma / values.length;

    document.getElementById("resultado").innerHTML =
        `El promedio es: ${promedio}`;
}
