export function procesarLimite(limit) {
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