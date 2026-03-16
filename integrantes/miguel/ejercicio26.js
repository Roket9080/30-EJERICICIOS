export function encontrarSubarrayMaximo() {

    const input = document.getElementById("subarrayInput");
    let contenedor = document.getElementById("resultadoSubarray");

    
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "resultadoSubarray";
        document.getElementById("resultado").appendChild(contenedor);
    }

    
    const arr = input.value.split(",").map(n => Number(n.trim()));

    
    if (arr.some(isNaN)) {
        contenedor.innerHTML = "Error: ingresa solo números separados por comas.";
        return;
    }

    
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

    
    contenedor.innerHTML = `
        <p>Subvector máximo: [${subarrayMax.join(", ")}]</p>
        <p>Suma máxima: ${maxGlobal}</p>
    `;
}