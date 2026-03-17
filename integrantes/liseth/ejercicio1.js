export function mostrarnumeros() {
    let texto = "";
    for (let i = 1; i <= 10; i++) {
        texto += i + "<br>"; // Genera HTML para mostrar
    }

    // Escribe el resultado en el div con id "resultado"
    document.getElementById("resultado").innerHTML = texto;
}