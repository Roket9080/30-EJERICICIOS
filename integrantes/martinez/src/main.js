// Importamos las funciones que interactúan con el DOM desde app.js
import {
  procesarMatriz,
  calcularProductoPunto,
  procesarConvolucion,
  ejecutarBusquedaBinaria,
  procesarRotacion,
} from "./app.js";

// Conectamos cada botón del HTML con su función correspondiente
document.getElementById("btnMatriz").addEventListener("click", procesarMatriz);
document
  .getElementById("btnPunto")
  .addEventListener("click", calcularProductoPunto);
document
  .getElementById("btnConv")
  .addEventListener("click", procesarConvolucion);
document
  .getElementById("btnBusqueda")
  .addEventListener("click", ejecutarBusquedaBinaria);
document.getElementById("btnRotar").addEventListener("click", procesarRotacion);
