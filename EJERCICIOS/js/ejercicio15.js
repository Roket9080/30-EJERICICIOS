export function countEvenNumbers() {
    const input = document.getElementById("numbersInput").value;

    if (!input) {
        document.getElementById("resultado").innerHTML = "Ingresa números válidos.";
        return;
    }

    // Convertir texto en array de números
    const numbers = input
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));

    if (numbers.length === 0) {
        document.getElementById("resultado").innerHTML = "No ingresaste números válidos.";
        return;
    }

    let contador = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) contador++;
    }

    document.getElementById("resultado").innerHTML =
        `Cantidad de números pares: ${contador}`;
}
