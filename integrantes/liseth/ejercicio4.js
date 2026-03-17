export function tablaMultiplicar() {
    let i = 1;
    let resultado = "";

    do {
        resultado += "5 x " + i + " = " + (5 * i) + "\n";
        i++;
    } while (i <= 10);

    alert(resultado);
    console.log(resultado);
}

