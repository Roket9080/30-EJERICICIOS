export function mostrarPares() {
    let texto = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) texto += i + "<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
}
