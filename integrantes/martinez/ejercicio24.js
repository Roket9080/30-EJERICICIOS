export function ejecutarBusquedaBinaria() {
    const resultado = document.getElementById("resultado"); // tu div existente

    const txtArray = document.getElementById("sortedArrayInput");
    const txtValue = document.getElementById("searchValueInput");

    if (!txtArray || !txtValue) {
        resultado.textContent = "Error: selecciona el ejercicio 24 para generar los campos.";
        return;
    }

    const arr = txtArray.value
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));

    const value = Number(txtValue.value);

    if (arr.length === 0 || isNaN(value)) {
        resultado.textContent = "Ingresa datos válidos.";
        return;
    }

    let left = 0;
    let right = arr.length - 1;
    let index = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === value) {
            index = mid;
            break;
        }

        if (arr[mid] < value) left = mid + 1;
        else right = mid - 1;
    }

    // Mostrar resultado en el mismo párrafo
    resultado.textContent =
        index === -1
            ? `El valor ${value} NO está en el array.`
            : `El valor ${value} está en la posición: ${index}`;
}

