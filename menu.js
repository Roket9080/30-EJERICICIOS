// menu.js
// Importaciones de todos los ejercicios
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

// Martinez
import { procesarMatriz } from "./integrantes/martinez/ejercicio21.js";
import { calcularProductoPunto } from "./integrantes/martinez/ejercicio22.js";
import { procesarConvolucion } from "./integrantes/martinez/ejercicio23.js";
import { ejecutarBusquedaBinaria } from "./integrantes/martinez/ejercicio24.js";
import { rotarVector } from "./integrantes/martinez/ejercicio25.js";

document.addEventListener("DOMContentLoaded", () => {
    const inputs = {
        // Inputs generales
        dataInput: document.getElementById("dataInput"),
        searchInput: document.getElementById("searchInput"),
        arrayInput12: document.getElementById("arrayInput12"), // Ejercicio 11
        numberInput: document.getElementById("numberInput"),
        inicioInput: document.getElementById("inicioInput"),
        finInput: document.getElementById("finInput"),
        baseInput: document.getElementById("baseInput"),
        exponenteInput: document.getElementById("exponenteInput"),
        terminosInput: document.getElementById("terminosInput"),
        subarrayInput: document.getElementById("subarrayInput"),
        array1Input: document.getElementById("array1Input"),
        array2Input: document.getElementById("array2Input"),
        primosInput: document.getElementById("primosInput"),
        // Ejercicio 21
        matriz21Input21: document.getElementById("matriz21Input21"),
        // Ejercicio 29
        matriz29InputA: document.getElementById("matriz29InputA"),
        matriz29InputB: document.getElementById("matriz29InputB"),
        // Ejercicios 22-25
        vectorAInput: document.getElementById("vectorAInput"),
        vectorBInput: document.getElementById("vectorBInput"),
        vectorXInput: document.getElementById("vectorXInput"),
        vectorYInput: document.getElementById("vectorYInput"),
        vector24Input: document.getElementById("vector24Input"),
        target24Input: document.getElementById("target24Input"),
        vector25Input: document.getElementById("vector25Input")
    };

    const resultado = document.getElementById("resultado");
    const selectEjercicio = document.getElementById("selectEjercicio");
    const boton = document.getElementById("botonEjecutar");

    function ocultarTodosInputs() {
        Object.values(inputs).forEach(input => {
            if(input){
                input.style.display = "none";
                input.value = "";
            }
        });
    }

    selectEjercicio.addEventListener("change", () => {
        ocultarTodosInputs();
        const ej = selectEjercicio.value;

        switch(ej){
            case "5": case "6": case "8": inputs.numberInput.style.display="inline-block"; break;
            case "7": inputs.inicioInput.style.display="inline-block"; inputs.finInput.style.display="inline-block"; break;
            case "9": inputs.baseInput.style.display="inline-block"; inputs.exponenteInput.style.display="inline-block"; break;
            case "10": inputs.terminosInput.style.display="inline-block"; break;
            case "11": inputs.arrayInput12.style.display="inline-block"; break;
            case "12": inputs.arrayInput12.style.display="inline-block"; break;
            case "13": inputs.dataInput.style.display="inline-block"; inputs.searchInput.style.display="inline-block"; break;
            case "14": case "15": case "16": inputs.arrayInput12.style.display="inline-block"; break;
            case "21": inputs.matriz21Input21.style.display="inline-block"; break;
            case "22": inputs.vectorAInput.style.display="inline-block"; inputs.vectorBInput.style.display="inline-block"; break;
            case "23": inputs.vectorXInput.style.display="inline-block"; inputs.vectorYInput.style.display="inline-block"; break;
            case "24": inputs.vector24Input.style.display="inline-block"; inputs.target24Input.style.display="inline-block"; break;
            case "25": inputs.vector25Input.style.display="inline-block"; break;
            case "26": inputs.subarrayInput.style.display="inline-block"; break;
            case "27": inputs.array1Input.style.display="inline-block"; inputs.array2Input.style.display="inline-block"; break;
            case "28": inputs.primosInput.style.display="inline-block"; break;
            case "29": inputs.matriz29InputA.style.display="inline-block"; inputs.matriz29InputB.style.display="inline-block"; break;
        }
    });

    function ejecutarEjercicio(){
        const ej = selectEjercicio.value;

        switch(ej){
            case "1": mostrarnumeros(); break;
            case "2": sumarNumeros(); break;
            case "3": mostrarPares(); break;
            case "4": tablaMultiplicar(); break;
            case "5":
                if(!inputs.numberInput.value) { resultado.innerHTML="Ingresa un número"; return; }
                resultado.innerHTML="Factorial: "+calcularFactorial(parseInt(inputs.numberInput.value)); break;
            case "6":
                if(!inputs.numberInput.value) { resultado.innerHTML="Ingresa un número"; return; }
                resultado.innerHTML=procesarNumero(parseInt(inputs.numberInput.value)); break;
            case "7":
                if(!inputs.inicioInput.value||!inputs.finInput.value) { resultado.innerHTML="Ingresa ambos números"; return; }
                resultado.innerHTML=cargarSuma(parseInt(inputs.inicioInput.value), parseInt(inputs.finInput.value)); break;
            case "8":
                if(!inputs.numberInput.value) { resultado.innerHTML="Ingresa un número"; return; }
                resultado.innerHTML=procesarLimite(parseInt(inputs.numberInput.value)); break;
            case "9": mostrarPotencia(); break;
            case "10": procesarTerminos(); break;

            // Ejercicio 11
            case "11":
                if(!inputs.arrayInput12.value) { resultado.innerHTML="Ingresa un vector"; return; }
                resultado.innerHTML = procesarVector(inputs.arrayInput12.value);
                break;

            case "12":
                if(!inputs.arrayInput12.value) { resultado.innerHTML="Ingresa un vector válido"; return; }
                mostrarMaximo(); break;

            case "13":
                if(!inputs.dataInput.value || !inputs.searchInput.value) { resultado.innerHTML="Ingresa datos"; return; }
                procesarBusqueda(inputs.dataInput.value, parseInt(inputs.searchInput.value)); break;

            case "14":
                if(!inputs.arrayInput12.value) { resultado.innerHTML="Ingresa un vector"; return; }
                resultado.innerHTML=reverseArray(inputs.arrayInput12.value.split(",").map(Number)).join(", "); break;
            case "15":
                if(!inputs.arrayInput12.value) { resultado.innerHTML="Ingresa un vector"; return; }
                resultado.innerHTML=countEvenNumbers(inputs.arrayInput12.value.split(",").map(Number)); break;
            case "16":
                if(!inputs.arrayInput12.value) { resultado.innerHTML="Ingresa un vector"; return; }
                resultado.innerHTML=calculateAverage(inputs.arrayInput12.value.split(",").map(Number)); break;

            // Ejercicio 21
            case "21":
                if(!inputs.matriz21Input21.value) { resultado.innerHTML="Ingresa la matriz"; return; }
                const matriz21 = inputs.matriz21Input21.value.split(";").map(f => f.split(",").map(n => parseInt(n.trim())));
                resultado.innerHTML = procesarMatriz(matriz21);
                break;

            case "22": calcularProductoPunto(); break;
            case "23": procesarConvolucion(); break;
            case "24": ejecutarBusquedaBinaria(); break;
            case "25":
                if(!inputs.vector25Input.value) { resultado.innerHTML="Ingresa un vector"; return; }
                const vec = inputs.vector25Input.value.split(",").map(Number);
                resultado.innerHTML = rotarVector(vec, 1).join(", ");
                break;

            case "26":
                if(!inputs.subarrayInput.value) { resultado.innerHTML="Ingresa números"; return; }
                resultado.innerHTML=encontrarSubarrayMaximo(inputs.subarrayInput.value); break;

            case "27":
                if(!inputs.array1Input.value || !inputs.array2Input.value) { resultado.innerHTML="Ingresa ambos vectores"; return; }
                resultado.innerHTML=combinarVectores(inputs.array1Input.value, inputs.array2Input.value); break;

            case "28":
                if(!inputs.primosInput.value) { resultado.innerHTML="Ingresa un número"; return; }
                resultado.innerHTML=encontrarPrimos(parseInt(inputs.primosInput.value)).join(", "); break;

            // Ejercicio 29
            case "29":
                if(!inputs.matriz29InputA.value || !inputs.matriz29InputB.value) { 
                    resultado.innerHTML="Ingresa matrices"; 
                    return; 
                }
                try {
                    const m1 = inputs.matriz29InputA.value.split(";").map(f=>f.split(",").map(n=>parseInt(n.trim())));
                    const m2 = inputs.matriz29InputB.value.split(";").map(f=>f.split(",").map(n=>parseInt(n.trim())));
                    const prod = multiplicarMatrices(m1,m2);
                    resultado.innerHTML = prod.map(f=>f.join(",")).join("<br>");
                } catch(err) {
                    resultado.innerHTML = "Error: " + err.message;
                }
                break;

            case "30": ordenarPorMezcla(); break;
            default: resultado.innerHTML="Selecciona un ejercicio válido";
        }
    }

    if(boton) boton.addEventListener("click", ejecutarEjercicio);
    ocultarTodosInputs();
});