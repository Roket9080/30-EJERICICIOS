export function rotarVector() {
    const inputArray = document.getElementById("rotateInput");
    const inputK = document.getElementById("positionsInput");

    // Crear contenedor si no existe
    let contenedor = document.getElementById("resultadoRotacion");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "resultadoRotacion";
        document.getElementById("resultado").appendChild(contenedor);
    }

    // Convertir input a array de números
    const arr = inputArray.value.split(",").map(n => Number(n.trim()));
    const k = Number(inputK.value);

    // Validación
    if (arr.some(isNaN) || isNaN(k)) {
        contenedor.innerText = "Error: ingresa números válidos.";
        return;
    }

    // Normalizar k
    const n = arr.length;
    const rotaciones = k % n;

    // Rotar array
    const resultado = arr.slice(-rotaciones).concat(arr.slice(0, n - rotaciones));

    // Mostrar resultado
    contenedor.innerText = "Vector rotado: [" + resultado.join(", ") + "]";
}

