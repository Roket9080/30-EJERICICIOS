// Miguel
import { encontrarSubarrayMaximo } from "./integrantes/miguel/ejercicio26.js";
import { combinarVectores } from "./integrantes/miguel/ejercicio27.js";
import { encontrarPrimos } from "./integrantes/miguel/ejercicio28.js";
import { multiplicarMatrices } from "./integrantes/miguel/ejercicio29.js";
import { ordenarPorMezcla } from "./integrantes/miguel/ejercicio30.js";

// Liseth
import { mostrarnumeros } from "./integrantes/liseth/ejercicio1.js";
import { sumarNumeros } from "./integrantes/liseth/ejercicio2.js";
import { mostrarPares } from "./integrantes/liseth/ejercicio3.js";
import { tablaMultiplicar } from "./integrantes/liseth/ejercicio4.js";

// Cristian
import { procesarBusqueda } from "./integrantes/cristian/ejercicio13.js";
import { reverseArray } from "./integrantes/cristian/ejercicio14.js";
import { countEvenNumbers } from "./integrantes/cristian/ejercicio15.js";
import { calculateAverage } from "./integrantes/cristian/ejercicio16.js";

// Sebastian
import { calcularFactorial } from "./integrantes/sebastian/ejercicio5.js";
import { procesarNumero } from "./integrantes/sebastian/ejercicio6.js";
import { cargarSuma } from "./integrantes/sebastian/ejercicio7.js";
import { procesarLimite } from "./integrantes/sebastian/ejercicio8.js";

// Santiago
import { mostrarPotencia } from "./integrantes/santiago/ejercicio9.js";
import { procesarTerminos } from "./integrantes/santiago/ejercicio10.js";
import { procesarVector } from "./integrantes/santiago/ejercicio11.js";
import { mostrarMaximo } from "./integrantes/santiago/ejercicio12.js";

document.addEventListener("DOMContentLoaded", () => {

    const selectEjercicio = document.getElementById("selectEjercicio");
    const boton = document.getElementById("botonEjecutar");

    const subarrayInput = document.getElementById("subarrayInput");
    const array1Input = document.getElementById("array1Input");
    const array2Input = document.getElementById("array2Input");
    const primosInput = document.getElementById("primosInput");
    const matriz1Input = document.getElementById("matriz1Input");
    const matriz2Input = document.getElementById("matriz2Input");
    const arrayInput12 = document.getElementById("arrayInput12");

    const dataInput = document.getElementById("dataInput");
    const searchInput = document.getElementById("searchInput");
    const arrayInput = document.getElementById("arrayInput");
    const numberInput = document.getElementById("numberInput");
    const inicioInput = document.getElementById("inicioInput");
    const finInput = document.getElementById("finInput");

    // ⚠️ Estos deben existir en tu HTML
    const baseInput = document.getElementById("baseInput");
    const exponenteInput = document.getElementById("exponenteInput");
    const terminosInput = document.getElementById("terminosInput");
    const vectorInput = document.getElementById("vectorInput");

    const resultado = document.getElementById("resultado");

    function ocultarTodosInputs() {
        [
            subarrayInput, array1Input, array2Input, primosInput,
            matriz1Input, matriz2Input, dataInput, searchInput,
            arrayInput, numberInput, inicioInput, finInput,
            arrayInput12, baseInput, exponenteInput,
            terminosInput, vectorInput
        ].forEach(input => {
            if (input) {
                input.style.display = "none";
                input.value = "";
            }
        });
    }

    selectEjercicio.addEventListener("change", () => {
        ocultarTodosInputs();
        const ejercicio = selectEjercicio.value;

        if (ejercicio === "13") {
            if (dataInput) dataInput.style.display = "inline-block";
            if (searchInput) searchInput.style.display = "inline-block";

        } else if (["14", "15", "16"].includes(ejercicio)) {
            if (arrayInput) arrayInput.style.display = "inline-block";

        } else if (["5", "6", "8"].includes(ejercicio)) {
            if (numberInput) numberInput.style.display = "inline-block";

        } else if (ejercicio === "9") {
            if (baseInput) baseInput.style.display = "inline-block";
            if (exponenteInput) exponenteInput.style.display = "inline-block";

        } else if (ejercicio === "10") {
            if (terminosInput) terminosInput.style.display = "inline-block";

        } else if (ejercicio === "11") {
            if (vectorInput) vectorInput.style.display = "inline-block";

        } else if (ejercicio === "12") {
            if (arrayInput12) arrayInput12.style.display = "inline-block";

        } else if (ejercicio === "7") {
            if (inicioInput) inicioInput.style.display = "inline-block";
            if (finInput) finInput.style.display = "inline-block";

        } else if (ejercicio === "26") {
            if (subarrayInput) subarrayInput.style.display = "inline-block";

        } else if (ejercicio === "27") {
            if (array1Input) array1Input.style.display = "inline-block";
            if (array2Input) array2Input.style.display = "inline-block";

        } else if (ejercicio === "28") {
            if (primosInput) primosInput.style.display = "inline-block";

        } else if (ejercicio === "29") {
            if (matriz1Input) matriz1Input.style.display = "inline-block";
            if (matriz2Input) matriz2Input.style.display = "inline-block";
        }
    });

    function ejecutarEjercicio() {
        const ejercicio = selectEjercicio.value;

        switch(ejercicio) {

            case "1": mostrarnumeros(); break;
            case "2": sumarNumeros(); break;
            case "3": mostrarPares(); break;
            case "4": tablaMultiplicar(); break;

            case "5":
                if (!numberInput.value) return resultado.innerHTML = "Ingresa un número.";
                const num = parseInt(numberInput.value);
                if (num > 20) return resultado.innerHTML = "Número muy grande.";
                resultado.innerHTML = "Factorial: " + calcularFactorial(num);
                break;

            case "6":
                if (!numberInput.value) return resultado.innerHTML = "Ingresa un número.";
                resultado.innerHTML = procesarNumero(parseInt(numberInput.value));
                break;

            case "7":
                if (!inicioInput.value || !finInput.value) return resultado.innerHTML = "Ingresa ambos números.";
                resultado.innerHTML = "Suma de pares: " + cargarSuma(parseInt(inicioInput.value), parseInt(finInput.value));
                break;

            case "8":
                if (!numberInput.value) return resultado.innerHTML = "Ingresa un número.";
                resultado.innerHTML = procesarLimite(parseInt(numberInput.value));
                break;

            case "9": mostrarPotencia(); break;
            case "10": procesarTerminos(); break;
            case "11": procesarVector(); break;

            case "12":
                if (!arrayInput12.value) return resultado.innerHTML = "Ingresa un vector válido.";
                mostrarMaximo();
                break;

            case "13":
                if (!dataInput.value || !searchInput.value) return resultado.innerHTML = "Ingresa datos.";
                procesarBusqueda(dataInput.value, parseInt(searchInput.value));
                break;

            case "14":
                if (!arrayInput.value) return resultado.innerHTML = "Ingresa un vector.";
                resultado.innerHTML = reverseArray(arrayInput.value.split(",").map(Number)).join(", ");
                break;

            case "15":
                if (!arrayInput.value) return resultado.innerHTML = "Ingresa un vector.";
                resultado.innerHTML = countEvenNumbers(arrayInput.value.split(",").map(Number));
                break;

            case "16":
                if (!arrayInput.value) return resultado.innerHTML = "Ingresa un vector.";
                resultado.innerHTML = calculateAverage(arrayInput.value.split(",").map(Number));
                break;

            case "26":
    if (!subarrayInput.value) {
        resultado.innerHTML = "Ingresa los números separados por comas.";
        return;
    }
    resultado.innerHTML = encontrarSubarrayMaximo(subarrayInput.value);
    break;

            case "27":
                if (!array1Input.value || !array2Input.value) {
                resultado.innerHTML = "Ingresa ambos vectores.";
                return;
    }
    resultado.innerHTML = combinarVectores(array1Input.value, array2Input.value);
    break;

            case "28":
                if (!primosInput.value) return resultado.innerHTML = "Ingresa un número.";
                resultado.innerHTML = encontrarPrimos(parseInt(primosInput.value)).join(", ");
                break;

            case "29":
                if (!matriz1Input.value || !matriz2Input.value) return resultado.innerHTML = "Ingresa matrices.";

                const parseMatriz = (input) =>
                    input.split(";").map(fila => fila.split(",").map(n => parseInt(n.trim())));

                const producto = multiplicarMatrices(
                    parseMatriz(matriz1Input.value),
                    parseMatriz(matriz2Input.value)
                );

                resultado.innerHTML = producto.map(f => f.join(", ")).join("<br>");
                break;

            case "30": ordenarPorMezcla(); break;

            default:
                resultado.innerHTML = "Selecciona un ejercicio válido";
        }
    }

    if (boton) boton.addEventListener("click", ejecutarEjercicio);

    ocultarTodosInputs();
});