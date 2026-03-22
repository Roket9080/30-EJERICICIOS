export function tablaMultiplicar() {
    let texto = "";
    for (let i = 1; i <= 10; i++) {
        texto += `5 x ${i} = ${5*i}<br>`;
    }
    document.getElementById("resultado").innerHTML = texto;
}
