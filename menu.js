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

document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const selectEjercicio = document.getElementById("selectEjercicio");
    const boton = document.getElementById("botonEjecutar");

    const subarrayInput = document.getElementById("subarrayInput");
    const array1Input = document.getElementById("array1Input");
    const array2Input = document.getElementById("array2Input");
    const primosInput = document.getElementById("primosInput");
    const matriz1Input = document.getElementById("matriz1Input");
    const matriz2Input = document.getElementById("matriz2Input");

    const dataInput = document.getElementById("dataInput");
    const searchInput = document.getElementById("searchInput");
    const arrayInput = document.getElementById("arrayInput");
    const resultado = document.getElementById("resultado");

    // Ocultar todos los inputs
    function ocultarTodosInputs() {
        [subarrayInput, array1Input, array2Input, primosInput,
         matriz1Input, matriz2Input, dataInput, searchInput, arrayInput]
         .forEach(input => {
            if (input) {
                input.style.display = "none";
                input.value = "";
            }
        });
    }

    // Mostrar inputs según ejercicio seleccionado
    selectEjercicio.addEventListener("change", () => {
        ocultarTodosInputs();
        const ejercicio = selectEjercicio.value;

        if (ejercicio === "13") {
            if (dataInput) dataInput.style.display = "inline-block";
            if (searchInput) searchInput.style.display = "inline-block";
        } else if (["14", "15", "16"].includes(ejercicio)) {
            if (arrayInput) arrayInput.style.display = "inline-block";
        } else if (ejercicio === "26") subarrayInput.style.display = "inline-block";
        else if (ejercicio === "27") {
            array1Input.style.display = "inline-block";
            array2Input.style.display = "inline-block";
        } else if (ejercicio === "28") primosInput.style.display = "inline-block";
        else if (ejercicio === "29") {
            matriz1Input.style.display = "inline-block";
            matriz2Input.style.display = "inline-block";
        }
    });

    // Función principal para ejecutar ejercicios
    function ejecutarEjercicio() {
        const ejercicio = selectEjercicio.value;

        switch(ejercicio) {
            case "1": mostrarnumeros(); break;
            case "2": sumarNumeros(); break;
            case "3": mostrarPares(); break;
            case "4": tablaMultiplicar(); break;
            case "5": calcularFactorial(); break; // Define esta función
            case "6": procesarNumero(); break;
            case "7": cargarSuma(); break;
            case "8": procesarLimite(); break;
            case "9": mostrarPotencia(); break;
            case "10": procesarTerminos(); break;
            case "11": procesarVector(); break;
            case "12": mostrarMaximo(); break;

            // --- EJERCICIO 13 ---
            case "13":
                if (!dataInput || !searchInput || !dataInput.value || !searchInput.value) {
                    resultado.innerHTML = "Ingresa vector y número a buscar.";
                    return;
                }
                procesarBusqueda(dataInput.value, parseInt(searchInput.value));
                break;

            // --- EJERCICIO 14 ---
            case "14":
                if (!arrayInput || !arrayInput.value) {
                    resultado.innerHTML = "Ingresa un vector.";
                    return;
                }
                const vec14 = arrayInput.value.split(",").map(Number);
                const vecInvertido = reverseArray(vec14);
                resultado.innerHTML = "Vector invertido: " + vecInvertido.join(", ");
                break;

            // --- EJERCICIO 15 ---
            case "15":
                if (!arrayInput || !arrayInput.value) {
                    resultado.innerHTML = "Ingresa un vector.";
                    return;
                }
                const vec15 = arrayInput.value.split(",").map(Number);
                const pares = countEvenNumbers(vec15);
                resultado.innerHTML = "Cantidad de pares: " + pares;
                break;

            // --- EJERCICIO 16 ---
            case "16":
                if (!arrayInput || !arrayInput.value) {
                    resultado.innerHTML = "Ingresa un vector.";
                    return;
                }
                const vec16 = arrayInput.value.split(",").map(Number);
                const promedio = calculateAverage(vec16);
                resultado.innerHTML = "Promedio: " + promedio;
                break;

            // --- OTROS CASES ---
            case "17": removeDuplicates(array); break;
            case "18": bubbleSort(array); break;
            case "19": multiply(a, b); break;
            case "20": countVowels(letters); break;
            case "21": procesarMatriz(); break;
            case "22": calcularProductoPunto(); break;
            case "23": procesarConvolucion(); break;
            case "24": ejecutarBusquedaBinaria(); break;
            case "25": rotarVector(); break;
            case "26":
                if (!subarrayInput.value) {
                    resultado.innerHTML = "Ingresa los números separados por comas.";
                    return;
                }
                encontrarSubarrayMaximo();
                break;
            case "27":
                if (!array1Input.value || !array2Input.value) {
                    resultado.innerHTML = "Ingresa ambos vectores.";
                    return;
                }
                combinarVectores();
                break;
            case "28":
                if (!primosInput.value) {
                    resultado.innerHTML = "Ingresa un número mayor o igual a 2.";
                    return;
                }
                const limite = parseInt(primosInput.value);
                const primos = encontrarPrimos(limite);
                resultado.innerHTML = "Números primos: " + primos.join(", ");
                break;
            case "29":
                if (!matriz1Input.value || !matriz2Input.value) {
                    resultado.innerHTML = "Ingresa ambas matrices.";
                    return;
                }
                function parseMatriz(input) {
                    return input.split(";").map(fila => fila.split(",").map(n => parseInt(n.trim())));
                }
                const m1 = parseMatriz(matriz1Input.value);
                const m2 = parseMatriz(matriz2Input.value);
                const producto = multiplicarMatrices(m1, m2);
                resultado.innerHTML = producto.map(fila => fila.join(", ")).join("\n");
                break;
            case "30": ordenarPorMezcla(); break;

            default:
                resultado.innerHTML = "Selecciona un ejercicio válido";
        }
    }

    // Listener del botón
    if (boton) boton.addEventListener("click", ejecutarEjercicio);

    // Ocultar inputs al cargar la página
    ocultarTodosInputs();
});