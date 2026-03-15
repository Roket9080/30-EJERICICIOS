import { encontrarSubarrayMaximo } from "./integrantes/miguel/ej26.js";

const selectEjercicio = document.getElementById("selectEjercicio");
const boton = document.getElementById("botonEjecutar");

boton.addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio(){

    const ejercicio = selectEjercicio.value;

    switch(ejercicio){

        case "1":
            ejercicio1();
        break;

        case "2":
            ejercicio2();
        break;

        case "3":
            ejercicio3();
        break;

        case "26":
            encontrarSubarrayMaximo();
        break;

        default:
            document.getElementById("resultado").innerHTML =
            "Selecciona un ejercicio válido";

    }

}