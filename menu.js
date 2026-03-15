import { encontrarSubarrayMaximo } from "./integrantes/miguel/ej26.js";

const selectEjercicio = document.getElementById("selectEjercicio");
const boton = document.getElementById("botonEjecutar");

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
            transposeMatrix(matrix);
        break;
        
        case "22":
            dotProduct(vectorA, vectorB);
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
            encontrarSubarrayMaximo();
        break;
        
        case "27":
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