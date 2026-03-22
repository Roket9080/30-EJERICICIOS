export function mostrarMaximo() {
    const texto = document.getElementById("arrayInput12").value; // lee el input correcto
    if (!texto) {
        document.getElementById("resultado").textContent = "Ingresa un vector válido";
        return;
    }

    const array = texto.split(",").map(Number); 
    const maximo = Math.max(...array);

    document.getElementById("resultado").textContent =
        "El valor máximo es: " + maximo;
}