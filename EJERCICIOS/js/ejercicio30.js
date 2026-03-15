
export function ordenarPorMezcla() {
    const resultadoDiv = document.getElementById("resultado");


    resultadoDiv.innerHTML = "";

    
    const input = document.createElement("input");
    input.type = "text";
    input.id = "mergeSortInput";
    input.placeholder = "Ingresa números separados por coma";


    const boton = document.createElement("button");
    boton.textContent = "Ordenar";
    
    
    const resultadoFinal = document.createElement("div");
    resultadoFinal.id = "mergeSortResult";

    
    boton.addEventListener("click", () => {
        const valor = input.value.trim();

        if (!valor) {
            resultadoFinal.innerHTML = "Ingresa valores separados por comas.";
            return;
        }

        const array = valor.split(",").map(n => Number(n.trim()));

        if (array.some(isNaN)) {
            resultadoFinal.innerHTML = "Solo se permiten números.";
            return;
        }

        const ordenado = mergeSort(array);
        const formateado = ordenado.map(n => `{${n}}`).join(" ");

        resultadoFinal.innerHTML = 'Array ordenado: ' + formateado;
    });

    
    resultadoDiv.appendChild(input);
    resultadoDiv.appendChild(boton);
    resultadoDiv.appendChild(resultadoFinal);
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(a, b) {
    let r = [], i = 0, j = 0;
    while (i < a.length && j < b.length) {
        r.push(a[i] < b[j] ? a[i++] : b[j++]);
    }
    return r.concat(a.slice(i), b.slice(j));
}
