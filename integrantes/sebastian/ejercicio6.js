export function procesarNumero() {
    let numero = parseInt(document.getElementById('numeroInput').value);
    countdown(numero);
}

function countdown(number) {
    let i = 1;
    let resultado = "";

    while (i <= number) {
        resultado += i + " ";
        i++;
    }

    document.getElementById("resultado").innerHTML = resultado;
}
