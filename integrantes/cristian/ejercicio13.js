export function procesarBusqueda() {
    let dataText = document.getElementById("dataInput").value;
    let searchValue = parseInt(document.getElementById("searchInput").value);

    let array = dataText.split(",").map(Number);

    let resultado = searchInArray(array, searchValue);

    document.getElementById("resultado").innerHTML = resultado;
}

function searchInArray(data, value) {
    let i = 0;

    while (i < data.length) {
        if (data[i] === value) {
            return "Elemento encontrado en la posición: " + i;
        }
        i++;
    }

    return "El elemento no se encuentra en el vector.";
}
