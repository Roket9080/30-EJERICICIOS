export function procesarLimite() {
    let limite = parseInt(document.getElementById("limiteInput").value);

    let texto = showOddNumbers(limite);

    document.getElementById("resultado").innerHTML = texto;
}

function showOddNumbers(limit) {
    if (isNaN(limit) || limit < 1) {
        return "Error: Ingresa un número válido mayor que 0.";
    }

    let i = 1;
    let resultado = "";

    do {
        if (i % 2 !== 0) {
            resultado += i + " ";
        }
        i++;
    } while (i <= limit);

    return resultado;
}
