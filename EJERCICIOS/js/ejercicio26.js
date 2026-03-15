export function encontrarSubarrayMaximo() {
    // Obtener input y contenedor de resultado
    const input = document.getElementById("subarrayInput");
    let contenedor = document.getElementById("resultadoSubarray");

    // Si no existe el contenedor, lo creamos
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "resultadoSubarray";
        document.getElementById("resultado").appendChild(contenedor);
    }

    // Convertir el texto del input en un array de números
    const arr = input.value.split(",").map(n => Number(n.trim()));

    // Validar entrada
    if (arr.some(isNaN)) {
        contenedor.innerHTML = "Error: ingresa solo números separados por comas.";
        return;
    }

    // Calcular subarray máximo
    let maxActual = arr[0];
    let maxGlobal = arr[0];
    let inicio = 0, fin = 0, tempInicio = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxActual + arr[i]) {
            maxActual = arr[i];
            tempInicio = i;
        } else {
            maxActual += arr[i];
        }

        if (maxActual > maxGlobal) {
            maxGlobal = maxActual;
            inicio = tempInicio;
            fin = i;
        }
    }

    const subarrayMax = arr.slice(inicio, fin + 1);

    // Mostrar resultado en el contenedor
    contenedor.innerHTML = `
        <p>Subvector máximo: [${subarrayMax.join(", ")}]</p>
        <p>Suma máxima: ${maxGlobal}</p>
    `;
}
