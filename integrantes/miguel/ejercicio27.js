export function combinarVectores() {
    const input1 = document.getElementById("array1Input");
    const input2 = document.getElementById("array2Input");
    let container = document.getElementById("resultadoMerge");

    if (!container) {
        container = document.createElement("div");
        container.id = "resultadoMerge";
        document.getElementById("resultado").appendChild(container);
    }

    const arr1 = input1.value.split(",").map(n => Number(n.trim()));
    const arr2 = input2.value.split(",").map(n => Number(n.trim()));

    if (arr1.some(isNaN) || arr2.some(isNaN)) {
        container.innerHTML = "Error: ingresa solo números separados por comas.";
        return;
    }

    const resultado = mergeSortedArrays(arr1, arr2);
    container.innerHTML = `Vector combinado: [${resultado.join(", ")}]`;
}

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0, result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }

    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);

    return result;
}