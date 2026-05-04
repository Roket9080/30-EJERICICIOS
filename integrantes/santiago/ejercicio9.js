export function mostrarPotencia() {
    let base = parseInt(document.getElementById("baseInput").value);
    let exp = parseInt(document.getElementById("exponenteInput").value);

    let resultado = calculatePower(base, exp);

    document.getElementById("resultado").innerHTML =
        base + " elevado a " + exp + " es: " + resultado;
}

function calculatePower(base, exp) {
    let potencia = 1;

    for (let i = 1; i <= exp; i++) {
        potencia *= base;
    }

    return potencia;
}
