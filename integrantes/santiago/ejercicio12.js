export function mostrarMaximo() {
    let texto = document.getElementById("arrayInput").value;

    let array = texto.split(",").map(Number); 

    let maximo = findMaxValue(array);

    document.getElementById("resultado").textContent =
        "El valor máximo es: " + maximo;
}

function findMaxValue(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}
