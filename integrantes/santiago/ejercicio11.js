export function procesarVector() {
    let texto = document.getElementById("vectorInput").value;

    let array = texto.split(",").map(Number); // Convierte a array de números

    let suma = sumArrayElements(array);

    document.getElementById("resultado").innerHTML =
        "La suma de los elementos es: " + suma;
}

function sumArrayElements(arr) {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }

    return suma;
}
