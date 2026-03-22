export function procesarNumero(number) {
    let i = 1;
    let resultado = "";

    while (i <= number) {
        resultado += i + " ";
        i++;
    }

    return resultado;
}
