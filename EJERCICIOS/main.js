import * as ejercicios from "./js/EJERCICIOS.JS";

const selectEjercicio = document.getElementById("selectEjercicio");
const botonEjecutar = document.getElementById("botonEjecutar");
const resultadoDiv = document.getElementById("resultado");

// Limpiar inputs previos
function limpiarInputs() {
    const inputs = document.querySelectorAll(".input-dinamico");
    inputs.forEach(input => input.remove());
}

// Crear input dinámico
function crearInput(id, placeholder) {
    const input = document.createElement("input");
    input.id = id;
    input.placeholder = placeholder;
    input.type = "text";
    input.classList.add("input-dinamico");
    input.style.marginRight = "5px";
    return input;
}

// Generar inputs según ejercicio seleccionado
function generarInputs(valor) {
    limpiarInputs();

    switch (valor) {


        case "7":
            document.body.insertBefore(crearInput("inicioInput", "Ingrese inicio"), botonEjecutar);
            document.body.insertBefore(crearInput("finInput", "Ingrese fin"), botonEjecutar);
            break;

        case "6":
            document.body.insertBefore(crearInput("numeroInput", "Ingresa un número"), botonEjecutar);
            break;
        case "8":
            document.body.insertBefore(crearInput("limiteInput", "Ingresa límite"), botonEjecutar);
            break;
        case "9":
            document.body.insertBefore(crearInput("baseInput", "Base"), botonEjecutar);
            document.body.insertBefore(crearInput("exponenteInput", "Exponente"), botonEjecutar);
            break;
        case "10":
            document.body.insertBefore(crearInput("terminosInput", "Número de términos"), botonEjecutar);
            break;
        case "11":
            document.body.insertBefore(crearInput("vectorInput", "Números separados por coma"), botonEjecutar);
            break;
        case "12":
            document.body.insertBefore(crearInput("arrayInput", "Números separados por coma"), botonEjecutar);
            break;
        case "13":
            document.body.insertBefore(crearInput("dataInput", "Datos separados por coma"), botonEjecutar);
            document.body.insertBefore(crearInput("searchInput", "Elemento a buscar"), botonEjecutar);
            break;
        case "14":
            document.body.insertBefore(crearInput("arrayInput14", "Números separados por coma"), botonEjecutar);
            break;
        case "15":
            document.body.insertBefore(crearInput("numbersInput", "Números separados por coma"), botonEjecutar);
            break;
        case "16":
            document.body.insertBefore(crearInput("valuesInput", "Números separados por coma"), botonEjecutar);
            break;
        case "17":
            document.body.insertBefore(crearInput("duplicatesInput", "Números separados por coma"), botonEjecutar);
            break;
        case "18":
            document.body.insertBefore(crearInput("sortInput", "Números separados por coma"), botonEjecutar);
            break;
        case "19":
            document.body.insertBefore(crearInput("productInput", "Números separados por coma"), botonEjecutar);
            break;
        case "20":
            document.body.insertBefore(crearInput("lettersInput", "Letras separadas por coma"), botonEjecutar);
            break;
        case "21":
            document.body.insertBefore(crearInput("matrixInput", "Matriz como [[a,b],[c,d]]"), botonEjecutar);
            break;
        case "22":
            document.body.insertBefore(crearInput("vectorAInput", "Vector A"), botonEjecutar);
            document.body.insertBefore(crearInput("vectorBInput", "Vector B"), botonEjecutar);
            break;
        case "23":
            document.body.insertBefore(crearInput("vectorXInput", "Vector X"), botonEjecutar);
            document.body.insertBefore(crearInput("vectorYInput", "Vector Y"), botonEjecutar);
            break;
        case "24":
            document.body.insertBefore(crearInput("sortedArrayInput", "Array ordenado"), botonEjecutar);
            document.body.insertBefore(crearInput("searchValueInput", "Valor a buscar"), botonEjecutar);
            break;

        case "25":
            document.body.insertBefore(crearInput("rotateInput", "Números separados por coma"), botonEjecutar);
            document.body.insertBefore(crearInput("positionsInput", "Número de posiciones"), botonEjecutar);
            break;
        case "26":
            document.body.insertBefore(crearInput("subarrayInput", "Números separados por coma"), botonEjecutar);
            break;
        case "27":
            document.body.insertBefore(crearInput("array1Input", "Vector 1"), botonEjecutar);
            document.body.insertBefore(crearInput("array2Input", "Vector 2"), botonEjecutar);
            break;
        case "28":
            document.body.insertBefore(crearInput("primeLimitInput", "Ingresa límite"), botonEjecutar);
            break;
        case "29":
            document.body.insertBefore(crearInput("matrix1Input", "Matriz 1"), botonEjecutar);
            document.body.insertBefore(crearInput("matrix2Input", "Matriz 2"), botonEjecutar);
            break;
        case "30":
            document.body.insertBefore(crearInput("mergeSortInput", "Números separados por coma"), botonEjecutar);
            break;
    }
}

// Detectar cambio de ejercicio para generar inputs
selectEjercicio.addEventListener("change", () => generarInputs(selectEjercicio.value));

// Ejecutar ejercicio seleccionado
function ejecutarEjercicio() {
    const valor = selectEjercicio.value;
    resultadoDiv.innerHTML = "";
    if (ejercicios[`ejercicio${valor}`]) {
        ejercicios[`ejercicio${valor}`]();
    } else {
        resultadoDiv.innerHTML = "Selecciona un ejercicio válido.";
    }
}

botonEjecutar.addEventListener("click", ejecutarEjercicio);