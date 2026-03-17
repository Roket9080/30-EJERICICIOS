console.log("menu.js cargado correctamente");

//Miguel
import { encontrarSubarrayMaximo } from "./integrantes/miguel/ejercicio26.js";
import { combinarVectores } from "./integrantes/miguel/ejercicio27.js";
import { encontrarPrimos } from "./integrantes/miguel/ejercicio28.js";
import { multiplicarMatrices } from "./integrantes/miguel/ejercicio29.js";
import { ordenarPorMezcla } from "./integrantes/miguel/ejercicio30.js";
//Cristian
import { procesarBusqueda } from "./integrantes/cristian/ejercicio13.js";
import { reverseArray } from "./integrantes/cristian/ejercicio14.js";
import { countEvenNumbers } from "./integrantes/cristian/ejercicio15.js";
import { calculateAverage } from "./integrantes/cristian/ejercicio16.js";
//Liseth
import { mostrarnumeros } from "./integrantes/liseth/ejercicio1.js";
import { sumarNumeros } from "./integrantes/liseth/ejercicio2.js";
import { mostrarPares } from "./integrantes/liseth/ejercicio3.js";
import { tablaMultiplicar } from "./integrantes/liseth/ejercicio4.js";
//Martinez
import { procesarMatriz } from "./integrantes/martinez/ejercicio21.js";
import { calcularProductoPunto } from "./integrantes/martinez/ejercicio22.js";
import { procesarConvolucion } from "./integrantes/martinez/ejercicio23.js";
import { ejecutarBusquedaBinaria } from "./integrantes/martinez/ejercicio24.js";
import { rotarVector } from "./integrantes/martinez/ejercicio25.js";
//Sebastian
import { calcularFactorial } from "./integrantes/sebastian/ejercicio5.js";
import { procesarNumero } from "./integrantes/sebastian/ejercicio6.js";
import { cargarSuma } from "./integrantes/sebastian/ejercicio7.js";
import { procesarLimite } from "./integrantes/sebastian/ejercicio8.js";


const selectEjercicio = document.getElementById("selectEjercicio");
const boton = document.getElementById("botonEjecutar");

const subarrayInput = document.getElementById("subarrayInput");
const array1Input = document.getElementById("array1Input");
const array2Input = document.getElementById("array2Input");
const resultado = document.getElementById("resultado");


selectEjercicio.addEventListener("change", () => {
    const ejercicio = selectEjercicio.value;

    // Ocultar todos los inputs por defecto
    subarrayInput.style.display = "none";
    array1Input.style.display = "none";
    array2Input.style.display = "none";

    // Limpiar valores
    subarrayInput.value = "";
    array1Input.value = "";
    array2Input.value = "";
    resultado.innerHTML = "";

    // Mostrar inputs según ejercicio
    if (ejercicio === "26") {
        subarrayInput.style.display = "inline-block";
    } else if (ejercicio === "27") {
        array1Input.style.display = "inline-block";
        array2Input.style.display = "inline-block";
    }
});

boton.addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio(){

    const ejercicio = selectEjercicio.value;

    switch(ejercicio){

        case "1":
            mostrarnumeros();
        break;

        case "2":
            sumarNumeros();
        break;

        case "3":
            mostrarPares();
        break;

        case "4":
            tablaMultiplicar();
        break;

        case "5":
            calcularFactorial();
        break;
        
        case "6":
            procesarNumero();
        break;
        
        case "7":
            cargarSuma();
        break;

        case "8":
            procesarLimite();
        break;

        case "9":
            mostrarPotencia()
        break;
        
        case "10":
            procesarTerminos();
        break;
        
        case "11":
            procesarVector();
        break;
        
        case "12":
            mostrarMaximo();
        break;
        
        case "13":
            procesarBusqueda();
        break;
        
        case "14":
            reverseArray();
        break;    

        case "15":
            countEvenNumbers();
        break;
        
        case "16":
            calculateAverage();
        break;
        
        case "17":
            removeDuplicates(array);
        break;
        
        case "18":
            bubbleSort(array);
        break;
        
        case "19":
            multiply(a, b);
        break;
        
        case "20":
            countVowels(letters);
        break;
        
        case "21":
            procesarMatriz();
        break;
        
        case "22":
            calcularProductoPunto();
        break;
        
        case "23":
            procesarConvolucion();
        break;

        case "24":
            ejecutarBusquedaBinaria();
        break;

        case "25":
            rotarVector();       
        break;

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
            encontrarPrimos();
        break;
        
        case "29":
            multiplicarMatrices();
        break;
        
        case "30":
            ordenarPorMezcla();
        break;                

        default:
            document.getElementById("resultado").innerHTML =
            "Selecciona un ejercicio válido";

    }

}