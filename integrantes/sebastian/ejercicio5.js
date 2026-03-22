export function calcularFactorial(n) {
    if (n < 0) return null;

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}